const test=require('node:test');
const assert=require('node:assert/strict');
const {authorized,contentId,operationKey}=require('../lib/security.cjs');
test('API secret fails closed when absent',()=>assert.equal(authorized({headers:{}},{}).code,'API_TOKEN_NOT_CONFIGURED'));
test('rejects incorrect API tokens',()=>assert.equal(authorized({headers:{authorization:'Bearer wrong'}},{MARKO_API_TOKEN:'testing-private-secret-test-value'}).code,'AUTH_REQUIRED'));
test('accepts valid bearer token',()=>assert.equal(authorized({headers:{authorization:'Bearer testing-private-secret-test-value'}},{MARKO_API_TOKEN:'testing-private-secret-test-value'}).ok,true));
test('rejects unsafe content IDs and operation keys',()=>{assert.equal(contentId('../secret'),false);assert.equal(operationKey('x'),false);assert.equal(contentId('TIP-CD-20261022-IA-V2'),true)});
