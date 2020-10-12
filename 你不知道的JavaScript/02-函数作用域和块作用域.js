{
    function doSomething(a){
        b = a + doSomethingElse(a * 2);
        console.log(b * 3);
    }

    function doSomethingElse(a){
        return a - 1
    }

    var b;

    doSomething(2)
}

{
    function doSomething(a){
        b = a + doSomethingElse(a * 2);
        console.log(b * 3);

        function doSomethingElse(a){
            return a - 1;
        }

        var b;
    }
    doSomething(2)
}
{
    function foo(){
        function bar(a){
            var i = 3;
            // console.log(a + i);
        }
        for(var i=0; i<10; i++){
            bar(i*2)
        }
    }
    foo();
}
{
    var a = 2;
    function foo(){
        var a = 3;
        console.log(a);
    }
    foo();
    console.log(a);
}
{
    var a = 2;
    (function foo(){
        var a = 3;
        console.log(a);
    })();
    function foo(){
        console.log('---');
    }
    foo();
    console.log(a);
}
{
    // setTimeout(function timeHandle(){
    //     console.log('-=-=-=');
    // }, 1000);
}
console.log('----------------------');
{
    var a = 2;
    
    (function IIFE(global){
        var a = 3;
        console.log(a);
        console.log(global.a);
    })(this);

    console.log(a);
}

{
    undefined = true;
    var b = 30;
    (function IIFE(undefined){
        var a;
        console.log(b);
        if(a === undefined){
            console.log('undefined safe here');
        }
    })()
}
{
    var a = 2;
    (function IIFE(def){
        def(this)
    })(function def(global){
        var a = 3;
        console.log(a);
        console.log(global.a);
    })
}
console.log('--------------/------------');
{
    for(var i=0; i<5;i++){
        console.log(i);
    }
    console.log(i);
}

{
    var a = true
    if(a){
        var b = 200;
    }
    console.log(b);
}
{
    for(var o = 11; o<=20; o++){

    }
    console.log(o);
}
