 //初始服务器
var http=require("http")
var server=  http.createServer(function(req,res){
   //req request  请求  res  response响应
   //结束响应  =》响应客户端
    res.end("hello node")
})
server.listen(3000,function(){
    console.log("fuwjksf")
})