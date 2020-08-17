/**
 * 1. 在全局代码执行前 JS引擎就会创建一个栈来存储管理所有的执行上下文对象
 * 2. 在全局执行上下文(window)确定后，将其添加到栈中(压栈)
 * 3. 在函数执行上下文创建后，将其添加到栈中(压栈)
 * 4. 在当前函数执行完后 将栈顶的对象移除(出栈)
 * 5. 当所有的代码执行完后 栈中只剩下window
 */
var a = 10;
var bar = function(x){
    var b = 5;
    foo(x+b)
}
var foo = function(y){
    var c = 5;
    console.log(a + c + y);
}
bar(10)