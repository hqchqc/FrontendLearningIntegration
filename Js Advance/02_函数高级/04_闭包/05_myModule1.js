function fn(){
    var msg = 'Hello world'
    function doSomething(){
        console.log(msg.toLowerCase());
    }
    function doOtherthing(){
        console.log(msg.toUpperCase());
    }
    return {
        doSomething,
        doOtherthing
    }
}