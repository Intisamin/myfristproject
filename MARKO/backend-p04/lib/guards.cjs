'use strict';
const protectedActions = new Set(['publish','paid_generate','launch_meta_campaign']);
function assess(action, record, context={}) {
  if (!protectedActions.has(action)) return {allowed:false,reason:'UNKNOWN_ACTION'};
  if (!context.durableStoreConnected) return {allowed:false,reason:'NO_DURABLE_STORE'};
  if (!record || !record.content_id) return {allowed:false,reason:'NO_CONTENT_ID'};
  if (action === 'publish') {
    if (!record.finalVideoArchived || !record.finalVideoSha256) return {allowed:false,reason:'FINAL_NOT_ARCHIVED'};
    if (!record.approvals?.finalVideo || !record.approvals?.publish) return {allowed:false,reason:'PUBLISH_APPROVAL_REQUIRED'};
    if (record.publications?.some(x=>x.network===context.network && ['PUBLISHED','SCHEDULED','PENDING'].includes(x.status)))
      return {allowed:false,reason:'DUPLICATE_PUBLICATION'};
  }
  if (action === 'paid_generate') {
    if (!record.approvals?.spend || !Number.isFinite(context.costCap) || context.costCap <= 0)
      return {allowed:false,reason:'SPEND_APPROVAL_REQUIRED'};
    if (record.assets?.some(x=>x.sha256 === context.assetSha256 && x.status === 'READY'))
      return {allowed:false,reason:'ASSET_ALREADY_EXISTS'};
  }
  if (action === 'launch_meta_campaign') {
    if (!record.approvals?.campaign || !context.adAccountId || !context.maxBudget
        || !context.startDate || !context.endDate || !context.campaignObjective)
      return {allowed:false,reason:'CAMPAIGN_APPROVAL_REQUIRED'};
  }
  if (!context.writerEnabled) return {allowed:false,reason:'WRITE_DISABLED'};
  return {allowed:true,reason:'AUTHORIZED'};
}
module.exports = {assess};
