//接收post传输的数据
//中间件

var express=require("express");
var bodyParser=require("body-parser")
console.log(express)
//console.log(bodyParser)

var app=express();
//使用中间件
app.use(bodyParser.json())   //处理json数据

app.use(bodyParser.urlencoded({extended:false}))


app.get("/",(req,res)=>{
    res.send("首页")
})

app.post("/dopost",(req,res)=>{
    console.log(req.body)
    res.send({"data": "接受到post的数据为:"+req.body.username})
})

app.listen(3000)




//静态资源中间件  express.static

//模板引擎 ejs   express-art-template

//cookie-parser

//express-session