var http=require("http")
// var fs=require("fs")
var router=require("./router")
http.createServer((req,res)=>{
    if(req.url=="/"){
    //    console.log(router)
    router.home(req,res)
    }else if(req.url=="/about"){
        router.about(req,res)
    }else if(req.url=="/news"){
        router.news(req,res)
    }else{
        res.end("404")
    }



    // switch(req.url){
    //     case "/":router.home(req,res); break;
    //     case "/about":router.about(req,res);break;
    //     case "/news":router.news(req,res);break;
    // }
}).listen(3000)