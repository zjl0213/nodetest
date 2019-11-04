var express=require("express")
console.log(express)
var app=express();
app.get("/",(req,res)=>{

res.send({"success":"ok","data":[{"name":"tom","age":12},{}]})
 //get  指代get请求
});

app.post("/list",(req,res)=>{

    res.send({"success":"ok","data":[{"name":"tom","age":12},{}]})

})

app.all("/",(req,res)=>{
    res.send({"data":"数据请求"})
})
//all代表所有
//什么情况下会使用app.all   解答：控制全局功能时需要使用all
app.listen(3000)