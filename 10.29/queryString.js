var  queryString=require("querystring");

//var obj=queryString.parse("name=tom&sex=0&id=1"
//var obj=queryString.stringify({ name: 'tom', sex: '0', id: '1' })
var obj=queryString.escape("name=李薇薇")
//var obj=queryString.unescape("name=tom&sex=0&id=1")
console.log(obj)
