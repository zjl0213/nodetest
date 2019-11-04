
//createReadStream        createWriteStream


//事件    data   end

var fs=require("fs")
var readStream=fs.createReadStream("./1/1.txt")
console.log(readStream)
//探究数据流流转过程

//流：分成快去处理

//buffer  代表里面的内容
var length=0;
readStream.on("data",(chunks)=>{
    length++
  //  console.log(chunks)  //chunks  每一条的内容

})


readStream.on("end",()=>{

    console.log(length)
})
//所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

//data - 当有数据可读时触发。

//end - 没有更多的数据可读时触发。

//error - 在接收和写入过程中发生错误时触发。

//finish - 所有数据已被写入到底层系统时触发。






