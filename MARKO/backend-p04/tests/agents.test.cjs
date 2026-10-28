const {test}=require('node:test');const assert=require('node:assert/strict');const {AGENTS}=require('../lib/agents.cjs');
test('12 distinct agents',()=>{assert.equal(AGENTS.length,12);assert.equal(new Set(AGENTS.map(x=>x.id)).size,12)});
test('exactly 3 installed plugin agents',()=>assert.equal(AGENTS.filter(x=>x.status==='PLUGIN_INSTALLED').length,3));
test('analytics feedback and advertising agent defined',()=>{assert.ok(AGENTS.find(x=>x.id==='analiticoncio'));assert.ok(AGENTS.find(x=>x.id==='campañoncio'))});
