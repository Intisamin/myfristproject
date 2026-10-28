'use strict';
const {has}=require('./security.cjs');
const FOLDERS={media:'MARKO_MEDIA_FOLDER_ID',privateState:'MARKO_PRIVATE_STATE_FOLDER_ID',pilot:'MARKO_PILOT_FOLDER_ID'};
function configured(env=process.env){return ['GOOGLE_CLIENT_ID','GOOGLE_CLIENT_SECRET','GOOGLE_REFRESH_TOKEN'].every(k=>has(env[k]));}
async function fetchFolderMetadata(folderKey,{env=process.env,fetcher=globalThis.fetch}={}){
 if(!Object.hasOwn(FOLDERS,folderKey))throw new Error('INVALID_FOLDER_KEY');
 if(!configured(env))throw new Error('GOOGLE_OAUTH_NOT_CONFIGURED');
 const id=env[FOLDERS[folderKey]];
 if(!id||!(/^[A-Za-z0-9_-]{10,150}$/).test(id))throw new Error('INVALID_FOLDER_CONFIG');
 const tokenReq=await fetcher('https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({client_id:env.GOOGLE_CLIENT_ID,client_secret:env.GOOGLE_CLIENT_SECRET,refresh_token:env.GOOGLE_REFRESH_TOKEN,grant_type:'refresh_token'}),signal:AbortSignal.timeout(6500)});
 if(!tokenReq.ok)throw new Error('GOOGLE_TOKEN_UNAVAILABLE');
 const token=await tokenReq.json();if(!token.access_token)throw new Error('GOOGLE_TOKEN_UNAVAILABLE');
 const dataReq=await fetcher(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(id)}?fields=id%2Cname%2CmimeType%2Ctrashed`,{headers:{Authorization:`Bearer ${token.access_token}`},signal:AbortSignal.timeout(6500)});
 if(!dataReq.ok)throw new Error('GOOGLE_FILE_UNAVAILABLE');
 const data=await dataReq.json();
 if(data.id!==id||data.trashed||data.mimeType!=='application/vnd.google-apps.folder')throw new Error('INVALID_FOLDER_METADATA');
 return {folder:folderKey,idMatches:true,name:data.name,readable:true};
}
module.exports={FOLDERS,configured,fetchFolderMetadata};
