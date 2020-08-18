/**
 * 1. 内存溢出
 *      - 一种程序运行时出现的错误
 *      - 当程序运行需要的内存超过了剩余内存时 就会抛出内存溢出的错误
 * 2. 内存泄漏
 *      - 占用的内存没有及时释放
 *      - 内存泄漏积累多了就容易导致内存溢出
 *      - 常见的内存泄漏
 *          - 意外的全局变量
 *          - 没有及时清理的计时器或回调函数
 *          - 闭包
 */


// 内存溢出
var obj = {}
for(var i=0; i<100000; i++){
    obj[i] = new Array(100000)
    console.log('-----');
}

// 内存泄漏
    // 意外的全局变量
function fn(){
    a = new Array(1000)
    console.log(a);
}
fn()

var intervalId = setInterval(() => { // 启动循环定时器不清理
    console.log('------');
}, 1000);

// clearInterval(intervalId)
