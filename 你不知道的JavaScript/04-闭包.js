/**
 * 当函数可以记住并访问所在的词法作用域时就产生了闭包 即使函数是在当前词法作用域之外执行
 */
{
    function foo(){
        var a = 2;

        function bar(){
            console.log(a); // 只不过是词法作用域中的查询罢了 / RHS引用查询
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
{
    // function wait(message){
    //     setTimeout(function timer(){
    //         console.log(message);        
    //     },1000)
    // }
    // wait('hello hqc')
}
{
    // for(var i=0; i<=5;i++){
    //     setTimeout(() => {
    //         console.log(i);
    //     }, i*1000);
    // }
}
{
    // for(var i=0; i<=3;i++){
    //     (function(){
    //         console.log(i);
    //         var j = i;
    //         setTimeout(() => {
    //             console.log(j);
    //         }, j*1000);
    //     })();
    // }
}
{
    // for(var i=0; i<4;i++){
    //     (function(j){
    //         setTimeout(function timer(){
    //             console.log(j);
    //         },j*1000)
    //     })(i)
    // }
}
{
    for(var i=0; i<=4;i++){
        let j = i;
        setTimeout(() => {
            console.log(j);
        }, j * 1000);
    }
}
{
    function foo(){
        var something = 'cool';
        var another = [1,2,3];

        function doSomething(){
            console.log(something);
        }
        function doAnother(){
            console.log(another.join('!'));
        }

        return{
            doSomething,
            doAnother
        }
    }

    var test1 = foo();
    test1.doSomething();
    test1.doAnother();
}

{
    var fun = (function fun(){
        var something = 'cool';
        var another = [1,2,3];

        function doSomething(){
            console.log(something);
        }
        function doAnother(){
            console.log(another.join('!'));
        }

        return{
            doSomething,
            doAnother
        }
    })();
    fun.doAnother()
}
