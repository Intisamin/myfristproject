const {authorized,contentId,jsonBody,fail}=require('../lib/security.cjs');
const {isConfigured,withClient}=require('../lib/db.cjs');
const {applyOperation,StateError}=require('../lib/state.cjs');
module.exports=async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET'&&req.method!=='POST')return fail(res,'METHOD_NOT_ALLOWED',405);
 const auth=authorized(req);if(!auth.ok)return fail(res,auth.code,auth.http);
 if(!isConfigured())return fail(res,'DATABASE_NOT_CONFIGURED',503);
 try{
  if(req.method==='GET'){
   const id=req.query?.content_id;
   if(!contentId(id))return fail(res,'INVALID_CONTENT_ID',400);
   const data=await withClient(async client=>{
    const c=await client.query('SELECT content_id,title,source,stage,created_at,updated_at FROM marko_content WHERE content_id=$1',[id]);
    if(!c.rows.length)return null;
    const a=await client.query('SELECT asset_key,kind,source_sha256,drive_file_id,status FROM marko_asset WHERE content_id=$1 ORDER BY created_at',[id]);
    return {...c.rows[0],assets:a.rows};
   });
   if(!data)return fail(res,'CONTENT_NOT_FOUND',404);
   return res.status(200).json(data);
  }
  const body=jsonBody(req.body);if(!body)return fail(res,'INVALID_BODY',400);
  const output=await withClient(client=>applyOperation(client,body));
  return res.status(output.duplicate?200:201).json(output);
 }catch(e){
   if(e instanceof StateError)return fail(res,e.code,e.http);
   if(e.code==='DATABASE_NOT_CONFIGURED')return fail(res,e.code,503);
   if(e.code==='23505')return fail(res,'CONFLICTING_REFERENCE',409);
   console.error('MARKO_STATE_ERROR',e.code||e.name);
   return fail(res,'STATE_UNAVAILABLE',503);
 }
};
