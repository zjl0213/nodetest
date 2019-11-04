var http=require("http")
var  ejs=require("ejs")

var fs=require("fs")

http.createServer((req,res)=>{
  //  console.log(req)
     //   var  list=["vue","react","node"]
      //  ejs.render()//里面两个参数   第一个模板  第二个数据    
      // <%%>  流程控制标签
        //  <%=%> 输出  
          //   <%#%>  注释  
           //   <%_ %>  去除前面的空格
            //    <% _%>去除后面的括号  
            //  <%-%>语句解析   转译结构到模板    //如果是标签可以识别它
            //<include />   包含

      //compil 编译   模板  str   数据
      //  template   模板
      //标签    


        //<%-%>  语句解析

        fs.readFile("./view/index.ejs",(err,data)=>{
            var  template=data.toString();
            console.log(template)

            var  list=["vue","react","node"]
            var result=ejs.render(template,{list:list})

            //response 响应前端请求
            res.end(result)


        })


}).listen(3000)