//文档 https://github.com/visionmedia/should.js
//mocha -R Spec test/BDD/
require('should');

//BDD 风格
describe('test normal',function(){
	it('test', function(){
     	true.should.be.ok;
		(1).should.be.ok;
    })
});

describe('test Asynchronous ',function(){
	
	it('test', function(done){
		setTimeout(function(){
			(1).should.be.ok;
			done();//异步结束必须调用这个
		},1000);	
    })
});

describe('test before and after',function (){
	var user = null;
	//this.timeout(5000);//设置这个测试的最长时间，如果超过这个时间，则 报错
	try{
		before(function(done){//记得要参数done，如果before里有异步代码的话
			getUser(function(data){
				//console.log(data);
				user = data;
				done();//异步结束必须调用这个
				//console.log('done called');//被调用了
			});
		});

	}catch(exp){
		console.log(exp);
	}
	
	describe('test aysn before ',function(done){
		it('test', function(done){//注意，若传入参数done，则在该方法中必须调用done。否则会导致测试超时。默认的测试时间是2s
			// console.log('test start');
			user.should.have.property('age');
			// console.log('test end');
			done();			
	    })
	});

	after(function (done){
		setTimeout(function(){
			console.log('test finished');
			done();
		},10)
	});
	
});

function getUser(callBack){//模拟异步
	var user =  {
	    name: 'tj'
	  , pets: ['tobi', 'loki', 'jane', 'bandit'],
	  age:35
	};
	setTimeout(function(){
		callBack(user);
	},1000);
}


// true.should.be.true // val=== true
// '1'.should.not.be.true;

// ({ foo: 'bar' }).should.eql({ foo: 'bar' });//deep equal
// ({ foo: 'bar' }).should.not.equal({ foo: 'bar' });
// '4'.should.not.equal(4); // ===

// user.should.have.property('name', 'tj');
// user.should.have.property('name').equal('tj');
// user.should.have.property('pets').with.lengthOf(4);
// user.should.have.property('pets').with.eql(['tobi', 'loki', 'jane', 'bandit']);
// user.should.be.a('object')
// //user.should.be.a('string')// 很语义化啊,错误信息会根据调用的方法自动生成。
// user.age.should.be.within(5, 50);
// user.age.should.be.above(5).and.below(50);
// user.age.should.not.be.within(1, 10)
// false.should.be.false; //Assert === false:
// [].should.be.empty; //Asserts that length is 0
// // [].should.be.an.instanceOf(Array)
// [[1],[2],[3]].should.includeEql([3]);
// [[1],[2],{name:1}].should.includeEql({name:1});
// [1,2,3].should.include(3);//equal

