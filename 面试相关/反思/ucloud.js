// function debounce(fn,wait){
//     let timer = null;
//     return function(){
//         let context = this,
//             args = arguments;
//         if(timer){
//             clearTimeout(timer);
//             timer = null
//         }
//         timer = setTimeout(() => {
//             fn.apply(context,args);
//         }, wait);
//     }
// }

// function throttle(fn,delay){
//     let preDate = Date.now();
//     return function(){
//         let nowDate = Date.now(),
//             context = this,
//             args = arguments;
//         if(nowDate - preDate >= delay){
//             preDate = Date.now();
//             return fn.apply(context,args);
//         }
//     }
// }

// function bubbleSort(arr) {
//     if (!Array.isArray(arr) || arr.length <= 1) return arr;

//     let length = arr.length;

//     for (let i = length - 1; i >= 0; i--) {
//         for (let j = 0; j < i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }

//     return arr;
// }

// function selectSort(arr) {
//     if (!Array.isArray(arr) || arr.length <= 1) return arr;

//     let length = arr.length;

//     for (let i = 0; i < length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < length; j++) {
//             if (arr[minIndex] > arr[j]) {
//                 minIndex = j;
//             }
//         }
//         [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
//     }

//     return arr
// }

// function insertSort(arr) {
//     if (!Array.isArray(arr) || arr.length <= 1) return arr;

//     let length = arr.length;

//     for (let i = 1; i < length; i++) {
//         let temp = arr[i],
//             j = i;
//         while (temp < arr[j - 1] && j - 1 >= 0) {
//             arr[j] = arr[j - 1];
//             j--;
//         }
//         arr[j] = temp;
//     }

//     return arr
// }

// function shellSort(arr) {
//     if (!Array.isArray(arr) || arr.length <= 1) return arr;

//     let length = arr.length,
//         gap = Math.floor(length / 2);

//     while (gap) {
//         for (let i = gap; i < length; i++) {
//             let temp = arr[i],
//                 j = i;
//             while (temp < arr[j - gap] && j - gap >= 0) {
//                 arr[j] = arr[j - gap];
//                 j -= gap;
//             }
//             arr[j] = temp;
//         }
//         gap = Math.floor(gap / 2);
//     }

//     return arr
// }

// function mergeSort(arr) {
//     if (!Array.isArray(arr) || arr.length <= 1) return arr;

//     let midIndex = Math.floor(arr.length / 2),
//         leftArr = arr.slice(0, midIndex),
//         rightArr = arr.slice(midIndex);

//     return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// function merge(left, right) {
//     let lf = 0,
//         lr = 0,
//         res = [];

//     while(lf < left.length && lr < right.length){
//         if(left[lf] < right[lr]){
//             res.push(left[lf]);
//             lf++;
//         }else{
//             res.push(right[lr]);
//             lr++;
//         }
//     }

//     while(lf !== left.length){
//         res.push(left[lf]);
//         lf++;
//     }

//     while(lr !== right.length){
//         res.push(right[lr]);
//         lr++;
//     }

//     return res;
// }

// function quickSort(arr){
//     if(!Array.isArray(arr) || arr.length <= 1) return arr;

//     let midIndex = Math.floor(arr.length / 2),
//         smallArr = [],
//         bigArr = [],
//         position = arr.splice(midIndex,1)[0];

//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > position){
//             bigArr.push(arr[i])
//         }else{
//             smallArr.push(arr[i])
//         }
//     }

//     return quickSort(smallArr).concat(position,quickSort(bigArr));
// }

// let arr = [10, 2, 4, 356, 15, 3, 45];
// // bubbleSort(arr)
// // betterSort(arr);
// // selectSort(arr)
// // insertSort(arr)
// // shellSort(arr)
// // mergeSort(arr)
// // quickSort(arr)

// // console.log(mergeSort(arr));
// console.log(quickSort(arr));

// Promise.all = function (arr) {
//     return new Promise((resolve, reject) => {
//         let res = [];
//         if (arr.length === 0) {
//             resolve(res);
//             return;
//         }
//         const handle = function (data, index) {
//             res[index] = data;
//             if (index === arr.length - 1) {
//                 resolve(res)
//             }
//         }
//         for (let i = 0; i < arr.length; i++) {
//             Promise.resolve(arr[i]).then(data => {
//                 handle(data, i)
//             }).catch(err => {
//                 reject(err)
//             })
//         }
//     })
// }

// Promise.all = function (arr) {
//     return new Promise((resolve, reject) => {
//         let res = [];
//         if (arr.length === 0) {
//             resolve(res);
//             return
//         }
//         const handle = function (data, index) {
//             res[index] = data;
//             if (index === arr.length - 1) {
//                 return resolve(res);
//             }
//         }
//         for (let i = 0; i < arr.length; i++) {
//             Promise.resolve(arr[i]).then(data => {
//                 handle(data, i)
//             }).catch(err => {
//                 reject(err)
//             })
//         }
//     })
// }

// Promise.race = function (arr) {
//     return new Promise((resolve, reject) => {
//         if (arr.length === 0) return;

//         for (let i = 0; i < arr.length; i++) {
//             Promise.resolve(arr[i]).then(data => {
//                 resolve(data)
//                 return
//             }).catch(err => {
//                 reject(err)
//                 return
//             })
//         }
//     })
// }

// function shallowCopy(object) {
//     if (typeof object !== 'object' || !object) {
//         return
//     }

//     let newObject = Array.isArray(object) ? [] : {};

//     for (let key in object) {
//         if (Object.hasOwnProperty(key)) {
//             newObject[key] = object[key];
//         }
//     }

//     return newObject
// }

// function deepCopy(object) {
//     if (!object || typeof object !== 'object') return

//     let newObject = Array.isArray(object) ? [] : {};

//     for (let key in object) {
//         if (Object.hasOwnProperty(key)) {
//             newObject[key] = typeof object[key] === 'object' ? deepCopy(object[key]) : object[key];
//         }
//     }

//     return newObject
// }

// function Subject() {
//     this.observers = [];

//     this.attach = function (callback) {
//         this.observers.push(callback)
//     }

//     this.notify = function (value) {
//         this.observers.forEach(callback => {
//             callback(value);
//         })
//     }
// }

// function Observer(queue, key, callback) {
//     queue[key].attach(callback);
// }

// function setData(data,key,value){
//     data[key] = value;
//     messageQueue[key].notify(value);
// }

// const messageQueue = {};

// const myData = {
//     value: ''
// };

// for(let key in myData){
//     messageQueue[key] = new Subject();
// }

// Observer(messageQueue,'value',value => {
//     console.warn('value updated' , value)
// })

// setData(myData,'value','hello');
// setData(myData,'value', 100);

function Subject(){
    this.observers = [];
    this.attach = function(callback){
        this.observers.push(callback)
    }
    this.notify = function(value){
        this.observers.forEach(callback => {
            callback(value)
        })
    }
}
function Observer(queue,key,callback){
    queue[key].attach(callback);
}
function setData(queue,key,value){
    queue[key] = value;
    messageQueue[key].notify(value);
}
const messageQueue = {};
const myData = {
    value: ''
}
for(let key in myData){
    messageQueue[key] = new Subject();
}
Observer(messageQueue,'value',value => {
    console.log('update',value);
})

setData(myData,'value',100)