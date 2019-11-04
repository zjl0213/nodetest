var  fs=require("fs")
var http=require("http")
http.createServer((req,res)=>{
	
	/*fs.writeFile("./1.txt","ssadasdasd",(err)=>{
		if(err){
			throw err
		}
		
		 res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
		
		res.end("写入成功")
	})
	*/
	
	//创建建一个目录

	/*fs.mkdir("./aa",(err)=>{
	if(err){
		throw  err
	}
	res.end("success")
	
	})
	*/

	
	//删除目录
	/*
		fs.rmdir("./aa",(err)=>{
			if(err){
			throw err
				}
		res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
		res.end("成功")
			
		})
	
	
	*/

	//创建文件
	/*fs.writeFile("./2.txt","newcontent",(err)=>{
		if(err){
			throw err
		}
		
	
		
		res.end("写入成功")
	})
	*/
	
	
	
	
	//删除文件
	
		/*fs.unlink("./2.txt",(err)=>{
			if(err){
			throw err
				}
		res.end("成功")
			
		})
	*/
	
	
	
	
	//追加内容
	
	/*fs.appendFile("./1.txt","追加的内容",(err)=>{
		
			if(err){
			throw err
				}
		res.end("成功")
		
		
	})
	*/
	
	
	//改名称
	/*fs.rename("./1.txt","./2.txt",(err)=>{
		if(err){
			throw err
				}
		res.end("成功")
		
	})
	
	*/
	
	
	
	
	


//判断文件状态


/*	fs.stat("./1.txt",(err,states)=>{
		
		//console.log(states.isDirectory())
		console.log(states.isFile())
		res.end("22")
		
	})
	
	*/
	
	
	
	
	
	
	
	
	
	
	//复制文件
	//打开文件
	//关闭文件
	
	
	
	
	
	
	
	
	
	
	
	
	
}).listen(3000)



