//文档 https://github.com/visionmedia/should.js

require('should');
var user = {
    name: 'tj'
  , pets: ['tobi', 'loki', 'jane', 'bandit'],
  age:35
};
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
[[1],[2],[3]].should.includeEql([3]);
[[1],[2],{name:1}].should.includeEql({name:1});
[1,2,3].should.include(3);//equal

