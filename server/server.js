const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

const data = {
    code:200,
    message:"success",
    data:[
        {id:1,title:"恢复规划法规和","sub":"的工会经费等各环节换个房间很干净的复合结构看的风景更好的九分裤",time:"2018-09-12",view:12}
    ]
}

// 通常用于加载静态资源
app.use(express.static(__dirname + '/dist'))

// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
// app.get('*', function (request, response){
//  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
// })
app.get('/list', function (request, response){
   // response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
    response.json(JSON.stringify(data))
   })

app.listen(port)
console.log("server started on port " + port)