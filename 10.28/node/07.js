var http = require("http")

var url=require("url")


var a=url.resolve("/one/two/three","four")
console.log(a)


http.createServer((req,res)=>{
  
   // req.end(req.query)
    
    //url.parse（）.query()   可以处理get请求
     res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
  //   req.end("1")
    var obj=url.parse(req.url,true).query
    
    console.log(req.url)
    
    console.log("接收的username是："+obj.username)
    //req.end("接收的username是："+obj.username)
    
    req.end("sksk")
    
}).listen(3000)

//var url=require("url")    url模块      
/*1.parse 
 * 
 * resolve   解析成正确的路径
 * 
 *   可以处理get请求
 * 
 * 
 * parse:将字符串转换成对象     		query  获取对象传值
 * format 将json转换成字符串
 * 
 * 
 * url   获取地址栏
 * 
 */
