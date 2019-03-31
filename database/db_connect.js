var mysql = require('mysql');

module.exports = function() {
    var config = require('./db_config');
    var pool = mysql.createPool({
        host    : config.host,
        user    : config.user,
        port    :config.port,
        password:config.password,
        database:config.database
    });

    return {
        getConnection: (callback) => {
            pool.getConnection(callback);
        },
        end: (callback) => {
            pool.end(callback);
        }
    }
}();