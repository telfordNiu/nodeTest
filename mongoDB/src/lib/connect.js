//连接数据库
var connect = {},
	dbConfig = require("../config").mongodb,
	mongo = require("mongoskin"),
	logger = require('./logger').dbLogger;
logger.log("logger ok ~");	
logger.error("logger ok ~");	
// function connectToDB () {
// 	var connectionString = dbConfig.host + ':' + dbConfig.port + '/' + dbConfig.db + '?auto_reconnect=true';
// 	return mongo.db(connectionString, {safe:false, maxPoolSize: dbConfig.max_pool_size || 1000});
// }
// connect.db = connectToDB();

module.exports = connect;