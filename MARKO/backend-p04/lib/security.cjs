'use strict';
const crypto=require('node:crypto');
function has(v){return typeof v==='string'&&v.trim().length>0;}
function authorized(req, env=process.env){
  if(!has(env.MARKO_API_TOKEN))return {ok:false,code:'API_TOKEN_NOT_CONFIGURED',http:503};
  const header=req.headers?.authorization;
  if(!header||!header.startsWith('Bearer '))return {ok:false,code:'AUTH_REQUIRED',http:401};
  const input=Buffer.from(header.slice(7),'utf8'); const expected=Buffer.from(env.MARKO_API_TOKEN,'utf8');
  if(input.length!==expected.length||!crypto.timingSafeEqual(input,expected))return {ok:false,code:'AUTH_REQUIRED',http:401};
  return {ok:true};
}
function contentId(v){return typeof v==='string'&&/^[A-Za-z0-9][A-Za-z0-9_.-]{3,99}$/.test(v);}
function operationKey(v){return typeof v==='string'&&/^[a-zA-Z0-9][a-zA-Z0-9_.:-]{9,149}$/.test(v);}
function sha256(v){return typeof v==='string'&&/^[a-f0-9]{64}$/i.test(v);}
function jsonBody(body){
 if(body&&typeof body==='object'&&!Array.isArray(body))return body;
 if(typeof body==='string'&&body.length<=25000){try{const v=JSON.parse(body);return v&&typeof v==='object'&&!Array.isArray(v)?v:null}catch{return null}}
 return null;
}
function fail(res,code,http){return res.status(http).json({code});}
module.exports={has,authorized,contentId,operationKey,sha256,jsonBody,fail};
