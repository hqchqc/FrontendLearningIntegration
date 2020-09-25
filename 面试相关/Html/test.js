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


let arr1 = [2,6,5,1,7]

// bubbleSort(arr1)
// betterSort(arr1)
// selectSort(arr1);
insertSort(arr1)

console.log(arr1);