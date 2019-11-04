/*var http=require("http")
var server=http.createServer((req,res)=>{
	
	
})
server.listen(3000)
*/

// req.url  请求 路径
var http = require("http")
var fs = require("fs")

http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-type":"textml;charset=utf-8"})

   if(req.url=="/favicon.ico"){
  		return 
   }
   
   if( req.url=="/"){
       fs.readFile("./1.html",(err,data)=>{
           res.end(data)
       })
   }else if( req.url=="/foo"){
    fs.readFile("./2.html",(err,data)=>{
        res.end(data)
    })
}else{
    fs.readFile("./404.html",(err,data)=>{
        res.end(data)
    })   
}
    // res.end(req.toString())
}).listen(3000)