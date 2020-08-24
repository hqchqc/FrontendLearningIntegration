/**
 * 方式四： 自定义构造函数模式
 *      - 套路： 自定义构造函数 通过 new 创建对象
 *      - 使用场景： 需要创建多个类型确定的对象
 *      - 问题： 每个对象都有相同的数据 浪费内存    
 */

 function Person(name,age){
     // 定义类型
     this.name = name;
     this.age = age;
     this.setName = function(name){
         this.name = name
     }
 }
 var p1 = new Person('tom',11)
 p1.setName('sss')
 console.log(p1);
 console.log(p1.constructor);

