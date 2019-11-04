var a=1;
// export.a=a
function add(){
    console.log(1)
}
module.exports.a=a
exports.add=add()
function Person(name,age){
    this.name=name
    this.age=age

}
var person=new Person()
module.exports={
    person:person
}
exports.person=person