//接受get请求传输的参数
var express=require("express")
//console.log(express)
var app=express();
app.get("/",(req,res)=>{
        res.send("默认请求")
})

app.get("/list",(req,res)=>{
        console.log("接收到的参数为"+req.query.username)
        res.send({"data":req.query})
})
app.get("/getid/:id",(req,res)=>{
    console.log(req.params.id)
    res.send({"data":"接收的id为"+req.params.id})
})

app.listen(3000)
