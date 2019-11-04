//buffer    二进制数据   缓存区
/*
什么是buffer
从类型来说，就是一个类数组
从内存来说，就是开辟的新内存空间

作用：
处理二进制数据、
解决数据传输过大
案例：文件流  事件流   Tcp
别名：缓存区（等待区）  //公交车站

什么事二进制数据？  八进制  十六进制
返回 0和1

创建buffer  

new buffer()废弃
因为buffer是一个全局对象，所以不需要通过require加载    
buffer可以传输的类型
buffer 下面有哪些方法？
toJSON   toString     slice   content    length    
字节 bit  byte
buffer 的编码类型：  utf-8   base64   hex   Ascii   unicode   

把数据缓存，防止数据过大一下子加载进去
buffer和cache区别？   
buffer临时缓存区 （相当于临时居住地） 
cache  进缓存就别想出去（永久的家）



*/ 
//第一种定义buffer的方式
//buffer.from  把字符串转buffer

//var  buf=Buffer.from("node")
//console.log(buf.toString()) //node
//console.log(buf) //<Buffer 6e 6f 64 65>


//var buf=Buffer.from();


var buffer=Buffer.alloc(10)  //长度  10个00
//console.log(buffer)  //<Buffer 00 00 00 00 00 00 00 00 00 00>
//返回一个已初始化的数据，防止新生成的数据包含旧数据


var  buf=Buffer.allocUnsafe(6) //为被初始化的buffer
console.log(buf)//<Buffer a8 c9 18 23 a6 02>





