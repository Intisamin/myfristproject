module.exports=function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 res.setHeader('Allow','GET');
 if(req.method!=='GET')return res.status(405).json({code:'METHOD_NOT_ALLOWED'});
 return res.status(503).json({code:'RUNNER_LOCKED',message:'Aun no existen BD remota, autenticacion Google Drive de servidor ni sistema de aprobaciones persistentes. Ninguna accion puede ejecutarse.',writesEnabled:false});
};
