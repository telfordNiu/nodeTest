var common = {};
//恢复成干净的数据库 达到H2数据库的效果
common.clearDataBase = function(){

};
//测试数据的载入 TODO：数据量大时，从文件载入
common.initData = function(){

};
/* 插入数据库时的一些验证 */	
common.validateArgs = function (args, argProperties) {
    var returnObj = {};

    if (!args) {
        return false;
    }

    for (var arg in argProperties) {
        if (argProperties[arg].required) {
            if (args[arg] === void 0) {
                return false;
            }
        }

        if (args[arg] !== void 0) {
            if (argProperties[arg].type) {
                if (argProperties[arg].type === 'Number' || argProperties[arg].type === 'String') {
                    if (toString.call(args[arg]) !== '[object ' + argProperties[arg].type + ']') {
                        return false;
                    }
                } else if (argProperties[arg].type === 'Boolean') {
                    if (!(args[arg] !== true || args[arg] !== false || toString.call(args[arg]) !== '[object Boolean]')) {
                        return false;
                    }
                } else if (argProperties[arg].type === 'Array') {
                    if (!Array.isArray(args[arg])) {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                if (toString.call(args[arg]) !== '[object String]') {
                    return false;
                }
            }

            if (argProperties[arg]['max-length']) {
                if (args[arg].length > argProperties[arg]['max-length']) {
                    return false;
                }
            }

            if (argProperties[arg]['min-length']) {
                if (args[arg].length < argProperties[arg]['min-length']) {
                    return false;
                }
            }

            if (!argProperties[arg]['exclude-from-ret-obj']) {
                returnObj[arg] = args[arg];
            }
        }
    }

    return returnObj;
};
module.exports = common;