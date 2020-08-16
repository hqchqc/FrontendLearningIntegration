var A = function(){}

A.prototype.n = 1

var b = new A()

A.prototype = {
    n: 2,
    m: 3
}

var c = new A()

console.log(b.n , b.m , c.n , c.m); // 1 undefined 2 3

console.log('-----------------------------');

var F = function(){

}
Object.prototype.a = function(){
    console.log('a');
}
Function.prototype.b = function(){
    console.log('b');
}
var f = new F();

f.a()   // a
f.b()   // 报错
F.a()   // a
F.b()   // b 