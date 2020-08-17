/**
 * 1. 如何产生闭包？
 *      - 当一个嵌套的内部(子)函数引用了嵌套的外部(父)函数的变量(函数)时，就产生了闭包
 * 2. 闭包到底是什么？
 *      - 使用 chrome 调试查看
 *      - 理解一 闭包是嵌套的内部函数(绝大部分人)
 *      - 理解二 包含被引用变量(函数)的对象(极少数人)
 *      - 注意 闭包存在于嵌套的内部函数
 * 3. 产生闭包的条件？
 *      - 函数嵌套
 *      - 内部函数引用了外部函数的数据(变量 / 函数)
 *      - 函数被调用
 */
function fn1(){
    var a = 2
    function fn2(){ // 执行函数定义就会产生闭包(不用调用内部函数)
        console.log(a);
    }
}
fn1()