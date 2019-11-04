var http = require("http")
var form = require("formidable")
var path = require("path")
var fs = require("fs")
var sd = require("silly-datetime")

http.createServer((req, res) => {
    // if (req.url == "/dopost" && req.method == "POST") {
    if (req.url == "/dopost") {
        var fm = form.IncomingForm()
        // console.log(fm)
       
        // //                        文本域 文件与
        fm.parse(req, function (err, field, files) {//会转换请求中所包含的表单数据
              
                var low = files.pic.path
                fm.uploadDir="./uploads"//设置上传文件存放的文件夹
                 console.log(files)
                // console.log(low)
                var   time = sd.format(new Date(), "YYYYMMDDHHmmss")
                var extname = path.extname(files.pic.name)
                console.log(files.pic.name)
                var fashion = "./uploads/" + time + extname
                fs.rename(low, fashion, (err) => {
                    if (err) throw err
                })
                res.end("success")
            })
    }

}).listen(3000, function () {
    console.log("连接成功")
})
 //     // console.log(field)
                //     // console.log(files)
                //     // console.log(fm)
                //     var pt = path.resolve(__dirname, "./uploads/")
                //     fm.uploadir = "./uploads/"

                //     var extname = path.extname(files.pic.name)
                //     var picurl = files.pic.name + extname
                //     var base = path.basename(picurl)
                //     pt + "/" + base
                //     fs.writeFile(pt, bace, function (err) {
                //         if (err) {
                //             throw err
                //         }
                //         res.end("success")
                //     })
                //     // console.log(__dirname)
                // })