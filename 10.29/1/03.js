	var http=require("http")
	 var fs=require("fs")
	var router=require("./router")
	http.createServer((req,res)=>{
		
     if(req.url=="/"){
        console.log(router)
     router.home(req,res)
     }else if(req.url=="/about"){
        router.about(req,res)
     }else if(req.url=="/new"){
         router.news(req,res)
     }else{
         res.end("404")
     }
	
	
 	//console.log(router);
	
	

    /*switch(req.url){
        

    }*/
	}).listen(3000)