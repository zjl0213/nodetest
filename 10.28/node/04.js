//req.url  请求 路径
var http=require("http")
var server=http.createServer((req,res)=>{
    //响应头 Content-type  文本类型  text/html  text/plain

    console.log(req)
  	res.end(req.toString())   
})
server.listen(3000)