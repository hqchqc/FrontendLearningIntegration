/**
 * 在js调用函数时传递变量参数时，是值传递还是引用传递
 *  - 理解一：都是值(基本/地址值)传递
 *  - 理解二：可能是值传递，也可能是引用传递(地址值)
 * 
 */

 var a = 3
 function fn(a){
    a = a + 1
 }
 fn(a)
 console.log(a);

 function fn2(obj){
     obj.age = 15
     console.log(obj.name);
 }
 var obj = {name:'tom'}
 fn2(obj);
 console.log(obj);