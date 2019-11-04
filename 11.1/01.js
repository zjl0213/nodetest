//
var  express=require("express")
var path=require("path");
var app=express();
//静态资源中间件  expre.static   中间件必须通过use去使用，这样才能保证
//和express进行关联


var   static=path.resolve(__dirname,"./1")
app.use(express.static(static))


//app.use(express.static("./1"))     

express.static("./1")





app.get("/",(req,res)=>{
    res.send("服务搭建成功")
})
app.listen(3000)