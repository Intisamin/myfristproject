'use strict';
let pool;
function isConfigured(env=process.env){return typeof env.DATABASE_URL==='string'&&/^postgres(ql)?:\/\//i.test(env.DATABASE_URL);}
async function withClient(run){
 if(!isConfigured()) {const e=new Error('DATABASE_NOT_CONFIGURED');e.code='DATABASE_NOT_CONFIGURED';e.http=503;throw e;}
 if(!pool){
   const {Pool}=require('pg');
   pool=new Pool({connectionString:process.env.DATABASE_URL,max:3,connectionTimeoutMillis:4500,idleTimeoutMillis:10000,statement_timeout:6500,ssl:{rejectUnauthorized:true}});
 }
 const client=await pool.connect();try{return await run(client)}finally{client.release()}
}
module.exports={isConfigured,withClient};
