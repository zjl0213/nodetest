var fs=require("fs")
var http=require("http")
http.createServer((req,res)=>{
    // fs.readFile("./txt",(err,data)=>{
    //     res.end(data)
    // })
    // var a=fs.readFileSync("./1.txt")
    // res.end(a)

    // fs.writeFile("./1.txt","dsfsdf","uft8",{"flag":"a"},(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.writeHead(200,{"":""})
    //     res.end("写入成功")
    // })


    //最佳内容{flag:a} append
    //创建目录                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         b'b'n'n'n'n'n'n'n'n'n'b'b'n'n'n'n'n'n  
    // fs.mkdir("./aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })

    //创建文件
    // fs.writeFile("./2.txt","sdjfskjhd",(err)=>{
    //     if(err                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ){
    //         throw err
    //     
    //     res.end("success")
    // })

    //删除文件
    // fs.unlink("./2.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
    //删除目录
    // fs.rmdir("./aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })


    //判断文件状态
    // fs.stat("./aa",(err,states)=>{
    //     console.log(states.isDirectory()) //判断是否是一个文件夹
    //     console.log(states.isFile())   //判断是否是一个文件
    //     res.end("dda")
    // })

    // 改名
    // fs.rename()

    // 追加内容
    // fs.appendFile("./01.txt","家寄最帅",function(err){
    //     if(err){
    //         throw err
    //     }
    //     res.end("jaiji")
    // })

    //复制文件  copyFile
        // fs.copyFile("./01.txt","./02.txt",function(err){
        //     if(err){
        //         throw err
        //     }
        //     res.end("dsjjklf")
        // })


    //打开文件
    fs.open("./01.txt","r",(err,data)=>{
         console.log(data)
    })

    //关闭文件

    
    //作业  判断当前目录里面的内容是文件还是目录
    //如果是目录则把目录输出




}).listen(3000)