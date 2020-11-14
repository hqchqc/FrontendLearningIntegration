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
//         let min = i;
//         for (let j = i + 1; j < length; j++) {
//             if (arr[min] > arr[j]) {
//                 min = j;
//             }
//         }
//         [arr[min], arr[i]] = [arr[i], arr[min]];
//     }

//     return arr;
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

//     return arr;
// }

// function shellSort(arr) {
//     if (!Array.isArray(arr) || arr.length <= 1) return arr;

//     let length = arr.length;

//     let gap = Math.floor(length / 2);

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

//     return arr;
// }

// function mergeSort(arr){
//     if(!Array.isArray(arr) || arr.length <= 1) return arr;

//     let midIndex = Math.floor(arr.length / 2),
//         leftArr = arr.slice(0,midIndex),
//         rightArr = arr.slice(midIndex);

//     return merge(mergeSort(leftArr),mergeSort(rightArr));
// }

// function merge(left,right){
//     let lf = 0,
//         lr = 0,
//         res = [];

//     while(lf < left.length && lr < right.length){
//         if(left[lf] > right[lr]){
//             res.push(right[lr]);
//             lr++;
//         }else{
//             res.push(left[lf]);
//             lf++;
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
//         bigArr = [],
//         smallArr = [],
//         position = arr.splice(midIndex,1)[0];

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < position){
//             smallArr.push(arr[i])
//         }else{
//             bigArr.push(arr[i])
//         }
//     }

//     return quickSort(smallArr).concat(position,bigArr);
// }

// let arr = [10, 1, 35, 61, 89, 36, 55];
// // console.log(bubbleSort(arr));
// // console.log(selectSort(arr));
// // console.log(insertSort(arr));
// // console.log(shellSort(arr));
// // console.log(mergeSort(arr));
// console.log(quickSort(arr));

// // let obj = new Object();
// // obj.name = 'xxx';

// // let obj = {
// //     name: 'xxx',
// //     age: 11
// // }

// // function create(){
// //     let obj = {
// //         name: 'xx',
// //         age: 11
// //     }
// //     return obj
// // }
// // let obj = create();

// // // 自定义构造函数模式
// // function Person(name){
// //     this.name = name;
// //     this.run = function(){
// //         console.log('1');
// //     }
// // }
// // let obj = new Person('sss')

// // // 自定义构造函数 + 原型
// // function Person(name){
// //     this.name = name;
// // }
// // Person.prototype.run = function(){
// //     console.log('11');
// // }

// // 1. 原型链继承
// // function Parent(){
// //     this.name = 'xx';
// // }
// // Parent.prototype.run = function(){
// //     console.log('`object`');
// // }
// // function Child(){
// //     this.name = 'jj'
// // }

// // Child.prototype = new Parent();
// // Child.prototype.constructor = Child;

// // let child = new Child();
// // child.run();

// // 2. 借用构造函数继承(假继承)
// // function Parent(name){
// //     this.name = name
// // }
// // Parent.prototype.run = function(){
// //     console.log('go');
// // }
// // function Child(name,age){
// //     Parent.call(this,name);
// //     this.age = age;
// // }
// // Child.prototype.say = function(){
// //     console.log('a');
// // }

// // let child = new Child('a',20)
// // console.log(child.name);

// // 3. 组合式继承
// // function Parent(name){
// //     this.name = name;
// // }

// // Parent.prototype.run = function(){
// //     console.log('121');
// // }

// // function Child(name,age){
// //     Parent.call(this,name);
// //     this.age = age;
// // }

// // Child.prototype = new Parent();
// // Child.prototype.constructor = Child;

// // Child.prototype.say = function(){
// //     console.log('object');
// // }
// // let a = new Child('a',12)
// // a.run()

// // 原型式继承
// // let obj = {
// //     name: 'xxx',
// //     run: function(){
// //         console.log(this.name);
// //     }
// // }

// // function content(obj){
// //     function Fn(){};
// //     Fn.prototype = obj;
// //     return new Fn();
// // }

// // let child = content(obj);
// // child.age = 12;
// // console.log(child.name);

// // 寄生式继承
// // function content(obj){
// //     function Fn(){};
// //     Fn.prototype = obj;
// //     return new Fn();
// // }

// // function create(obj){
// //     let clone = content(obj)
// //     clone.go = function(){
// //         console.log('go');
// //     }
// //     return clone;
// // }

// // let obj = {
// //     name: 'xxx',
// //     say: function(){
// //         console.log(3);
// //     }
// // }

// // let objs = create(obj);
// // console.log(objs.go());

// // 寄生式组合继承
// function Parent(name){
//     this.name = name;
// }
// Parent.prototype.go = function(){
//     console.log(1);
// }

// function Child(name,age){
//     Parent.call(this,name)
//     this.age = age
// }


// function content(obj){
//     function Fn(){};
//     Fn.prototype = obj;
//     return new Fn();
// }

// Child.prototype = content(Parent.prototype);
// Child.prototype.constructor = Child;

// Child.prototype.run = function(){
//     console.log('run');
// }

// let child = new Child('xx',19);
// console.log(child);
// child.go()

// function Parent(){
//     this.name = 'x'
// }
// function Child(){
//     this.name = 'z',
//     this.age = 10
// }
// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// function Parent(name){
//     this.name = name
// }
// function Child(name,age){
//     Parent.call(this,name)
//     this.age = age;
// }
// function Parent(name){
//     this.name = name;
// }
// function Child(age,name){
//     Parent.call(this,name)
//     this.age = age
// }
// Child.prototype = new Parent();
// Child.prototype.constructor = Child;

// let obj = {
//     name: 'xxx'
// }
// function content(obj){
//     function Fn(){};
//     Fn.prototype = obj;
//     return new Fn();
// }

// let obj = {
//     name:'xx'
// }
// function content(obj){
//     function Fn(){};
//     Fn.prototype = obj;
//     return new Fn()
// }

// function create(obj){
//     let clone = content(obj);
//     clone.go = function(){
//         console.log('ss');
//     }
//     return clone;
// }

// function Parent(name){
//     this.name = name;
// }
// function Child(name,age){
//     Parent.call(this,name)
//     this.age = age;
// }

// function Content(obj){
//     function Fn(){};
//     Fn.prototype = obj;
//     return new Fn()
// }
// Child.prototype = Content(Parent.prototype);

function bubbleSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    let length = arr.length;

    for (let i = length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

function selectSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return arr;

    let length = arr.length;

    for(let i = 0; i < length; i++){
        let minIndex = i;
        for(let j = i + 1; j < length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]];
    }

    return arr
}

function insertSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return arr;

    let length = arr.length;

    for(let i = 1; i < length; i++){
        let temp = arr[i],
            k = i;
        while(temp < arr[k - 1] && k - 1 >= 0){
            arr[k] = arr[k - 1]
            k--;
        }
        arr[k] = temp;
    }

    return arr;
}

function shellSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return arr;

    let gap = Math.floor(arr.length / 2);

    while(gap){
        for(let i = gap; i < arr.length; i++){
            let temp = arr[i],
                k = i;
            while(arr[k - gap] > temp && k - gap >= 0){
                arr[k] = arr[k - gap];
                k -= gap;
            }
            arr[k] = temp;
        }

        gap = Math.floor(gap / 2);
    }

    return arr;
}

function mergeSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return arr

    let midIndex = Math.floor(arr.length / 2),
        leftArr = arr.slice(0,midIndex),
        rightArr = arr.slice(midIndex);
    
    return merge(mergeSort(leftArr),mergeSort(rightArr));
}
function merge(leftArr,rightArr){
    let lf = 0,
        lr = 0,
        res = [];
    
    while(lf < leftArr.length && lr < rightArr.length){
        if(leftArr[lf] > rightArr[lr]){
            res.push(rightArr[lr])
            lr++
        }else{
            res.push(leftArr[lf])
            lf++
        }
    }

    while(lf !== leftArr.length){
        res.push(leftArr[lf]);
        lf++
    }

    while(lr !== rightArr.length){
        res.push(rightArr[lr]);
        lr++;
    }

    return res;
}

function quickSort(arr){
    if(!Array.isArray(arr) || arr.length <= 1) return arr;

    let midIndex = Math.floor(arr.length / 2),
        smallArr = [],
        bigArr = [],
        position = arr.splice(midIndex,1)[0];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < position){
            smallArr.push(arr[i])
        }else{
            bigArr.push(arr[i])
        }
    }

    return quickSort(smallArr).concat(position,quickSort(bigArr));
}

let arr = [10, 1, 35, 61, 89, 36, 55];
// console.log(bubbleSort(arr));
// console.log(selectSort(arr));
// console.log(insertSort(arr));
// console.log(shellSort(arr));
// console.log(mergeSort(arr));
console.log(quickSort(arr));

let obj = new Object();
obj.name = '22';
let obj = {

}
function factory(){
    let obj = {

    }
    return obj;
}
function c(xx){
    this.xx = xx
}
let s = new c('ww')

function Parent(){
    this.name = 'father'
}
function Child(){
    Parent.call(this,xx)
    this.x = 'x'
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;

let obj = {
    a: 'x'
}
function content(obj){
    function Fn(){};
    Fn.prototype = obj;
    return new Fn();
}
let o = content(obj)

let obj = {
    a: 'x'
}
function content(obj){
    function Fn(){};
    Fn.prototype = obj;
    return new Fn();
}
function ccc(obj){
    let obj = content(obj);
    obj.gogogo = function(){
        console.log('s');
    }
}
