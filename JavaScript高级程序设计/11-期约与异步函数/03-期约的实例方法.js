// function onResolved(id){
//     setTimeout(() => {
//         console.log(id,'resolved');
//     }, 0);
// }
// function onRejected(id){
//     setTimeout(() => {
//         console.log(id,'rejected');
//     }, 0);
// }
// let p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve()
//     }, 3000);
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject()
//     }, 3000);
// })
// p1.then( () => {
//     onResolved('p1')
// }, () => {
//     onRejected('p1')
// })
// p2.then( () => {
//     onResolved('p2')
// }, () => {
//     onRejected('p2')
// })

// function onResolved(id){
//     setTimeout(() => {
//         console.log(id,'resolved');
//     }, 0);
// }
// function onRejected(id){
//     setTimeout(() => {
//         console.log(id,'rejected');
//     }, 0);
// }
// let p1 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 3000);
// })
// let p2 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject();
//     }, 3000);
// })

// // 非函数处理程序会被静默忽略，不推荐
// p1.then('hello')

// // 不穿onResolved处理程序的规范写法
// p2.then(null,()=>{
//     onRejected('p2')
// })

// // p2 rejected (3秒后)

// let p1 = new Promise(()=>{});
// let p2 = p1.then();
// setTimeout(() => {
//     console.log(p1);    // Promise { <pending> }
// }, 0);
// setTimeout(() => {
//     console.log(p2);    // Promise { <pending> }
// }, 0);
// setTimeout(() => {
//     console.log(p1 === p2); // false
// }, 0);

/** 新期约实例基于onResolved处理程序的返回值构建 */
// let p1 = Promise.resolve('foo');

// // 若调用 then() 时不传处理程序，则原样向后传
// let p2 = p1.then();
// setTimeout(() => {
//     console.log(p2); // Promise { 'foo' }
// }, 0);

// // 这些都一样
// let p3 = p1.then(() => undefined);
// let p4 = p1.then(() => {});
// let p5 = p1.then(() => Promise.resolve());

// setTimeout(console.log,0,p3);
// setTimeout(console.log,0,p4);
// setTimeout(console.log,0,p5);

/** Promise.prototype.catch 
 *      - 用于给期约添加拒绝处理程序，
 *      - 是一个语法糖，相当于调用 Promise.prototype.then(null,onRejected)
 *      - 返回一个新的期约实例
 *      - 在返回新期约实例方面，Promise.prototype.catch()的行为与 Promise.prototype.then()
          的 onRejected 处理程序是一样的。
 */
// let p = Promise.reject();
// let onRejected = function(e){
//     setTimeout(console.log,0,'rejected')
// }
// // 这两种添加拒绝处理程序的方式时一样的
// p.then(null,onRejected);    // rejected
// p.catch(onRejected);    // rejected

// let p1 = new Promise(() => {});
// let p2 = p1.catch();
// setTimeout(console.log, 0, p1)  // Promise { <pending> }
// setTimeout(console.log, 0, p2)  // Promise { <pending> }
// setTimeout(console.log, 0, p1 === p2)   // false

/** Promise.prototype.finally();
 *      - 用于给期约添加 onFinally 处理程序，
 *      - 这个处理程序在期约转换为解决或拒绝状态时都会执行
 *      - 可以避免 onResolved 和 onRejected 处理程序中出现冗余代码
 *      - 但 onFinally 处理程序没有办法知道期约的状态是解决还是拒绝，所以这个方法主要用于添加清理代码
 *      - 该方法返回一个新的期约实例 不同于 then() 或 catch() 方式返回的实例，因为 onFinally 被设计为一个状态无关的方法，所以在大多数情况下
 *        它将表现为父期约的传递，对于已解决状态和被拒绝状态都是如此
 */
// let p1 = Promise.resolve();
// let p2 = Promise.reject();
// let onFinally = function () {
//     setTimeout(console.log, 0, 'Finally');
// }
// p1.finally(onFinally);
// p2.finally(onFinally);

// let p1 = Promise.resolve('foo');

// // 这里都会原样后传
// let p2 = p1.finally();
// let p3 = p1.finally(() => undefined);
// let p4 = p1.finally(() => {});
// let p5 = p1.finally(() => Promise.resolve());
// let p6 = p1.finally(() => 'bar')
// let p7 = p1.finally(() => Promise.resolve('bar'));
// let p8 = p1.finally(() => Error('qux'))

// setTimeout(console.log, 0, p2)  // Promise { 'foo' } resolved状态
// setTimeout(console.log, 0, p3)
// setTimeout(console.log, 0, p4)
// setTimeout(console.log, 0, p5)
// setTimeout(console.log, 0, p6)
// setTimeout(console.log, 0, p7)
// setTimeout(console.log, 0, p8)

// let p1 = Promise.resolve('foo');

// // 忽略解决的值
// let p2 = p1.finally(
//     () => {
//         new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('bar')
//             }, 100)
//         })
//     }
// )

// setTimeout(console.log,0, p2);
// setTimeout(() => {
//     console.log(p2);
// }, 200);

/** 非重入期约的方法
 *      - 当期约进入落定状态时，与该状态相关的处理程序仅仅会被排期，而非立即执行。
 *      - 跟在添加这个处理程序的代码之后的同步代码一定会在处理程序之前先执行
 *      - 即使期约一开始就是与附加处理程序关联的状态，执行顺序也是这样的
 *      - 这个特性由JavaScript运行时保证，被称为“非重入”
 *      - 此特性使用于 onResolved/onRejected 处理程序、catch()处理程序和finally()处理程序
 */
// let p = Promise.resolve();

// p.then(()=>{
//     console.log('onResolved handle');
// })

// console.log('then() returns');

// 实际的输出：
// then() returns 
// onResolved handler 

// let synchronousResolve;

// let p = new Promise((resolve) => {
//     synchronousResolve = function(){
//         console.log('1: invoking resolve()');
//         resolve();
//         console.log('2: invoking resolve()');
//     }
// });

// p.then(()=>{
//     console.log('4: invoking resolve()');
// })

// synchronousResolve();
// console.log('3: invoking resolve()');

// let p1 = Promise.resolve();
// p1.then(() => console.log('p1 then() onResolved'));
// console.log('p1.then() returns');

// let p2 = Promise.reject();
// p2.then(() => console.log('p2 then() onRejected'));
// console.log('p2.then() returns');

// let p3 = Promise.reject();
// p3.catch(() => console.log('p1 catch() onRejected'));
// console.log('p3.catch() returns');

// let p4 = Promise.resolve();
// p1.finally(() => console.log('p4 finally() onFinally'));
// console.log('p4.finally() returns');

/** 邻近处理程序的执行顺序
 *      - 如果给期约添加了多个处理程序，当期约状态变化时，相关处理程序会按照添加它们的顺序依次执行
 *      - 无论是 then catch 还是 finally
 */
// let p1 = Promise.resolve();
// let p2 = Promise.reject();

// p1.then(() => setTimeout(console.log, 0, 1));
// p1.then(() => setTimeout(console.log, 0, 2));

// p2.then(null, () => setTimeout(console.log, 0, 3))
// p2.then(null, () => setTimeout(console.log, 0, 4))

// p2.catch(() => setTimeout(console.log, 0, 5))
// p2.catch(() => setTimeout(console.log, 0, 6))

// p1.finally(() => setTimeout(console.log, 0, 7))
// p1.finally(() => setTimeout(console.log, 0, 8))

/** 传递解决值和拒绝理由
 * 
 */

//  let p1 = new Promise((resolve,reject) => resolve('foo'));
//  p1.then((value) => console.log(value))

//  let p2 = new Promise((resolve,reject) => reject('bar'));
//  p2.catch((reason) => console.log(reason))

// let p1 = Promise.resolve('foo');
// p1.then((value) => console.log(value));

// let p2 = Promise.reject('bar');
// p2.catch((reason) => console.log(reason))

/** 拒绝期约与拒绝错误处理
 *      - 拒绝期约类似于 throw 表达式，因为它们都代表一种程序状态，即需要中断或特殊处理
 *      - 在期约的执行函数或处理程序中抛出错误会导致拒绝，对应的错误对象会成为拒绝的理由
 */

//  let p1 = new Promise((resolve,reject) => reject(Error('foo')));
//  let p2 = new Promise((resolve,reject) => { throw Error('foo')});
//  let p3 = Promise.resolve().then(()=>{throw Error('foo')})
//  let p4 = Promise.reject(Error('foo'));

//  setTimeout(console.log,0,p1);
//  setTimeout(console.log,0,p2);
//  setTimeout(console.log,0,p3);
//  setTimeout(console.log,0,p4);