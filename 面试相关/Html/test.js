// Function.prototype.myApply = function (context) {
//     if (typeof this !== 'function') {
//         return 'type error'
//     }

//     context = context || window;

//     context.fn = this;

//     let result = null;

//     if (arguments[1]) {
//         result = context.fn(...arguments[1])
//     } else {
//         result = context.fn()
//     }

//     delete context.fn;

//     return result
// }

// Function.prototype.myBind = function (context) {
//     if (typeof this !== 'function') {
//         console.log('type error');
//     }
//     let args = [...arguments].slice(1),
//         fn = this;

//     return function Fn(){
//         return fn.apply(
//             this instanceof Fn ? this : context,
//             args.concat(...arguments)
//         )
//     }
// }

// let obj = {
//     name: 'hqc'
// }

// function test(a) {
//     console.log(this.name, a);
// }
// test.myApply(obj, 10);

// function sort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let index = Math.floor(Math.random() * (arr.length - i) + i);
//         [arr[index], arr[i]] = [arr[i], arr[index]]
//     }
//     return arr
// }
// let arr = [1,2,3,4];
// console.log(sort(arr));

// 发布者
function Subject(){
    // 一个发布者的所有订阅者
    this.observes = [];

    // 添加一个订阅者
    this.attach = function(callback){
        this.observes.push(callback);
    }

    // 通知订阅者数据发生更新
    this.notify = function(value){
        this.observes.forEach(callback=>{
            callback(value)
        })
    }
}

// 订阅者
function Observers(queue,key,callback){
    // 调用发布者的 attach 方法加入到数组中
    queue[key].attach(callback);
}

// 添加数据劫持之前
// 修改数据
// function setDate(data,key,value){
//     data[key] = value;

//     messageQueue[key].notify(value);
// }
// 添加数据劫持之后
// 修改数据
function Watcher(data,queue){
    for(let key in data){
        let value = data[key];
        Object.defineProperty(data,key,{
            configurable: true,
            enumerable: true,
            get: () => {
                return value
            },
            set: newValue => {
                value = newValue;
                queue[key].notify(value);
            }
        })
    }
    return data
}

const messageQueue = [];

// 添加数据劫持之前
// let data = {
//     name: 'hqc',
//     age: 22
// };
// 添加数据劫持之后
let data = Watcher({
    name: 'hqc',
    age: 22
},messageQueue);

for(let key in data){
    messageQueue[key] = new Subject();
}

// 你要订阅什么内容
Observers(messageQueue,"name",value => {
    console.log('value update', value);
})

// 添加数据劫持之前
// setDate(data,"name",'jyq');
// 添加数据劫持之后
data.name = 'jyq'