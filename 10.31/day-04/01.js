var  http=require("http");
var fs=require("fs")
var art=require("art-template")
//console.log(art)
http.createServer((req,res)=>{
   

    fs.readFile("./1/index.art",(err,data)=>{
        var template=data.toString()  //buffer
        var   list=["tom","jack","rose"]
        var  htmlData=art.render(template,{a:list})
        res.end(htmlData);  

    })



}).listen(3000,()=>{
    console.log("成功挂起")
})