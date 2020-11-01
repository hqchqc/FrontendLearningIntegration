// 空函数就是一个执行器函数 不指定会抛出异常
// let p = new Promise(()=>{});
// setTimeout(()=>{
//     console.log(p); // Promise { <pending> }
// })

/** 通过执行函数控制期约状态  执行器函数有两项职责
 *  1. 初始化期约的异步行为
 *  2. 控制状态的最终转换   通过调用它的两个函数参数实现
*/
// let p1 = new Promise((resolve,reject) => {
//     resolve();
// })
// setTimeout(() => {
//     console.log(p1);
// }, 0);

// let p2 = new Promise((resolve,reject) => {
//     reject();
// })
// setTimeout(() => {
//     console.log(p2);
// }, 0);

// 执行顺序
// executor
// promise initialized
// new Promise(() => {
//     setTimeout(() => {
//         console.log('executor');
//     }, 0);
// })
// setTimeout(() => {
//     console.log('promise initialized');
// }, 0);

// let p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 1000);
// })
// setTimeout(() => {
//     // 在打印期约实例的时候 还不会执行超时回调( 即 resolve() )
//     console.log(p);     // Promise { <pending> }
// }, 0);

// let p = new Promise((resolve,reject) => {
//     resolve();
//     reject();
// })
// setTimeout(() => {
//     console.log(p);
// });

// let p = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject();
//     }, 10000);
// })
// setTimeout(() => {
//     console.log(p);
// }, 0);
// setTimeout(()=>{
//     console.log(p);
// },11000)

// let p1 = new Promise((resolve,reject) => {
//     resolve()
// })
// let p2 = Promise.resolve();
// console.log(p1,p2);

// setTimeout(() => {
//     // 多余的参数会忽略
//     console.log(Promise.resolve(4,5,6,7));
// }, 0);

/** 对这个静态方法而言，如果传入的参数本身是一个期约。那它的行为类似一个空包装 */
// let p = Promise.resolve(7);

// setTimeout(()=>{
//     console.log(p === Promise.resolve(p));  // true
// })

// setTimeout(() => {
//     console.log(p === Promise.resolve(Promise.resolve(p))); // true
// });

// let p = Promise.resolve(new Error('foo'));
// setTimeout(() => {
//     console.log(p); // Promise <resolved>: Error: foo
// });

// let p = Promise.reject();
// setTimeout(() => {
//     console.log(1);
//     console.log(p === Promise.reject(p));
// });

// setTimeout(() => {
//     Promise.reject(Promise.resolve())
// }, 0);

try{
    throw new Error('foo');
}catch(e){
    console.log(e); // Error: foo
}
try{
    Promise.reject(new Error('bar'));   
}catch(e){
    console.log(e);
}
// Uncaught (in promise) Error: bar