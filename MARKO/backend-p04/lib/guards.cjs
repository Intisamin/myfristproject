'use strict';
const WRITE_ACTIONS=new Set(['publish','paid_generate','launch_meta_campaign']);
function decide(action, record, context={}){
  if (!WRITE_ACTIONS.has(action)) return {allowed:false,reason:'UNKNOWN_ACTION'};
  if (!context.authenticated) return {allowed:false,reason:'AUTH_REQUIRED'};
  if (!context.durableStoreConnected) return {allowed:false,reason:'DURABLE_STORE_REQUIRED'};
  if (!record || typeof record.content_id!=='string'||!record.content_id.trim()) return {allowed:false,reason:'CONTENT_ID_REQUIRED'};
  if (!context.writerEnabled) return {allowed:false,reason:'WRITES_DISABLED'};
  const approvals=record.approvals||{};
  if(action==='publish') {
    if(!record.finalVideoArchived||!(/^[a-f0-9]{64}$/i).test(record.finalVideoSha256||'')) return {allowed:false,reason:'FINAL_MEDIA_NOT_VERIFIED'};
    if(!approvals.finalVideo||!approvals.publish) return {allowed:false,reason:'PUBLICATION_APPROVAL_REQUIRED'};
    if(!context.network||!['instagram','tiktok','youtube','facebook'].includes(context.network)) return {allowed:false,reason:'NETWORK_REQUIRED'};
    if((record.publications||[]).some(p=>p.network===context.network&&['PUBLISHED','PENDING','SCHEDULED'].includes(p.status))) return {allowed:false,reason:'DUPLICATE_PUBLICATION'};
  }
  if(action==='paid_generate'){
    if(!approvals.spend||!Number.isFinite(context.costCap)||context.costCap<=0) return {allowed:false,reason:'SPEND_APPROVAL_REQUIRED'};
    if(context.assetSha256&&(record.assets||[]).some(a=>a.sha256===context.assetSha256&&a.status==='READY')) return {allowed:false,reason:'ASSET_EXISTS'};
  }
  if(action==='launch_meta_campaign'){
    if(!approvals.campaign||!context.adAccountId||!Number.isFinite(context.maxBudget)||context.maxBudget<=0||!context.startDate||!context.endDate||!context.campaignObjective) return {allowed:false,reason:'META_CAMPAIGN_APPROVAL_REQUIRED'};
  }
  return {allowed:true,reason:'AUTHORIZED'};
}
module.exports={decide};
