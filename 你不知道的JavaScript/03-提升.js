// {
//     a = 2;
//     var a;
//     console.log(a);
// }
{
    console.log(a); // undefined
    var a = 2;  
}
{
    foo();
    function foo(){
        console.log(b); // undefined
        var b = 1;
    }
}
// {
//     bar();
//     var bar = function  avs(){
//         console.log(1);
//     }
// }
// {
//     test1();    // TypeError
//     test2();    //  referenceError

//     var test1 = function test2(){
//         console.log('i');
//     }
// }
{
    one();  // TypeError
    var a = true
    if(a){
        function one(){
            console.log('one');
        }
    }else{
        function one(){
            console.log('two');
        }
    }
}