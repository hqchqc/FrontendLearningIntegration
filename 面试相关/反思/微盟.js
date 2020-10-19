function bubbleSort(arr) {
    // 冒泡排序 时间复杂度 n² 空间复杂度 1 是稳定排序
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    // 1. 获取数组的长度
    let length = arr.length - 1;

    // 2. 反向遍历 次数越来越少
    for (let i = length; i >= 0; i--) {
        // 3. 根据 i 的值 比较大小
        for (let j = 0; j < i; j++) {
            // 4. 如果 j 的值大于 j + 1 的值 就交换
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr
}

function selectSort(arr) {
    // 选择排序 时间复杂度 n² 空间复杂度 1 不是稳定排序
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    // 1. 获取数组的长度
    let length = arr.length - 1;

    // 2. 外层遍历： 遍历至 length - 2 的位置
    for (let i = 0; i < length; i++) {
        let min = i;
        // 3. 内层遍历： 从 i + 1 至 length 
        for (let j = i + 1; j <= length; j++) {
            // 4. 如果 i 位置的数据比 j 位置的大 记录下最小的数据位置
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        // 5. 让最小值和无序区第一个元素交换
        [arr[min], arr[i]] = [arr[i], arr[min]];
    }

    return arr
}

function insertSort(arr) {
    // 插入排序 时间复杂度 n² 空间复杂度 1 是稳定排序
    if (!Array.isArray(arr) || arr.length <= 1) return;

    // 1. 获取数组的长度
    let length = arr.length;

    // 2. 外层循环 从 1 开始 0 位置默认有序
    for (let i = 1; i < length; i++) {
        // 3. 记录当前元素及其下标
        let k = i,
            temp = arr[i];
        // 4. 内层循环 次数不确定
        while (temp < arr[k - 1] && k - 1 >= 0) {
            arr[k] = arr[k - 1];
            k--;
        }
        // 5. 交换
        arr[k] = temp;
    }
    return arr
}

function shellSort(arr) {
    // 希尔排序 时间复杂度 nlogn 空间复杂度 1 不是稳定排序
    if (!Array.isArray(arr) || arr.length <= 1) return;

    // 1. 先获取数组长度
    let length = arr.length;
    // 2. 计算第一次的间隔
    let gap = Math.floor(arr.length / 2);
    // 3. 不断减小增量
    while (gap > 0) {
        // 4. 直接插入排序
        for (let i = gap; i < length; i++) {
            let k = i,
                temp = arr[i];

            while (arr[k - gap] > temp && k - gap >= 0) {
                arr[k] = arr[k - gap];
                k -= gap;
            }
            arr[k] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return arr
}

function mergeSort(arr) {
    // 归并排序 时间复杂度 nlogn 空间复杂度 n 是稳定排序
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    let midIndex = Math.floor(arr.length / 2),
        leftArr = arr.slice(0, midIndex),
        rightArr = arr.slice(midIndex);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    // 申请空间
    // 设定两个执政 最初位置分别为两个已经排序序列的起始位置
    let result = [],
        lr = 0,
        lf = 0;
    
    // 比较两个指针与各个数组的长度大小
    while(lr < rightArr.length && lf < leftArr.length){
        // 比较两个指针所指向的元素，选择相对小的元素放入到合并空间 并移动指针到下一位置
        if(leftArr[lf] > rightArr[lr]){
            result.push(rightArr[lr]);
            lr++;
        }else{
            result.push(leftArr[lf]);
            lf++;
        }
    }

    while(lf < leftArr.length){
        result.push(leftArr[lf]);
        lf++
    }

    while(lr < rightArr.length){
        result.push(rightArr[lr]);
        lr++;
    }

    return result
}

// 阮一峰老师的快排
function quickSort(arr){
    // 时间复杂度 nlogn 空间复杂度 logn 不是稳定排序
    if(!Array.isArray(arr) || arr.length <= 1) return arr;

    let index = Math.floor(arr.length / 2),
        bigArr = [],
        smallArr = [];
    
    // splice 返回的是删除后的元素数组
    let position = arr.splice(index,1)[0];

    for(let i=0; i<arr.length; i++){
        if(position > arr[i]){
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