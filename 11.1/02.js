var express=require("express")

var cookieParse=require("cookie-parser")
var path=require("path");

var app=express()
//console.log(app)
//让pxpress和cookie建立起连接 
app.use(cookieParse())

var static=path.resolve(__dirname,"public")
app.use(express.static(static))

app.get("/",(req,res)=>{
    console.log("首页获取:"+req.cookies)
    res.send({"data":"login中的cookie为:"+req.cookies})


  
})

app.get("/login",(req,res)=>{
    var obj=req.query.username;
    console.log(obj)
    res.send({"data":obj})

//设置cookie   maxAge  国企市场   httpOnly  只允许在服务端修改cookide值
//signed  是否生成签名  domain  域名   secure
res.cookie("username",obj,{maxAge:9000,httpOnly:true})
 // res.send("index")

    req.cookies.username=obj;
    //console.log(req)

})

app.get("/list",(req,res)=>{
    console.log(req.cookies.username)
    res.send()
})

app.listen(3000)


/*
什么是cookie
//cookie是存在访问者计算机中的一个变量，便于访问同一域名或服务区存储的用户信息
cookied的优缺点
优点：协助服务承载压力
存在过期时间，不便于攻击者进行攻击


缺点
长度限制  
安全性比较低
存储量小  4kb
cookie存储的大小

cookie存储大小  4kb

cookie的安全性
安全性低
cookie的特点？

保存在浏览器本地，默认不加密，用户可以直接看到  
支持被删除

cookie便于用于攻击


cookie容易被篡改



*/
