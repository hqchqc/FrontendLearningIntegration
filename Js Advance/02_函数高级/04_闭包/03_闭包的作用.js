/**
 * 1. 使用函数内部的变量在函数执行完后，仍然存活在内存中(延长了局部变量的生命周期)
 * 2. 让函数外部可以操作(独写)到函数内部的数据(变量/函数)
 * 
 * 问题：
 *      1. 函数执行完后 函数内部声明的局部变量是否还存在？  一般是不存在 存在与闭包中的变量才可能存在
 *      2. 在函数外部能直接访问函数内部的局部变量吗？   不能 但我们可以通过闭包让外部操作他
 */

function fn1(){
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