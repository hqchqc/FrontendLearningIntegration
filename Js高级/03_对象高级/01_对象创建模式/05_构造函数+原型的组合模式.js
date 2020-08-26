/**
 * 方法五： 构造函数+原型的组合模式
 *      - 套路： 自定义构造函数，属性再函数中初始化 方法添加到原型上
 *      - 使用场景： 需要创建多个类型确定的对象
 */

 function Person(name,age){
     this.name = name
     this.age = age
 }
 Person.prototype.setName = function(name){
     this.name = name
 }

 var p1 = new Person('xxx',12)
 var p2 = new Person('xxxx',122)
 console.log(p1,p2);