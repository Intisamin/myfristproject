module.exports=function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return res.status(405).json({code:'METHOD_NOT_ALLOWED'});
 const has=(key)=>Boolean(process.env[key]&&String(process.env[key]).trim());
 const configured={
   mediaFolderId:has('MARKO_MEDIA_FOLDER_ID'),
   privateStateFolderId:has('MARKO_PRIVATE_STATE_FOLDER_ID'),
   pilotFolderId:has('MARKO_PILOT_FOLDER_ID')
 };
 return res.status(200).json({
  version:'0.5.0',
  githubPublic:{mode:'READ_ONLY',requiresOauth:false,probe:'/api/publications'},
  googleDrive:{configured,authenticated:false,connected:false,reason:'No hay credenciales de servidor autorizadas'},
  database:{configured:false,connected:false,transactional:false},
  metricool:{chatgptConnectorPreviouslyVerified:true,vercelServerConnected:false},
  appAuth:{vercelAuthenticationEnforcedByPlatform:true,applicationApiTokensConfigured:false},
  execution:{agentRunner:'NOT_CONFIGURED',stateWrites:false,paidActions:false,publication:false,ads:false},
  next:['Autorizar conexion GitHub a Vercel para CI/CD','Elegir BD transaccional de costo aprobado','Autorizar Google OAuth de servidor mediante canal seguro','Activar pruebas end-to-end con datos restringidos']
 });
};
