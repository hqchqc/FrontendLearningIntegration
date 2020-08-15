/**
 * 以下两种情况下不加分号有问题
 *  - 小括号开头的前一条语句
 *  - 中方括号开头的前一条语句
 */

 var a = 3
 ;(function (){

 })()

 var b = 4
 ;[1,3].forEach(item => {
     console.log(item);
 });