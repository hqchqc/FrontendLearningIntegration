/**
 *  1. 什么是对象？
 *     - 多个数据的封装体
 *     - 用来保存多个数据的容器
 *     - 一个对象代表现实中的一个事务
 *  2. 为什么要用对象？
 *     - 统一管理多个数据
 *  3. 对象的组成？
 *     - 属性： 属性名(字符串)和属性值(任意)组成
 *     - 方法： 一种特别的属性(属性值是函数)
 *  4. 如何访问对象内部数据？
 *     - .属性名: 编码简单，有时不能用
 *     - ['属性名']： 编码麻烦，能通用
 */

 var p = {
    name: 'Tom',
    age: 12,
    setName: function (name){
        this.name = name
    },
    setAge: function(age){
        this.age = age
    }
 }
 p.setName('xxx')
 p['setAge'](14)
 console.log(p.name,p['age']);