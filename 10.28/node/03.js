//fs file system 文件系统
//require 加载
var http=require("http")
var fs=require("fs")

var server=http.createServer((req,res)=>{
    //响应头 Content-type  文本类型  text/html  text/plain
fs.readFile("./1.txt",function(err,data){
	 if(req.url=="/favicon.ico"){
  		return 
   }
	
    console.log(data.toString())
    res.end(data)
})
   
})
server.listen(3000)