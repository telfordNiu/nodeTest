var music = {},
	db = require('./connect').db,
	collectionName = 'music',
	logger = require('./logger').dbLogger;

db.bind(collectionName,{
	add : function(data,fn){
		this.insert(data,{},fn);
	}
});

var testMusicData = [{
	artist:'coldplay',
	type:'song',
	name:'yellow',
	label:'soft'
},{
	company:'unknow',
	type:'singer',
	name:'孙燕姿'
}
];
//添加数据
testMusicData.forEach(function(each){
	db[collectionName].add(each,{},afterInsert);
})

function afterInsert(err,msg){
	if (err) console.warn(err.message);
	if (err && err.message.indexOf('E11000 ') !== -1) {
      logger.error("music已存在:" + msg)
    }
    if(!err){
    	logger.info("music插入成功:" + msg);
    }
};


module.exports = music;