/**
 * 方式三： 工厂模式
 *      - 套路： 通过工厂函数动态创建对象并返回
 *      - 使用场景： 需要创建多个对象
 *      - 问题: 对象没有一个具体的类型 都是Object类型
 */

 function createPerson(name,age){ // 返回一个对象的函数 ==> 工厂函数
     var obj = {
         name: name,
         age: age,
         setName: function(name){
             this.name = name
         }
     }

     return obj
 }

 var p1 = createPerson('Tom',12)
 var p2 = createPerson('Bob',13)

 function createStu(name,price){
     var obj = {
         name: name,
         price: price
     }
     return obj
 }
 var s = createStu('xxx',12000)
 
 // s 的类型和 p 的类型相同