/**
 * 1. instanceof是如何判断的？
 *      表达式： A instanceof B
 *      如果B函数的显示原型对象在A对象的原型链上，返回true，否则返回false
 * 2. Function是通过new自己产生的实例
 */

 /**
  * 案例一
  */
 function Foo(){}
 var f1 = new Foo();
 console.log(f1 instanceof Foo);    // true
 console.log(f1 instanceof Object);  //true

 /**
  * 案例二
  */
 console.log(Object instanceof Function);   // true
 console.log(Object instanceof Object);     // true(易错)
 console.log(Function instanceof Function); // true
 console.log(Function instanceof Object);   // true

 function Foo(){

 }
 console.log(Object instanceof Foo);    // false(易错)