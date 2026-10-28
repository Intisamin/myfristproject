module.exports=function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return res.status(405).json({code:'METHOD_NOT_ALLOWED'});
 return res.status(200).json({application:'MARKO',version:'0.5.0',mode:'PERSONAL_PROTOTYPE',vercel:'RUNNING',orchestrator:'READ_ONLY_DEMONSTRATION',remoteDatabase:false,driveAutonomousRead:false,aiAgentsExecuting:false,autoPublish:false,paidGeneration:false,metaCampaigns:false});
};
