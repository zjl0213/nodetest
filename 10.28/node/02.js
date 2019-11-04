var http=require("http")
var server=http.createServer((req,res)=>{
    //响应头 Content-type  文本类型  text/html  text/plain
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    res.end("中国")
})
server.listen(3000)