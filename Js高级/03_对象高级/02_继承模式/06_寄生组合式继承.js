/**
 * 寄生：在函数内返回对象然后调用

　 组合：1、函数的原型等于另一个实例。2、在函数中用apply或者call引入另一个构造函数，可传参　
 */

 function Person(name){
     this.name = name;
 }
 Person.prototype.sayName = function(){
     console.log('my name is' + this.name);
 }

 function Student(name,grade){
     Person.call(this,name)
     this.grade = grade
 }

 function content(obj){
     function Fn(){}
     Fn.prototype = obj
     return new Fn()
 }

//  Student.prototype = content(Person.prototype)
 Student.prototype = Object.create(Person.prototype)
 Student.prototype.constructor = Student;

 Student.prototype.sayMyGrade = function(){
     console.log(this.grade);
 }

 var stu = new Student('xxx',200)
 stu.sayMyGrade()
 stu.sayName()

 function Zoom(name){
     this.name = name
 }
 Zoom.prototype.fly = function(){
     console.log('i can fly');
 }

 function Rabbit(name,age){
    Zoom.call(this,name)
    this.age = age
 }

 Rabbit.prototype = Object.create(Zoom.prototype);
 Rabbit.prototype.constructor = Rabbit;

 Rabbit.prototype.run = function(){
    console.log('i am run fast');
 }

 var r1 = new Rabbit('white',20)
 r1.run()
 r1.fly()