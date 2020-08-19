/**
 * 1. 如何证明JS执行是单线程的？
 *      setTimeout()的回调函数是在主线程执行的
 *      定时器回调函数只有在运行栈中的代码全部执行完后才有可能执行
 * 2. 为什么js要用单线程模式 而不用多线程模式？
 *      JavaScript的单线程(只能有一个线程更新界面) 与它的用途有关
 *      作为浏览器脚本语言 JavaScript的主要用途是与用户互动 以及操作DOM
 *      这据欸的那个了它只能是单线程 否则会带来很复杂的同步问题
 * 
 * 3. 代码的分类
 *      初始化代码
 *      回调代码
 * 4. js引擎执行代码的基本流程
 *      先执行初始化代码： 包含一些特别的代码
 *          设置定时器
 *          绑定监听
 *          发送Ajax请求
 *      后面再某个时刻才会执行回调代码
 */

setTimeout(()=>{
    console.log('222');
},1000)

setTimeout(()=>{
    console.log('222');
},1000)

function fn(){
    console.log('fn');
}
fn()

console.log('alert之前');
alert('---')
console.log('alert之后');