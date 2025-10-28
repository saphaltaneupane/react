// function hello(name){
//   this.name=name;

// }
// hello.prototype.displayName=function(){
//     console.log("hello"+this.name);
// }
// const obj=new hello("saphalta");
// obj.displayName();

Array.prototype.first=function(){
    return this[0];
}
const arr=[1,2,3,4,5];
console.log(arr.first());