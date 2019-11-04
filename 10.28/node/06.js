var http = require("http")
var fs = require("fs")
var url=require("url")

http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-type":"textml;charset=utf-8"})


    // res.end(req.toString())
    
    console.log(req.query)
    res.end(req.query)
    
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    var obj=url.parse(req.url,true).query
    res.end("接收的username是："+obj.username)
    
    
    
}).listen(3000)

//var url=require("url")    url模块      
/*1.parse 
 * 
 * resolve   解析成正确的路径
 * 
 * url.parse（）.query()   可以处理get请求
 * 
 */
