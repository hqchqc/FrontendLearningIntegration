{
    function identify() {
        return this.name.toUpperCase();
    }

    function speak() {
        var greeting = 'Hello, I am ' + identify.call(this);
        console.log(greeting);
    }

    // 假如没有 this 就必须显示的传递一个参数
    // function identify(context){
    //     return context.name.toUpperCase();
    // }

    var me = {
        name: 'Kyle'
    }

    var you = {
        name: 'Reader'
    }

    identify.call(me) // KYLE
    identify.call(you) // READER

    speak.call(me) // Hello, I am KYLE
    speak.call(you) // Hello, I am READER
}

{
    function foo(num) {
        console.log('foo: ' + num);
        
        // 记录 foo 被调用的次数
        this.count++;
    }

    foo.count = 0;

    var i;

    for (i = 0; i < 10; i++) {
        if (i > 5) {
            foo(i)
        }
    }
    console.log(foo.count);
}

{
    function foo(){
        var a = 2;
        this.bar();
    }

    function bar(){
        console.log(this.a);
    }

    foo()
}