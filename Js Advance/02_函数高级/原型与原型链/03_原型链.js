/**
 * 1. 原型链(图解)
 *      访问一个对象的属性时：
 *          先在自身属性中查找，找到返回
 *          如果没有，再沿着__proto__这条链向上查找，找到返回
 *          如果最终没找到，返回 undefined
 *    别名： 隐式原型链
 *    作用：查找对象的属性(方法)
 * 2. 构造函数 / 原型 / 实体对象的关系(图解)
 * 3. 构造函数 / 原型 / 实体对象的关系2(图解)
 */

 function Fn(){
     this.test1 = function(){
         console.log('test1()');
     }
 }
 Fn.prototype.test2 = function(){
     console.log('test2()');
 }

 var fn = new Fn()
 fn.test1()
 fn.test2()
 console.log(fn.toString());
//  fn.test3()

/**
 * 1. 函数的显示原型指向的对象：默认是空的Object对象(但Object不满足)
 */

 console.log(Fn.prototype instanceof Object); // true
 console.log(Object.prototype instanceof Object); // false
 console.log(Function.prototype instanceof Object); //true

 /**
  * 2. 所有的函数都是 Function 的实例(包括 Function 本身)
  */

  console.log(Function.__proto__  === Function.prototype); // true

  /**
   * 3. Object 的原型对象是原型链的尽头
   */
  console.log(Object.prototype.__proto__);