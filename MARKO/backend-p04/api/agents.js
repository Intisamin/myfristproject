const {AGENTS}=require('../lib/agents.cjs');
module.exports=function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return res.status(405).json({code:'METHOD_NOT_ALLOWED'});
 return res.status(200).json({count:AGENTS.length,installed_plugins:AGENTS.filter(a=>a.status==='PLUGIN_INSTALLED').length,agents:AGENTS});
};
