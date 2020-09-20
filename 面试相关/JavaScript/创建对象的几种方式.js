/**
 * 使用 Object 构造函数模式
 * 适用最开始不能确定内部有哪些属性
 * 语句太多 
 */

 let obj1 = new Object();
 obj1.name = 'Jack'
 obj1.run = function(){
     console.log('actually,i can fly');
 }
 obj1.run()

 /**
  * 使用对象字面量的写法
  * 适用起始时对象内部属性是确定的
  * 如果创建多个对象 有大量重复的代码
  */
 let obj2 = {
     name: 'Jack2',
     run: function(){
         console.log('actually,i can roll');
     }
 }
 obj2.run()

 /**
  * 工厂模式
  * 适合创建大量的对象
  * 但是对象没有一个具体的类型
  */
 function createObj(name){
    let obj3 = {
        name,
        run: function(){
            console.log('also i can drive');
        }
    }
    return obj3
 }
 let obj3 = createObj('Jack')
 obj3.run()

 /**
  * 自定义构造函数模式
  * 适用于需要创建多个类型确定的对象
  * 每个对象有相同的数据 浪费内存
  */
 function Obj(name){
     this.name = name;
     this.run = function(){
         console.log('also i can sing');
     }
 }
 let obj4 = new Obj('Jack')
 obj4.run()
//  console.log(obj4.constructor.prototype);

/**
 * 构造函数 + 原型的组合模式
 * 适用于需要创建多个类型确定的对象
 * 方法定义在原型 属性定义在内部
 */
function Obj5(name){
    this.name = name
}
Obj5.prototype.run = function(){
    console.log('i can dance');
}
let obj5 = new Obj5('Jack')
obj5.run()