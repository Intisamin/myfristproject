'use strict';
const crypto=require('node:crypto');
const {contentId,operationKey,sha256}=require('./security.cjs');
const ASSET_KINDS=new Set(['COVER','BROLL','AVATAR','AUDIO','FINAL_MP4','OTHER']);
const SAFE_OPERATIONS=new Set(['register_content','observe_asset']);
class StateError extends Error {constructor(code,http=400){super(code);this.code=code;this.http=http;}}
function validateOperation(body){
 if(!body||!SAFE_OPERATIONS.has(body.type))throw new StateError('ACTION_NOT_ALLOWED',403);
 if(!contentId(body.content_id))throw new StateError('INVALID_CONTENT_ID');
 if(!operationKey(body.operation_key))throw new StateError('INVALID_OPERATION_KEY');
 if(body.type==='register_content'){
   if(typeof body.title!=='string'||!body.title.trim()||body.title.length>200)throw new StateError('INVALID_TITLE');
   if(typeof body.source!=='string'||!body.source.trim()||body.source.length>120)throw new StateError('INVALID_SOURCE');
   return {type:body.type,content_id:body.content_id,operation_key:body.operation_key,title:body.title.trim(),source:body.source.trim()};
 }
 if(!ASSET_KINDS.has(body.kind))throw new StateError('INVALID_ASSET_KIND');
 if(typeof body.asset_key!=='string'||!(/^[a-zA-Z0-9_.:-]{8,128}$/).test(body.asset_key))throw new StateError('INVALID_ASSET_KEY');
 if(body.sha256!==undefined&&body.sha256!==null&&!sha256(body.sha256))throw new StateError('INVALID_SHA256');
 if(body.drive_file_id!==undefined&&body.drive_file_id!==null&&(!(/^[A-Za-z0-9_-]{10,150}$/).test(body.drive_file_id)))throw new StateError('INVALID_DRIVE_ID');
 return {type:body.type,content_id:body.content_id,operation_key:body.operation_key,asset_key:body.asset_key,kind:body.kind,sha256:body.sha256||null,drive_file_id:body.drive_file_id||null};
}
function hashPayload(p){const sorted=Object.fromEntries(Object.entries(p).sort(([a],[b])=>a.localeCompare(b)));return crypto.createHash('sha256').update(JSON.stringify(sorted)).digest('hex');}
async function applyOperation(client,payload){
 const op=validateOperation(payload);
 const payloadHash=hashPayload(op);
 await client.query('BEGIN');
 try{
   await client.query('SELECT pg_advisory_xact_lock(hashtext($1))',[op.operation_key]);
   const prev=await client.query('SELECT payload_sha256,receipt FROM marko_operation WHERE operation_key=$1',[op.operation_key]);
   if(prev.rows.length){
     if(prev.rows[0].payload_sha256!==payloadHash)throw new StateError('IDEMPOTENCY_KEY_REUSED',409);
     await client.query('COMMIT'); return {duplicate:true,receipt:prev.rows[0].receipt};
   }
   let result;
   if(op.type==='register_content'){
     const r=await client.query(`INSERT INTO marko_content(content_id,title,source,stage)
       VALUES($1,$2,$3,'REGISTERED') ON CONFLICT(content_id) DO NOTHING RETURNING content_id`,[op.content_id,op.title,op.source]);
     if(!r.rowCount){
       const previous=await client.query('SELECT title,source FROM marko_content WHERE content_id=$1',[op.content_id]);
       if(!previous.rows.length||previous.rows[0].title!==op.title||previous.rows[0].source!==op.source)throw new StateError('CONTENT_ALREADY_EXISTS_DIFFERENT',409);
     }
     result={content_id:op.content_id,status:r.rowCount?'REGISTERED':'EXISTS_UNCHANGED',script_modified:false};
   }else{
     const exists=await client.query('SELECT 1 FROM marko_content WHERE content_id=$1',[op.content_id]);
     if(!exists.rows.length)throw new StateError('CONTENT_NOT_FOUND',404);
     const r=await client.query(`INSERT INTO marko_asset(content_id,asset_key,kind,source_sha256,drive_file_id,status)
       VALUES($1,$2,$3,$4,$5,'OBSERVED_UNVERIFIED')
       ON CONFLICT(content_id,asset_key) DO NOTHING RETURNING asset_key`,[op.content_id,op.asset_key,op.kind,op.sha256,op.drive_file_id]);
     if(!r.rowCount){
       const previous=await client.query('SELECT kind,source_sha256,drive_file_id FROM marko_asset WHERE content_id=$1 AND asset_key=$2',[op.content_id,op.asset_key]);
       if(!previous.rows.length||previous.rows[0].kind!==op.kind||(previous.rows[0].source_sha256||null)!==op.sha256||(previous.rows[0].drive_file_id||null)!==op.drive_file_id)throw new StateError('ASSET_KEY_CONFLICT',409);
     }
     result={content_id:op.content_id,asset_key:op.asset_key,status:r.rowCount?'OBSERVED_UNVERIFIED':'EXISTS_UNCHANGED',verified:false};
   }
   const receipt={...result,operation_key:op.operation_key,type:op.type};
   await client.query(`INSERT INTO marko_operation(operation_key,content_id,type,payload_sha256,receipt)
     VALUES($1,$2,$3,$4,$5::jsonb)`,[op.operation_key,op.content_id,op.type,payloadHash,JSON.stringify(receipt)]);
   await client.query('COMMIT');return {duplicate:false,receipt};
 }catch(e){await client.query('ROLLBACK');throw e;}
}
module.exports={StateError,validateOperation,hashPayload,applyOperation};
