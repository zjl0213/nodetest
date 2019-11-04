0var  path=require("path")

console.log(path)

//console.log(path.resolve("C:\Windows\System32\cmd.exe","./a"))//C:\WindowsSystem32cmd.exe\a

//console.log(path.normalize("C:\Windows\System32\cmd.exe","./a"))  //C:WindowsSystem32cmd.exe
//console.log(path.isAbsolute("C:\Windows\System32\cmd.exe","./a"))   //false 

//console.log(path.join("/aa","/bb","/cc","//bb"))  //  \aa\bb\cc\bb

//console.log(path.relative("C:\Windows\System32\cmd.exe","./a"))   //D:\日常项目\10.28\node\a

//console.log(path.dirname("C:\Windows\System32\cmd.exe"))   //   C:\n

//console.log(path.basename("C:\Windows\System32\cmd.exe"))   //WindowsSystem32cmd.exe
 
 
 console.log(path.extname("D:\日常项目\10.28\node"))
 console.log("1")
 
 //parse    format   path里面也有


/*

reslove   
如果是绝的路径。会用新路径覆盖之前的路径

如果是相对路径   则拼接成一个新路径


normalize    路径

isAbsolute   //是否是绝对路径    是true    不是   false

join   按照特定的标点分隔符 惊醒滤镜的评拼接，从而形成正确的路径



relative    和isAbsolute   相反//


dirname ： 返回目录名称              只会找打他自身的目录（当且本身的目录）


basename：  返回当前目录


extname     获取后缀名称

*/


 
//字符串转对象  反序列化
//对象转字符串  序列化