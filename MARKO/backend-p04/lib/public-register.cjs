'use strict';
const URL='https://raw.githubusercontent.com/Intisamin/myfristproject/main/MARKO/publico/PUBLICACIONES_CONFIRMADAS.json';
function normalizePublicLedger(payload){
  if(!payload||!Array.isArray(payload.posts)) throw Error('INVALID_PUBLIC_REGISTER');
  const posts=payload.posts.filter(x=>typeof x.content_id==='string'&&/^[-A-Z0-9_]{4,70}$/i.test(x.content_id)&&typeof x.date==='string').slice(-100).map(p=>({content_id:p.content_id,date:p.date,status:p.network_status||'UNVERIFIED',title:String(p.title||'').slice(0,150),networks:Object.keys(p.urls||{}).filter(k=>['instagram','tiktok','facebook','youtube'].includes(k))}));
  return {source:'GITHUB_PUBLIC_REGISTER',source_url:URL,observed_at:payload.observed_at||null,registered_reels:posts.length,registered_network_posts:posts.reduce((sum,p)=>sum+p.networks.length,0),warning:'Solo refleja el registro publico disponible, NO las publicaciones recientes de Metricool.',posts};
}
async function fetchPublicLedger(fetcher=fetch){
 const response=await fetcher(URL,{signal:AbortSignal.timeout(6500),headers:{'Accept':'application/json','User-Agent':'MARKO-P05-prototype'}});
 if(!response.ok) throw Error('GITHUB_HTTP_'+response.status);
 const raw=await response.text();
 if(raw.length>200000) throw Error('REGISTER_TOO_LARGE');
 return normalizePublicLedger(JSON.parse(raw));
}
module.exports={URL,normalizePublicLedger,fetchPublicLedger};
