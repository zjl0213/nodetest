var http=require("http")
var fs=require("fs")

http.createServer((req,res)=>{
	fs.readFile("./1/1.txt",(err,data)=>{   //普通获取
			console.log(data)
			res.end(data)
	})

	//pipe   创建文件处理流   管道  例:流把数据分成一块一块的, 可以通过管道传输
	//fs.createReadStream;  //（创建文件读取流）创建可读流
      var fsStream=fs.createReadStream("./1/1.txt")//流的方式去获取    		//source
		fsStream.pipe(res)   //pipe  管道
	


	

}).listen(3000)
