/**
 * 测试题一 : 先执行变量提升 再执行函数提升
 */
function a(){}
var a;
console.log(typeof a); // function

/**
 * 测试题二: 
 */
if(!(b in this)){
    var b = 1;
}
console.log(b); //undefined

/**
 * 测试题三：
 */
var c = 1;
function c(c){
    console.log(c);
}
c(2)    // 报错