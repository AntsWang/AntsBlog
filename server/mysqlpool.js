var mysql = require('mysql');
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"blog"
})
var query = function(sql,callback){
    pool.getConnection(function(err,conn){
if(err){
    callback(err,null,null);
}else{
    conn.query(sql,function(err,result){
     callback(err,result)
    })
    conn.release();
}
    })

}

module.exports = query;