/**
 * 第五章 原型
 * 
 * 5.1 [[ Prototype ]]
 *      - JavaScript中的对象有一个特殊的 Prototype 内置属性，其实就是对于其它对象的引用
 *      - 有什么用呢？ 之前讲过 当你试图引用对象的属性时会触发 get 操作 get 操作第一步就是检查对象本身是否有这个属性
 *      - for...in 遍历方式可以遍历原型链上enumerable:true的内容
 *      - in 操作符可以获取到原型链上的内容 无论是否为可枚举
 *    [[Object.prototype]]
 *      - 哪里是尽头呢 ？  所有普通的[[Prototype]]链最终都会指向内置的Object.prototype
 *    属性设置和屏蔽
 *      
 * 
 */

//  var anotherObject = {
//      a: 2
//  }
//  var myObject = Object.create(anotherObject);
//  console.log(myObject.a);
//  for(let key in myObject){
//      console.log(key);
//  }

// var anotherObject = {
//     a: 2
// };
// // 创建一个关联到 anotherObject 的对象
// var myObject = Object.create(anotherObject);

// for(let key in myObject){
//     console.log("found " + key);
// }

// console.log("a" in anotherObject);
// console.log(myObject);
// myObject.a = 3;
// console.log(myObject);

// var anotherObject = {
//     a: 3
// }
// var myObject = Object.create(anotherObject);
// console.log(anotherObject.a , myObject.a);  // 3 3
// console.log(myObject.hasOwnProperty("a"),anotherObject.hasOwnProperty("a"));    // false true

// // 隐式屏蔽
// myObject.a++
// console.log(anotherObject.a , myObject.a);  // 3 4

// function Parent(name){
//     this.name = name
// }
// Parent.prototype.getName = function(){
//     console.log(this.name);
// }
// function Child(name,age){
//     Parent.call(this,name);
//     this.age = age;
// }

// // Child.prototype = new Parent();
// Child.prototype = Object.create(Parent.prototype);
// // Child.prototype.constructor = Child
// // Object.setPrototypeOf(Child.prototype,Parent.prototype);

// Child.prototype.getAge = function(){
//     console.log(this.age);
// }

// let child = new Child('hello',20);
// child.getAge();
// child.getName();
// console.log(child);

var anotherObject = {
    cool: function(){
        console.log('cool!');
    }
}

var myObject = Object.create(anotherObject);

myObject.doCool = function(){
    this.cool();
    console.log(this);
}

myObject.doCool()