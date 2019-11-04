//解决乱码

//cd  切换目录
//cd..   回到上一层目录
//ctrl+c   结束当前程序

var http=require("http");


http.createServer((req,res)=>{
	//设置求响应头   content-type   文本类型   
	
	//res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
	res.end("hello world")
	
}).listen(3000)
