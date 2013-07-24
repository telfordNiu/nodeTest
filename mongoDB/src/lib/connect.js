//连接数据库
var connect = {},
	dbConfig = require("../config").mongodb,
	mongo = require("mongoskin"),
	logger = require('./logger').dbLogger;

function connectToDB () {
	var connectionString = dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.db + '?auto_reconnect=true',
		mongoConnect = mongo.db(connectionString, {safe:false, maxPoolSize: dbConfig.max_pool_size || 1000},
		{
            w: -1,
            logger: {
                debug: function(message, object){logger.debug('> mongo|' + message)},
                log: function(message, object){logger.info('>>mongo|' + message)},
                error: function(message, object){logger.error('>>>mongo|' + message)}
            }
        });
        //输出 连接mongoDB时的一些信息。
	    mongoConnect.admin.serverStatus(function(err, doc) {
	        if(err) {
	            logger.error('mongodb ' + err);
	            process.exit(1);
	        } else {
	            logger.info('mongodb|connect to ' + connectionString + ' [ok]');
	           	// logger.info('mongodb: %s', JSON.stringify(doc));//mango 的一些信息
	            logger.info('mongodb current dbname: %s', dbConfig.db);
	        }
	    });
	return mongoConnect;
}
connect.db = connectToDB();

module.exports = connect;