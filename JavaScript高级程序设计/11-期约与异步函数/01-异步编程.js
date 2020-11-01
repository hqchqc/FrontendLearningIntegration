/** 以往的异步编程模式 */

// function double(value){
//     setTimeout(() => {
//         console.log(value * 2);
//     }, 1000);
// }
// double(3)

/** 解决如果异步函数中有返回值如何处理？ 加回调函数 */
// function double(value,callback){
//     setTimeout(()=>{
//         callback(value * 2);
//     },1000)
// }
// double(3, x => {
//     console.log(`I was given: ${x}`);
// })

/** 失败处理 成功处理需要考虑 */
// 缺点 必须在异步操作之前就要写好回调函数 并且返回值只在短时间内有效
// function double(value,success,failure){
//     setTimeout(() => {
//         try{
//             if(typeof value !== 'number'){
//                 throw 'Must provide number as first argument'
//             }
//             success(2 * value);
//         }catch(e){
//             failure(e)
//         }
//     }, 1000);
// }
// const successCallback = x => {
//     console.log(`Success: ${x}`);
// }
// const failureCallback = e => {
//     console.log(`Failure: ${e}`);
// }
// double(3,successCallback,failureCallback);
// double('b',successCallback,failureCallback);

/** 嵌套异步回调 一个异步操作需要上一个异步操作的返回值*/
function double(value, success, failure) {
    setTimeout(() => {
        try {
            if (typeof value !== 'number') {
                throw 'Must provide number as first arguments'
            }
            success(2 * value)
        } catch (e) {
            failure(e)
        }
    }, 1000);
}
const successCallback = x => {
    double(x, y => {
        console.log(`Success ${y}`);
    })
}
const failureCallback = e => {
    console.log(`Failure ${e}`);
}

double(3,successCallback,failureCallback);