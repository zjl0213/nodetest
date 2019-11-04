var http = require("http")
var fs =  require("fs")
var form = require("formidable")
var sd = require("silly-datetime")
var pt = require("path")
http.createServer((req,res)=>{
console.log(1)

if(req.url == "/dopost"){
var fm = form.IncomingForm()
fm.uploadDir = "./uploads"   //当前文件的路径重写为  ./uploads
console.log(fm) 
fm.parse(req,function(err,fields,files){
    console.log(files)
  var low = files.pic.path
  console.log(low)  //当前图片的路径
  var extname = pt.extname(files.pic.name)
 // console.log(extname)   //图片后缀名
  var time = sd.format(new Date(),"YYYYMMDDHHmmss")
  var fan ="./uploads/"+time+extname
 // console.log(fan)  //拼接好的图片路径名
  fs.rename(low,fan,(err)=>{
      if(err) throw err
  })
  res.end("success")
})
}
}).listen(3000)
