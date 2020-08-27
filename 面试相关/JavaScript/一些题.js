{
    let a = {},
    b = '0',
    c = 0
    a[b] = 'xxx';
    a[c] = 'yyy';
    console.log(a[b]); // yyy
    // ==> 对象和数组的区别
}
{
    let a = {},
        b = Symbol('1'),
        c = Symbol('1');
    a[b] = 'xxx';
    a[c] = 'yyy';
    console.log(a[b]);  // xxx
    // ==> 实现以下Symbol
}
{
    let a={}, b={n:'1'}, c={m:'2'};  
    a[b]='xxx';
    a[c]='yyy';  
    console.log(a[b]);  // yyy
    // ==> Object.prototype 和 valueOf 区别
}
{
    var test = (function(i){
        return function(){
            alert(i *= 2)   // alert弹出的值都会转换为String
        }
    })(2);
    test(5) // '4'
}
{
    var a=0,
    b=0;
    function A(a){
        A=function(b){
            alert(a+b++);
        };
        alert(a++);
    }
    A(1);   // 1
    A(2);   // 4
}

// AMD 和 CMD 的区别
define([
    './a',
    './b'
], function(require, factory) {
    'use strict';
    require.dosomething()
});

define (function(require,exports,module){
    var a = require('./a')
    a.dosomething()
    var b = require('./b')
    b.dosomething()
})