var log4js = require('log4js'),
	logger;
log4js.configure('../my_log4js_configuration.json');
logger = {
	dbLogger:log4js.getLogger('dbLog')
}
logger.dbLogger.setLevel('INFO');


module.exports = logger;