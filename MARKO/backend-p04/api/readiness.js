const {has}=require('../lib/security.cjs');
const {isConfigured}=require('../lib/db.cjs');
const {configured:driveConfigured}=require('../lib/drive.cjs');
module.exports=function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET')return res.status(405).json({code:'METHOD_NOT_ALLOWED'});
 const env=process.env;
 return res.status(200).json({
  version:'0.6.0',mode:'PERSONAL_PROTOTYPE',
  github:{repositoryConnected:true,deploymentsFromGitVerified:true,publicReadOnlyEndpoint:'/api/publications'},
  database:{driver:'POSTGRESQL',configured:isConfigured(),connected:false,requiresMigration:true,api:'/api/state'},
  drive:{folderReferencesConfigured:['MARKO_MEDIA_FOLDER_ID','MARKO_PRIVATE_STATE_FOLDER_ID','MARKO_PILOT_FOLDER_ID'].every(k=>has(env[k])),serverOAuthConfigured:driveConfigured(),readable:false,api:'/api/drive-status'},
  appAuth:{deploymentProtectedExternally:true,apiSecretConfigured:has(env.MARKO_API_TOKEN)},
  agents:{defined:12,installedPlugins:3,autonomousRunnerEnabled:false},
  execution:{generations:false,publishing:false,adCampaigns:false,paidActions:false},
  next:['Aprovisionar Postgres privado gratuito y aplicar SQL','Configurar DATABASE_URL desde panel privado Vercel','Configurar MARKO_API_TOKEN sin copiar a GitHub','Autorizar OAuth Google Drive metadata.readonly desde Google Cloud','Probar GET/POST idempotente con contenido no sensible']
 });
};
