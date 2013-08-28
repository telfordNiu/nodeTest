//官网 http://chaijs.com 支持 assert,should，expect
// http://chaijs.com/api/bdd/
//chai的should不支持includeEql
var chai = require('chai');
chai.should();
var user = {
    name: 'tj'
  , pets: ['tobi', 'loki', 'jane', 'bandit'],
  age:35
};
var expect = chai.expect;

true.should.be.ok;// val== true
(1).should.be.ok;//必须要加()

true.should.be.true // val=== true
'1'.should.not.be.true;

({ foo: 'bar' }).should.eql({ foo: 'bar' });//deep equal
({ foo: 'bar' }).should.not.equal({ foo: 'bar' });
'4'.should.not.equal(4); // ===

user.should.have.property('name', 'tj');
user.should.have.property('name').equal('tj');
user.should.have.property('pets').with.lengthOf(4);
user.should.have.property('pets').with.eql(['tobi', 'loki', 'jane', 'bandit']);
user.should.be.a('object')
//user.should.be.a('string')// 很语义化啊,错误信息会根据调用的方法自动生成。
user.age.should.be.within(5, 50);
user.age.should.be.above(5).and.below(50);
user.age.should.not.be.within(1, 10)
false.should.be.false; //Assert === false:
[].should.be.empty; //Asserts that length is 0
// [].should.be.an.instanceOf(Array)
//[[1],[2],[3]].should.includeEql([3]);//chai的should不支持。。。 includeEql
[1,2,3].should.contain(1);//ok 如何用deepequal呢，难道要先取了再比较。。。

//-------------------chai should end -------------------------


expect(true).to.be.ok;
expect(1).to.be.ok;

expect(true).to.be.true;
expect('1').to.not.be.true;

expect({ foo: 'bar' }).be.eql({ foo: 'bar' });
expect('4').not.be.equal(4);

expect(user).to.have.property('name', 'tj');
expect(user).to.have.property('name').equal('tj');
expect(user).to.have.property('pets').with.lengthOf(4);
expect(user).to.have.property('pets').with.eql(['tobi', 'loki', 'jane', 'bandit']);
expect(user).to.be.a('object')

expect(user.age).to.be.within(5, 50);
expect(user.age).to.be.above(5).and.below(50);

//-------------------chai expect end -------------------------