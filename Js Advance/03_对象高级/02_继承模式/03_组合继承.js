/**
 * 方式三 原型链 + 借用构造函数的组合继承
 *  1. 利用原型链实现对父类型对象的方法继承
 *  2. 利用 super() 接用父类型构建函数初始化相同属性
 */

 function Person(name,age){
     this.name = name
     this.age = age
 }
 Person.prototype.setName = function(name){
     this.name = name
 }

 function Student(name,price,age){
     Person.call(this,name,age) // 为了得到属性
     this.price = price
 }
 Student.prototype.setAge = function(age){
     this.age = age
 }

 Student.prototype = new Person()       // 为了能看到父类型的方法
 Student.prototype.constructor = Student    // 修正

 var stu = new Student('xxx',18000,23)
 stu.setName('hqc')
 console.log(stu);