var express = require("express")
var app = express()
var path=require("path")
var cookieParser = require("cookie-parser")
app.use(cookieParser()) 
var static = path.resolve(__dirname, "public")
app.use(express.static(static))
app.get("/", (req, res) => {
console.log("首页中获取:"+req.cookies)
    res.send({"data":"local里面的cookie为："+req.cookies})
})
//设置cookie
app.get("/login", (req, res) => {
var obj=req.query.username
// req.cookies.cookiename=obj
//     res.send({
//         "data": req.query.username
//     })

//设置cookie maxAge  过期时常  httpOlny只允许在服务器修改cookie值
//signed 是否生成签名  domain  域名 secure
res.cookie("username",obj,{maxAge:9999,httpOnly:true})

res.send({"data":obj})

})
//获取cookie
app.get("/list", (req, res) => {
console.log(req.cookies.username)
res.send("成功")
})
app.listen(3000)







