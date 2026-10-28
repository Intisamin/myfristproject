const {authorized,fail}=require('../lib/security.cjs');
const {configured,fetchFolderMetadata}=require('../lib/drive.cjs');
module.exports=async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return fail(res,'METHOD_NOT_ALLOWED',405);
 const auth=authorized(req);if(!auth.ok)return fail(res,auth.code,auth.http);
 if(!configured())return fail(res,'GOOGLE_OAUTH_NOT_CONFIGURED',503);
 const folder=req.query?.folder||'pilot';
 if(!['media','privateState','pilot'].includes(folder))return fail(res,'INVALID_FOLDER_KEY',400);
 try{return res.status(200).json(await fetchFolderMetadata(folder));}
 catch(e){console.error('MARKO_DRIVE_METADATA_ERROR',e.message);return fail(res,'GOOGLE_DRIVE_UNAVAILABLE',503);}
};
