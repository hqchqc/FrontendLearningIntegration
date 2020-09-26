// 冒泡 nn 1 yes
function bubbleSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return
    for (let j = arr.length - 1; j >= 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }
}

function betterSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return;

    let lastIndex = arr.length - 1;

    while (lastIndex) {
        let flag = true,
            k = lastIndex;

        for (let i = 0; i < k; i++) {
            if (arr[i] > arr[i + 1]) {
                flag = false;
                lastIndex = i;
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }

        if (flag) break;
    }
}

// 选择 nn 1 no
function selectSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return;

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = minIndex + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
}

// insert nn 1 yes
function insertSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return

    for (let i = 1; i < arr.length; i++) {
        let k = i,
            tmp = arr[i];
        while (tmp < arr[k - 1] && k - 1 >= 0) {
            arr[k] = arr[k - 1];
            k--;
        }
        arr[k] = tmp;
    }
}

// shell nlogn 1 no
function shellSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return;

    let gap = Math.floor(arr.length / 2);

    while (gap) {
        for (let i = gap; i < arr.length; i++) {
            let temp = arr[i],
                k = i;
            while (temp < arr[k - gap] && k - gap >= 0) {
                arr[k] = arr[k - gap];
                k = k - gap;
            }
            arr[k] = temp;
        }
        gap = Math.floor(gap / 2);
    }
}

// merge nlogn n yes
function mergeSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 0) return

    if (arr.length === 1) return arr;

    let midIndex = Math.floor(arr.length / 2),
        left = arr.slice(0, midIndex),
        right = arr.slice(midIndex, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [],
        lf = 0,
        lr = 0;
    while (lf < left.length && lr < right.length) {
        if (left[lf] < right[lr]) {
            result.push(left[lf]);
            lf++;
        } else {
            result.push(right[lr]);
            lr++;
        }
    }

    while (lf < left.length) {
        result.push(left[lf]);
        lf++
    }
    while (lr < right.length) {
        result.push(right[lr]);
        lr++;
    }

    return result;
}

function quickSort(arr) {
    return quickMerge(0, arr.length - 1);
}

function quickMerge(start, end) {
    if (end <= start) return

    let position = getPosition(start, end),
        lf = 0,
        lr = end - 1;

    while (lf < lr) {
        while (arr[++lf] < position) {}
        while (arr[--lr] > position) {}
        if (lf < lr) {
            [arr[lf], arr[lr]] = [arr[lr], arr[lf]]
        } else {
            break;
        }
    }
    [arr[lf], arr[end - 1]] = [arr[end - 1], arr[lf]];
    quickMerge(start, lf - 1);
    quickMerge(lf + 1, end);
}

function getPosition(start, end) {
    let midIndex = Math.floor((start + end) / 2);
    if (arr[start] > arr[midIndex]) {
        [arr[start], arr[midIndex]] = [arr[midIndex], arr[start]];
    }
    if (arr[midIndex] > arr[end]) {
        [arr[midIndex], arr[end]] = [arr[end], arr[midIndex]];
    }
    if (arr[start] > arr[end]) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
    }
    [arr[midIndex], arr[end - 1]] = [arr[end - 1], arr[midIndex]];
    return arr[end - 1];
}


let arr = [2, 6, 5, 1, 7]

// bubbleSort(arr)
// betterSort(arr)
// selectSort(arr);
// insertSort(arr)
// shellSort(arr)
// mergeSort(arr)
// quickSort(arr);
// console.log(arr);

function shallowCopy(obj){
    if(typeof obj !== 'object' || !obj) return

    let newObj = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        if(object.hasOwnProperty(key)){
            newObj[key] = obj[key]
        }
    }

    return newObj;
}

function deepCopy(object){
    if(!object || typeof object !== 'object') return

    let newObj = Array.isArray(object) ? [] : {};

    for(let key in object){
        if(object.hasOwnProperty(key)){
            newObj[key] = typeof object[key] === 'object' ? deepCopy(object[key]) : object[key];
        }
    }

    return newObj
}

// for(let i=0; i<5;i++){
//     (function(i){
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     })(i)
// }

// for(var i=0; i<5; i++){
//     (function(i){
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     })(i)
// }

// for(let i=0; i<5; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }

var r = {
    name: 'xx'
}

function myName(){
    console.log(this.name);
}

Function.prototype.myCall = function(context){
    if(typeof this !== 'function') return
    context = context || window
    context.fn = this;
    let args = [...arguments].slice(1);
    let result = context.fn(args);
    delete context.fn
    return result;
}

myName.myCall(r)