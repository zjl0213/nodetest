var qs=require("querystring")
console.log(qs)
// var obg=qs.parse("name=tom&&sex=1")
// var obg=qs.stringify({name: 'tom', sex: '1'})
// var obg=qs.escape("name=钱家寄")
var obg=qs.unescape("name%3D%E9%92%B1%E5%AE%B6%E5%AF%84")

console.log(obg)