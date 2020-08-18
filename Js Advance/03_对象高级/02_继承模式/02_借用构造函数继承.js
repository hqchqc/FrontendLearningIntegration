/**
 * 方式二： 借用构造函数继承(假的)
 *  1. 套路
 *      1. 定义父类型构造函数
 *      2. 定义子类型构造函数
 *      3. 在子类型构造函数中调用父类型构造
 * 2. 关键
 *      1. 在子类型构造函数中通过call()调用父类型构造函数
 * 3. 缺点
 *      所有的子类都会对父类中所有的属性和方法拷贝一份 占用内存大
 */

 function Person(name,age){
     this.name = name
     this.age = age
 }

 function Student(name,age,price){
     Person.call(this,name,age) // 相当于 this.Person(name,age)
     this.price = price
 }

 var s = new Student('Tom',20,14000)
 console.log(s.name,s.age,s.price);