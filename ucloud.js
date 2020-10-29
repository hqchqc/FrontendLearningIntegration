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

function selectSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        [arr[min], arr[i]] = [arr[i], arr[min]];
    }

    return arr
}

function insertSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    let length = arr.length;

    for (let i = 1; i < length; i++) {
        let temp = arr[i],
            j = i;
        while (temp < arr[j - 1] && j - 1 >= 0) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }

    return arr;
}

function shellSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    let length = arr.length;

    let gap = Math.floor(arr.length / 2);

    while (gap > 0) {
        for (let i = gap; i < length; i++) {
            let temp = arr[i],
                j = i;
            while (temp < arr[j - gap] && j - gap >= 0) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }

    return arr;
}

function mergeSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    let midIndex = Math.floor(arr.length / 2),
        leftArr = arr.slice(0, midIndex),
        rightArr = arr.slice(midIndex);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
    let i = 0,
        j = 0,
        res = [];

    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            res.push(right[j]);
            j++;
        } else {
            res.push(left[i]);
            i++;
        }
    }

    while (i !== left.length) {
        res.push(left[i]);
        i++;
    }

    while (j !== right.length) {
        res.push(right[j]);
        j++;
    }

    return res
}

function quickSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return arr;

    let midIndex = Math.floor(arr.length / 2),
        bigArr = [],
        smallArr = [];

    let position = arr.splice(midIndex,1)[0];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > position){
            bigArr.push(arr[i])
        }else{
            smallArr.push(arr[i])
        }
    }

    return quickSort(smallArr).concat(position, quickSort(bigArr));
}

let arr = [10, 1, 35, 61, 89, 36, 55];

// console.log(bubbleSort(arr));
// console.log(selectSort(arr));
// console.log(insertSort(arr));
// console.log(shellSort(arr));
// console.log(mergeSort(arr));
console.log(quickSort(arr));