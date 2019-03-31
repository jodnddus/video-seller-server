var pool = require('./db_connect');
var bcrypt = require('bcrypt');

module.exports = () => {
    return {
        register: function(data) {
            pool.getConnection((err, con) => {
                //회원정보를 삽입하기 전에 유저 이름이 중복되는지 확인해야 함
                var sql = `INSERT INTO users VALUES("${data.email}", "${data.password}", "${data.username}")`;
                con.query(sql);
            });
        },
        login: function(data, fn) {
            pool.getConnection((err, con) => {
                var sql = `SELECT * from users where username = ?`;
                con.query(sql, data.username, (err, result) => {
                    //result의 길이가 0 => 일치하는 정보가 없다는 뜻
                    if (result.length === 0) {
                        fn(`No result`);
                    } else {
                        //이메일이 틀릴 때
                        if (data.email !== result[0].email) {
                            fn(`No email: ${data.email}`);
                        //비밀번호가 틀릴 때
                        } else if (!bcrypt.compareSync(data.password, result[0].password)) {
                            fn(`No password: ${data.password}`);
                        //위의 조건들에 다 통과되었으면 일치하는 정보를 입력했다는 것.
                        } else {
                            fn(`Pass`);
                        }
                    }
                });
            });
        }
    }
}