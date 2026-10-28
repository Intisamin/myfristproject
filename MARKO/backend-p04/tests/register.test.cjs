const {test}=require('node:test');const assert=require('node:assert/strict');const {normalizePublicLedger,fetchPublicLedger}=require('../lib/public-register.cjs');
test('public registry normalization and network counts',()=>{const r=normalizePublicLedger({observed_at:'2026-10-22',posts:[{content_id:'DOLOR-CD-002',date:'2026-10-21',title:'Test',urls:{instagram:'x',youtube:'y',fake:'z'}}]});assert.equal(r.registered_reels,1);assert.equal(r.registered_network_posts,2)});
test('no conversion claims in public registry',()=>{const r=normalizePublicLedger({posts:[]});assert.equal('conversions' in r,false)});
test('rejected bad input',()=>assert.throws(()=>normalizePublicLedger({other:[]})));
test('fetch uses raw GitHub only and validates payload',async()=>{const val=await fetchPublicLedger(async url=>({ok:true,text:async()=>JSON.stringify({posts:[{content_id:'TIP-CD-20261022-IA-V2',date:'2026-10-22',urls:{tiktok:'x'}}]})}));assert.equal(val.registered_reels,1)});
