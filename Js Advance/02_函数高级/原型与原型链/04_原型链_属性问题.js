/**
 * 1. 读取对象的属性值时： 会自动到原型链中查找
 * 2. 设置对象的属性值时： 不会查找原型链，如果当前对象中没有此属性，直接添加次属性并设置其值
 * 3. 方法一般定义在原型中，属性一般通过构造函数定义在对象本身
 */

 function Fn(){

 }
 Fn.prototype.a = 'xxx'
 
 var fn1 = new Fn()
 console.log(fn1.a);

 var fn2 = new Fn()
 fn2.a = 'yyy'
 console.log(fn1.a,fn2.a);

 function Person(name,age){
     this.name = name;
     this.age = age;
 }
 Person.prototype.setName = function(name){
     this.name = name
 }
 var p1 = new Person('Tom',12)
 p1.setName('Bob')
 console.log(p1.name,p1.age);
 
 var p2 = new Person('Tom2',12)
 p2.setName('Bob2')
 console.log(p2.name,p2.age);

 console.log(p1.__proto__ === p2.__proto__);    // true