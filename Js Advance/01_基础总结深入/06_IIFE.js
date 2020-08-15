/**
 * 1. 理解
 *      全称： Immediately-Invoked Function Expression
 * 2. 作用
 *      - 隐藏实现
 *      - 不会污染外部(全局)命名空间
 *      - 用它来编码js模块
 */
(function(){    // 匿名函数自调用
    // console.log('....');
    var a = 3
    console.log(a + 3);
})()

var a = 4
console.log(a);

(function(){
    var a = 1
    function test(){
        console.log(++a);
    }
    function test2(){
        console.log('test2()');
    }
    this.$ = function(){    // 向外暴露一个全局函数
        return{
            test: test
        }
    }
})()

$().test() 