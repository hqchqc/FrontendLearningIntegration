/**
 * 1. 将函数作为另一个函数的返回值
 * 2. 将函数作为实参传递给另一个函数调用
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