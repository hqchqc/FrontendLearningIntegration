/**
 * 1. 依次输出什么   // undefined 1 2 3 3 2 1 1
 * 2. 整个过程中产生了几个执行上下文       5个
 */

 console.log('object' + i);
 var i = 1;
 foo(1);
 function foo(i){
     if(i == 4){
         return
     }
     console.log('object' + i);
     foo(i+1);  // 递归调用 在函数内部调用自己
     console.log('object'+i);
 }
 console.log('object' + i);

 // undefined 1 2 3 3 2 1 1