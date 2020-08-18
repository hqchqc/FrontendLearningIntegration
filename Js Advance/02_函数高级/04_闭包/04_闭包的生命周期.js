/**
 * 1. 产生：在嵌套内部函数定义执行完时就产生了(不是在调用)
 * 2. 死亡：在嵌套的内部函数称为垃圾对象时 
 */
function fn1(){
    // 此时闭包就已经产生了(函数提升 内部函数对象已经创建了)
    var a = 2
    function fn2(){
        a++
        console.log(a);
    }
    return fn2
}
var f = fn1()
f()    // 3
f()    // 4

f = null // 闭包死亡(包含闭包的函数对象称为了垃圾对象)