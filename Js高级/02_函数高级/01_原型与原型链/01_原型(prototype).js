/**
 * 1. 函数的 prototype 属性
 *      每个函数都有一个prototype属性，它默认指向一个Object空对象(即称为原型对象)
 *      原型对象中有一个属性constructor，它指向函数对象
 * 2. 给原型对象添加属性(一般都是方法)
 *      作用： 函数的所有实例对象自动拥有原型中的属性(方法)
 */

console.log(Date.prototype);
function func(){

}

func.prototype.test = function(){
    console.log('test');
}

console.log(func.prototype);    //默认指向一个Object空对象 (没有我们自己加的属性)

// 原型对象中有一个属性constructor，它指向函数对象
console.log(Date.prototype.constructor === Date);
console.log(func.prototype.constructor === func); 

var a = new func()
a.name = 'hqc'
console.log(a,func.name,a.name,a.test(),a.__proto__);