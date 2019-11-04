//"作业"   判断当前目录里面的内容是文件还是目录    是目录把目录输出



var fs=require("fs");
var http=require("http");
http.createServer((req,res)=>{
	
	fs.stat("2",(err,states)=>{
		
		console.log(states.isDirectory())
		
	})
	
	
	
	
	
}).listen(3000)
