const test=require('node:test');
const assert=require('node:assert/strict');
const {validateOperation,applyOperation,StateError}=require('../lib/state.cjs');
class FakePostgres{
 constructor(){this.contents=new Map();this.assets=new Map();this.operations=new Map();this.history=[]}
 async query(sql,vals=[]){
  this.history.push(sql);
  if(['BEGIN','COMMIT','ROLLBACK'].includes(sql))return {rows:[],rowCount:0};
  if(sql.includes('pg_advisory_xact_lock'))return {rows:[],rowCount:1};
  if(sql.startsWith('SELECT payload_sha256,receipt')){const r=this.operations.get(vals[0]);return {rows:r?[r]:[],rowCount:Number(Boolean(r))}}
  if(sql.startsWith('INSERT INTO marko_content')){
   if(this.contents.has(vals[0]))return {rows:[],rowCount:0};
   this.contents.set(vals[0],{content_id:vals[0],title:vals[1],source:vals[2]});return {rows:[{content_id:vals[0]}],rowCount:1};
  }
  if(sql.startsWith('SELECT title,source FROM marko_content')){const item=this.contents.get(vals[0]);return {rows:item?[{title:item.title,source:item.source}]:[],rowCount:Number(Boolean(item))}}
  if(sql.startsWith('SELECT 1 FROM marko_content'))return {rows:this.contents.has(vals[0])?[{exists:1}]:[],rowCount:Number(this.contents.has(vals[0]))};
  if(sql.startsWith('INSERT INTO marko_asset')){
   const key=vals[0]+'|'+vals[1];if(this.assets.has(key))return {rows:[],rowCount:0};
   this.assets.set(key,{kind:vals[2],sha:vals[3],drive:vals[4]});return {rows:[{asset_key:vals[1]}],rowCount:1};
  }
  if(sql.startsWith('SELECT kind,source_sha256,drive_file_id FROM marko_asset')){const item=this.assets.get(vals[0]+'|'+vals[1]);return {rows:item?[{kind:item.kind,source_sha256:item.sha,drive_file_id:item.drive}]:[],rowCount:Number(Boolean(item))}}
  if(sql.startsWith('INSERT INTO marko_operation')){this.operations.set(vals[0],{payload_sha256:vals[3],receipt:JSON.parse(vals[4])});return {rows:[],rowCount:1}}
  throw new Error('MOCK SQL NOT HANDLED: '+sql);
 }
}
const op={type:'register_content',operation_key:'p06:pilot:register:v1',content_id:'TIP-CD-20261022-IA-V2',title:'Piloto',source:'P0.3'};
test('write registry is idempotent with same operation key and payload',async()=>{const db=new FakePostgres();const a=await applyOperation(db,op);const b=await applyOperation(db,op);assert.equal(a.duplicate,false);assert.equal(b.duplicate,true);assert.equal(db.contents.size,1);assert.equal(db.operations.size,1)});
test('same idempotency key with changed payload causes conflict',async()=>{const db=new FakePostgres();await applyOperation(db,op);await assert.rejects(applyOperation(db,{...op,title:'Alterado'}),e=>e.code==='IDEMPOTENCY_KEY_REUSED')});
test('asset is observed but never considered verified',async()=>{const db=new FakePostgres();await applyOperation(db,op);const a=await applyOperation(db,{type:'observe_asset',content_id:op.content_id,operation_key:'p06:pilot:cover:v1',asset_key:'cover-20261022',kind:'COVER',sha256:'a'.repeat(64),drive_file_id:'18llxefJ_OxUIHQw3ZLAsPCMGWH9r7eiF'});assert.equal(a.receipt.status,'OBSERVED_UNVERIFIED');assert.equal(a.receipt.verified,false);assert.equal(db.assets.size,1)});
test('cannot observe asset of missing content',async()=>{const db=new FakePostgres();await assert.rejects(applyOperation(db,{type:'observe_asset',content_id:op.content_id,operation_key:'p06:missing:asset:v1',asset_key:'cover-20261022',kind:'COVER'}),e=>e.code==='CONTENT_NOT_FOUND')});
test('rejects paid, campaign, publication and approval commands',()=>{for(const type of ['publish','paid_generate','launch_meta_campaign','grant_approval','delete_all'])assert.throws(()=>validateOperation({...op,type}),e=>e.code==='ACTION_NOT_ALLOWED')});
test('asset keys require safe characters',()=>assert.throws(()=>validateOperation({type:'observe_asset',content_id:op.content_id,operation_key:'p06:test:invalid:v1',asset_key:'../file',kind:'COVER'}),e=>e.code==='INVALID_ASSET_KEY'));

test('conflicting content metadata is rejected, not silently overwritten',async()=>{const db=new FakePostgres();await applyOperation(db,op);await assert.rejects(applyOperation(db,{...op,operation_key:'p06:pilot:register:v2',title:'Different'}),e=>e.code==='CONTENT_ALREADY_EXISTS_DIFFERENT')});
test('conflicting asset SHA on same asset key is rejected',async()=>{const db=new FakePostgres();await applyOperation(db,op);const asset={type:'observe_asset',content_id:op.content_id,operation_key:'p06:pilot:cover:v2',asset_key:'cover-20261022',kind:'COVER',sha256:'a'.repeat(64)};await applyOperation(db,asset);await assert.rejects(applyOperation(db,{...asset,operation_key:'p06:pilot:cover:v3',sha256:'b'.repeat(64)}),e=>e.code==='ASSET_KEY_CONFLICT')});
