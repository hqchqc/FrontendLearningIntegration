// function foo(){
//     // "use strict";
//     console.log(this.a);
// }
// var a = 2;

// foo();

// function foo(){
//     console.log(this.a);
// }

// function fooo(fn){
//     fn();
// }

// var obj = {
//     a: 'yes',
//     foo: foo
// }

// var a = 'global a'
// // var bar = obj.foo;

// fooo(obj.foo)

// function foo(){
//     console.log(this.a);
// }

// var obj = {
//     a: 'yes'
// }

// var bar = function(){
//     foo.call(obj)
// }

// bar();
// setTimeout(bar, 100);

// // 硬绑定的 bar 不可能再修改它的 this
// bar.call(this)

// function foo(something){
//     console.log(this.a , something);
//     return this.a + something;
// }

// var obj = {
//     a: 2
// }

// function wrap(){
//     return foo.apply(obj,arguments);
// }

// var b = wrap(5)  // 2 5
// console.log(b); // 7

// function foo(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }

// // 简单的辅助绑定函数
// function bind(fn, obj) {
//     return function () {
//         return fn.apply(obj, arguments);
//     }
// }

// var obj = {
//     a: 2
// }

// var bar = bind(foo,obj);

// var b = bar(3);
// console.log(b);

function foo(something){
    this.a = something;
}

var obj1 = {
    foo:foo
}

var obj2 = {};

// var bar = new foo.call(obj1)
console.log(new obj1.foo(4));



// function foo(){
//     console.log(this.a);
// }

// var obj1 = {
//     a: 2,
//     foo
// }

// var obj2 = {
//     a: 3,
//     foo
// }

// obj1.foo.call(obj2);
// console.log(obj1.foo.toString());