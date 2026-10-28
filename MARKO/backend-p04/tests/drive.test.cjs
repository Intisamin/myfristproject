const test=require('node:test');
const assert=require('node:assert/strict');
const {configured,fetchFolderMetadata}=require('../lib/drive.cjs');
const env={GOOGLE_CLIENT_ID:'mock-client-id',GOOGLE_CLIENT_SECRET:'mock-client-secret',GOOGLE_REFRESH_TOKEN:'mock-refresh',MARKO_PILOT_FOLDER_ID:'folder_ABC0123456789'};
test('OAuth requires three credential values',()=>{assert.equal(configured({}),false);assert.equal(configured(env),true)});
test('requests short-lived OAuth access before checking allowlisted folder metadata',async()=>{
 let called=[];const fetcher=async(url,options)=>{
  called.push(url);if(url==='https://oauth2.googleapis.com/token')return {ok:true,json:async()=>({access_token:'access-token'})};
  assert.equal(options.headers.Authorization,'Bearer access-token');return {ok:true,json:async()=>({id:env.MARKO_PILOT_FOLDER_ID,name:'TIP-CD-20261022-IA-V2',mimeType:'application/vnd.google-apps.folder',trashed:false})};
 };
 const result=await fetchFolderMetadata('pilot',{env,fetcher});assert.equal(result.readable,true);assert.equal(called.length,2);
});
test('rejects arbitrary Drive file requests outside allowlist',async()=>{await assert.rejects(fetchFolderMetadata('private-file-id',{env}),/INVALID_FOLDER_KEY/)});
