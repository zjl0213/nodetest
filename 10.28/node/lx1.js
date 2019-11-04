var http = require("http")
var url=require("url")
// 
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
                //协议  主机/域名  端口
    var result="http://localhost:3000/?username=dfs&password=sdfsdf"

    // res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    // console.log(url)
    // var obg=url.parse(req.url,true).query
    // var obg=url.format({
        
    // })//反序列化

    //resolve
    console.log(url  )
    console.log(url.parse(result,true))
    var obg=url.resolve("http://localhost:3000","/new")
    // console.log(url.parse(result,true))
    // console.log(obg)
    res.end()
}).listen(3000)