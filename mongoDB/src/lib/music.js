var music = {},
	db = require('./connect').db,
	collectionName = 'music',
	logger = require('./logger').dbLogger;

db.bind(collectionName,{
	clear:function(){//清空
		db[collectionName].findItems({},function(err,data){
			if(data.length > 0){
				// 删除所有数据
				db[collectionName].removeAll({},function(err,msg){
					if (err) console.error(err.msg);
					if(!err){
				    	logger.info("成功删除所有数据");//msg是undefined...

					}
				});

			}else{
				console.log("music上没有数据!")
			}

		});
	},
	removeAll:function(op,fn){
		this.remove(null,op,fn);
	},
	findTopN:function(query,topN,skik,fn){
		// this.findItems(query,fn);
	}

});



db[collectionName].clear();
// 添加数据
// var testMusicData = [{
// 	artist:'coldplay',
// 	type:'song',
// 	name:'yellow',
// 	label:'soft'
// },{
// 	company:'unknow',
// 	type:'singer',
// 	name:'孙燕姿'
// }
// ];
// testMusicData.forEach(function(each){
// 	db[collectionName].insert(each,{},afterInsert);
// });
function afterInsert(err,msg){
	if (err) console.error(err.msg);
	if (err && err.msg.indexOf('E11000 ') !== -1) {
      logger.error("music已存在:" + msg);
    }
    if(!err){
    	logger.info("music插入成功:" + msg);
    }
};


module.exports = music;