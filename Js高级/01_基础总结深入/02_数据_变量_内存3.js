/**
 * 关于变量赋值问题
 *  1. n 个引用变量指向同一个对象，通过一个变量修改对象内部数据，另一个变量看到的是修改之后的数据
 *  2. 2 个引用变量指向同一个对象, 让其中一个引用变量指向另一个对象，另一引用变量依然指向前一个对象
 * 
 */

 var obj1 = {name:"tom"}
 var obj2 = obj1
 function fn(obj){
     obj.age = 12
     obj.name = 'bob'
 }
 fn(obj2)
 // obj2的地址值拷贝一份给obj 此时 obj和obj2指向同一块内存地址
 // 执行函数 是在原有的基础上进行的修改 故会改变值
 console.log(obj1.age,obj1.name);

 var a = {age:12};
 var b = a;
 a = {age:13,name:'xxx'};
 b = {age:16}
 console.log(b.age,a.age,a.name); // 16 13 xxx
 
 function fn(obj){
     obj = {age:15}
 }
 fn(a)
 // 将 a 的地址值 拷贝一份给 obj 此时 obj和a指向同一块内存空间
 // 执行函数是 让obj重新指向了一个新的内存空间 所以a内存指向的空间是不会变的
 console.log(a.age); // 13 