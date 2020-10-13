/**
 * 当函数可以记住并访问所在的词法作用域时就产生了闭包 即使函数是在当前词法作用域之外执行
 */
{
    function foo(){
        var a = 2;

        function bar(){
            console.log(a); // 只不过是词法作用域中的查询罢了RHS引用查询
        }

        bar();
    }
    foo();

    // 准确的闭包

    function foo(){
        var a = 2;
        function bar(){
            console.log(a);
        }
        return bar;
    }
    var handle = foo();
    handle()    // 真正的闭包
}