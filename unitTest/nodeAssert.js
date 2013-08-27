var assert = require('assert'),
	arr = [1,2,3];
//若没通过则，则抛出 AssertionError:
//assert(value, message) equivalent to  assert.ok(value, [message]) 
//equivalent to assert.equal(true, !!value, message);
assert(1 == arr[0],'the first num of the arr should be 1');
assert.equal(1, arr[0],'the first num of the arr should be 1');
assert.notEqual(1, arr[1],'can\'t be same');
assert.strictEqual(1,1,'');// ===
//主动抛错
//assert.fail(1, 2, 'actual 1 and expected 2 ,failed');//assert.fail(actual, expected, message, operator)

assert.deepEqual({
	name:'sth',
	obj:{name:'other'}
},{
	name:'sth',
	obj:{name:'other'}
}, 'compare deeply into the properties');

/*assert.equal({
	name:'sth',
	obj:{name:'other'}
},{
	name:'sth',
	obj:{name:'other'}
}, 'compare the reference');*/