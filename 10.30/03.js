//监控日志
var fs=require("fs");
var  readline=require("readline");
var readStream=fs.createReadStream("./1/1.txt")

//fs.createReadStream("./1/1.txt")

//console.log(readline)
//data 监听输入数据   end    line监听日志事件
var rl=readline.createInterface({    

    //readline监听日志

        //监听输入数据
        input:readStream
})

//line：日志执行事件
rl.on("line",(linenum)=>{
    console.log(linenum)
    console.log("linenum执行")
})



//日志读取完成关闭
rl.on("close",()=>{
    console.log("监听事件完毕")
})


