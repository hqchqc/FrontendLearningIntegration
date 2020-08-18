/**
 * 方法二：对象字面量模式
 *      - 套路： 使用 {} 创建对象 同时指定属性 / 方法
 *      - 适用场景： 起始时对象内部数据是确定的
 *      - 问题： 如果创建多个对象 有重复代码
 */

 var p = {
     name: 'Tom',
     age: 12,
     setName: function(name){
         this.name = name
     }
 }

 // 测试
console.log(p.name);
p.setName('xxx')
console.log(p.name);