var express=require("express")
var app=express()
//var ejs=require(ejs)
//在express里面设置模板引擎;
app.set("view engine","ejs")

app.get("/",(req,res)=>{
   // console.log(res)
    var list=["tom","jack","rose"]
    res.render("./views/index.ejs",{list:list})
   // res.send("213")
})

app.listen(3000)
