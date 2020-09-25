// 柯里化的定义: 在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
// 例子：
function add(a,b){
    console.log(a+b);
}
// 执行add 一次传入两个参数
add(1,2);
// 假设有一个curry函数能够帮助我们实现柯里化 那么就会这样
let addAfter = curry(add)
addAfter(1,2)

// 柯里化的用途：参数复用。本质上是降低通用性，提高适用性。
// 第一版 有那味儿 但是不能执行 fn()() 这样的代码
function curry(fn){
    let args = Array.prototype.slice.call(arguments,1);
    return function(){
        let newArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(this,newArgs)
    }
}

// 第二版
function curry(fn,args){
    let length = fn.length;
    args = args || [];
    
    return function(){
        let _args = args.slice(0);
        for(let i=0; i<arguments.length; i++){
            _args.push(arguments[i]);
        }
        if(_args.length < length){
            return curry.call(this,fn,_args);
        }else{
            return fn.apply(this,_args);
        }
    }
}

let fn = curry(function(a,b,c){
    console.log([a,b,c]);
})
fn('a')('b')('c');
fn('a','b')('c');