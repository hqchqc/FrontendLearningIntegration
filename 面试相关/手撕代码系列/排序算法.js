/* 排序算法 */
// 冒泡排序 时间复杂度 n² 空间复杂度 1 是稳定排序
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
    if (!Array.isArray(arr) || arr.length <= 1) return

    let lastIndex = arr.length - 1;

    while (lastIndex > 0) {
        let flag = true,
            k = lastIndex;
        for (let j = 0; j < k; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                lastIndex = j;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (flag) break
    }
}

// 选择排序 时间复杂度 n² 空间复杂度 1 不是稳定排序
function selectSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        for (let j = minIndex + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }

}

// 插入排序 时间复杂度 n² 空间复杂度 1 是稳定排序
function insertSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return

    for (let i = 1; i < arr.length; i++) {
        let tmp = arr[i],
            k = i;
        while (tmp < arr[k - 1] && k - 1 >= 0) {
            arr[k] = arr[k - 1]
            k--;
        }
        arr[k] = tmp
    }
}

// 希尔排序 时间复杂度 nlogn 空间复杂度 1 不是稳定排序
function shellSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return

    let gap = Math.floor((arr.length - 1) / 2)
    while (gap >= 1) {
        for (let i = gap; i < arr.length; i++) {
            let k = i,
                tmp = arr[i];
            while (tmp < arr[k - gap] && k - gap >= 0) {
                arr[k] = arr[k - gap];
                k -= gap;
            }
            arr[k] = tmp
        }
        gap = Math.floor(gap / 2)
    }
}

// 归并排序 时间复杂度 nlogn 空间复杂度n 是稳定排序
function mergeSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 0) return

    if (arr.length == 1) return arr

    let midIndex = Math.floor((arr.length) / 2),
        leftArr = arr.slice(0, midIndex),
        rightArr = arr.slice(midIndex, arr.length);

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(left, right) {
    let result = [],
        lf = 0,
        lr = 0;

    while (lf < left.length && lr < right.length) {
        if (left[lf] > right[lr]) {
            result.push(right[lr]);
            lr++;
        } else {
            result.push(left[lf]);
            lf++;
        }
    }

    while (lf < left.length) {
        result.push(left[lf]);
        lf++;
    }

    while (lr < right.length) {
        result.push(right[lr]);
        lr++;
    }

    return result
}

// 快速排序 时间复杂度 nlogn 空间复杂度 logn 不是稳定排序
function quickSort(arr) {
    return quickRec(0, arr.length - 1)
}

function quickRec(start, end) {
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
            break
        }
    }
    [arr[lf], arr[end - 1]] = [arr[end - 1], arr[lf]];
    quickRec(start, lf - 1)
    quickRec(lf + 1, end)
}

function getPosition(start, end) {
    let midIndex = Math.floor((start + end) / 2)
    if (arr[start] > arr[midIndex]) {
        [arr[start], arr[midIndex]] = [arr[midIndex], arr[start]];
    }
    if (arr[midIndex] > arr[end]) {
        [arr[midIndex], arr[end]] = [arr[end], arr[midIndex]]
    }
    if (arr[start] > arr[end]) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
    }
    [arr[midIndex], arr[end - 1]] = [arr[end - 1], arr[midIndex]]
    return arr[end - 1]
}

let arr = [10, 2, 4, 356, 15, 3, 45];
// bubbleSort(arr)
// betterSort(arr);
// selectSort(arr)
// insertSort(arr)
// shellSort(arr)
// console.log(mergeSort(arr));
quickSort(arr)
console.log(arr);