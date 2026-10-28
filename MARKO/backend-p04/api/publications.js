const {fetchPublicLedger}=require('../lib/public-register.cjs');
module.exports=async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return res.status(405).json({code:'METHOD_NOT_ALLOWED'});
 try {const result=await fetchPublicLedger();return res.status(200).json({connected:true,...result})}
 catch(e){return res.status(503).json({connected:false,source:'GITHUB_PUBLIC_REGISTER',reason:String(e.message||'UNAVAILABLE').slice(0,90),warning:'No se infiere disponibilidad del ledger privado ni de Metricool.'})}
};
