const express = require('express')
const path = require('path')
const mysql = require("mysql");
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql_config = require("./mysql");

const port = process.env.PORT || 8080
const app = express()
var sd = require('silly-datetime');

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
app.get('/list', function (req, res) {
    let sql = `select * from blogs`,obj = {
        flag:'SUCCESS',
        data:[],
        message:''
    };
    sqlConnect.query(sql,function(err,result){
        if(!err){
if(result.length<=0){
    obj = {
        flag:'FAIL',
        data:[],
        message:'无数据'
    }
res.send(JSON.stringify(obj))
}else{
    console.log(result);
    obj = {
        flag:'SUCCESS',
        data:result,
        message:'查询成功'
    }
    res.send(JSON.stringify(obj))
}
        }

    })
})
app.get('/p/:id', function (req, res) {
    console.log(req.params.id);
    let id = req.params.id;
    let sql = `select * from blogs where id=${id}`,obj = {
        flag:'SUCCESS',
        data:null,
        message:''
    };
    sqlConnect.query(sql,function(err,result){
        if(!err){
if(result.length<=0){
    obj = {
        flag:'FAIL',
        data:null,
        message:'无数据'
    }
res.send(JSON.stringify(obj))
}else{
    console.log(result);
    obj = {
        flag:'SUCCESS',
        data:result[0],
        message:'查询成功'
    }
    res.send(JSON.stringify(obj))
}
        }

    })
})
app.post('/login',function(req,res){
    let name = req.body.userName,password = req.body.password;
    let sql2 = `select * from user where username='${name}' and password='${password}'`;
     let obj = {
         flag:'SUCCESS',
         data:[],
         message:''
     }
     sqlConnect.query(sql2,function(err,result){
         console.log(err,result);
        if(err){
            console.log('err',err.message);
            obj = {
                flag:'FAIL',
                data:[],
                message:'登陆失败'
            }
            res.send(JSON.stringify(obj))
        }
        console.log(result);
        if(result.length<=0){
            obj = {
                flag:'FAIL',
                data:[],
                message:'用户名或密码错误'
            }
            res.send(JSON.stringify(obj))
        }else{
            obj = {
                flag:'SUCCESS',
                data:[],
                message:'登陆成功'
            }
            res.send(JSON.stringify(obj)) 
        } })
})
app.post('/addUser',function(req,res){
    let name = req.body.userName,password = req.body.password;
    let sql1 = `insert into user (username,password) values('${name}','${password}')`;
    let sql2 = `select * from user where username='${name}'`;
     let obj = {
         flag:'SUCCESS',
         data:[],
         message:'注册成功'
     }
     sqlConnect.query(sql2,function(err,result){
         console.log(err,result);
        if(err){
            console.log('err',err.message);
            obj = {
                flag:'FAIL',
                data:[],
                message:'注册失败'
            }
            res.send(JSON.stringify(obj))
        }
        console.log(result);
        if(result.length>0){
            obj = {
                flag:'FAIL',
                data:[],
                message:'用户名已存在'
            }
            res.send(JSON.stringify(obj))
        }else if(result.length<=0){
            sqlConnect.query(sql1,function(err,result){
                if(err){
                    console.log('err',err.message);
                    obj = {
                        flag:'FAIL',
                        data:[],
                        message:'注册失败'
                    }
                    res.send(JSON.stringify(obj))
                }
                obj = {
                    flag:'SUCCESS',
                    data:[],
                    message:'注册成功'
                }
                res.send(JSON.stringify(obj))
                })
        }
        })
})

app.post('/publish',function(req,res){
    let title = req.body.title,summary = req.body.summary,content=req.body.content,createTime =new Date().getTime();
    let sql1 = `insert into blogs (title,summary,content,createTime) values('${title}','${summary}','${content}','${createTime}')`;
     let obj = {
         flag:'SUCCESS',
         data:[],
         message:'发布成功'
     }
     sqlConnect.query(sql1,function(err,result){
         console.log(err,result);
        if(err){
            console.log('err',err.message);
            obj = {
                flag:'FAIL',
                data:[],
                message:'发布失败'
            }
            res.send(JSON.stringify(obj))
        }else{
            obj = {
                flag:'SUCCESS',
                data:[],
                message:'发布成功'
            }
            res.send(JSON.stringify(obj))
        }
        console.log(result);
        })
})

app.listen(port)
console.log("server started on port " + port)