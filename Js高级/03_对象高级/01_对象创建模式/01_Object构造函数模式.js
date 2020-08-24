/**
 * 方式一 Object构造函数模式
 *      套路：先创建空Object对象 再动态添加属性/方法
 *      使用场景：起始时不确定对象内部数据
 *      问题： 语句太多
 */

 /**
  * 一个人 name:'tom' ,age:12
  */
 var p = new Object()
 p.name = 'Tom'
 p.age = 12
 p.setName = function(name){
     this.name = name
 }

 // 测试
 p.setName('JACK')
 console.log(p);