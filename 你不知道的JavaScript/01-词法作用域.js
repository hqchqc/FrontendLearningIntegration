/** 2.1 词法阶段 */
{
    function foo(a) {
        var b = a * 2;
        function bar(c) {
            console.log(a, b, c);
        }
        bar(b * 3);
    }
    foo(2)
}

/** 2.2 欺骗词法 */
{
    function foo(str,a){
        eval(str);
        console.log(a,b);
    }
    var b= 2;
    foo('var b = 3',1)
}
{
    function foo(str){
        // "use strict";
        eval(str);
        console.log(a); // a is not defined
    }
    foo('var a = 2');
}
{
    var obj = {
        a:1,
        b:2,
        c:3
    };
    with(obj){
        a = 4,
        b = 5,
        c = 6;
    }
    console.log(obj);
}
{
    function foo(obj){
        with(obj){
            a = 2;
        }
    }
    var o1 = {
        a: 3
    }
    var o2 = {
        b: 4
    }
    foo(o1)
    console.log(o1);

    foo(o2);
    console.log(o2);
    // a 泄漏到全局作用域
    console.log(a);
}