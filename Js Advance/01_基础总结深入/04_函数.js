/**
 * 1. 什么是函数？
 *      - 实现特定功能的 n 条语句的封装体
 *      - 只有函数是可以执行的，其它类型的数据不执行
 * 2. 为什么要用函数？
 *      - 提高代码复用性
 *      - 便于阅读交流
 * 3. 如何定义函数？
 *      - 函数声明
 *      - 表达式
 * 4. 如何调用(执行)函数？
 *      - test()：直接调用
 *      - obj.test(): 通过对象调用
 *      - new test(): new调用
 *      - test.call/apply(obj): 临时让test成为obj的方法进行调用
 */

 function showInfo(age){
    if(age < 18){
        console.log('未成年');
    }else if(age > 60){
        console.log('算了吧');
    }else{
        console.log('刚好');
    }
 }
 showInfo(17)
 showInfo(80)
 showInfo(20)

 function fn1(){    // 函数声明
     console.log('fn');
 }

 var fn2 = function(){  // 表达式(变量提升)
    console.log('fn2');
 }

 var obj = {}
 function test2(){
     this.xxx = 'hqc'
     console.log(this.xxx);
 }
//  obj.test2() 不能直接，根本没有
test2.call(obj) // obj.test2()   可以让一个函数成为指定任意对象的方法进行调用


