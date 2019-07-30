const express = require('express')
const path = require('path')
const mysql = require("mysql");
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql_config = require("./mysql");

const port = process.env.PORT || 8080
const app = express()

const data = {
    code: 200,
    message: "success",
    data: [{
        id: 1,
        title: "恢复规划法规和",
        "sub": "的工会经费等各环节换个房间很干净的复合结构看的风景更好的九分裤",
        time: "2018-09-12",
        view: 12
    }]
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/dist'));
var sqlConnect = mysql.createConnection(mysql_config);
sqlConnect.connect();
var sql = 'select * from user';
sqlConnect.query(sql,function(err,result){
if(err){
    console.log('err',err.message);
}
console.log(result);
})

app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Token");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
    });
// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
// app.get('*', function (request, response){
//  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
// })
app.get('/list', function (request, response) {
    // response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
    response.json(JSON.stringify(data))
})
app.post('/addUser',function(req,res){
    console.log(req.body);
    res.json(JSON.stringify(req.body));

})

app.listen(port)
console.log("server started on port " + port)