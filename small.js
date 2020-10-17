function quickSort(arr) {
    return quick(arr)
}

function quick(left,right) {
    if(left >= right) return;
    let position = getPosition(arr);
    let i = 0,
        j = arr.length - 1;

    while (true) {
        while (arr[++i] < position) {}
        while (arr[--j] > position) {}
        if (i < j){
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }else{
            break;
        }
    }

    [arr[i],arr[right-1]] = [arr[right-1],arr[i]];
    quick(left,i-1);
    quick(i+1,right);
}

function getPosition(arr) {
    let left = 0,
        right = arr.length - 1;
    let midIndex = Math.floor(arr.length / 2);
    if (arr[left] > arr[midIndex]) {
        [arr[left], arr[midIndex]] = [arr[midIndex], arr[left]]
    }
    if (arr[midIndex] > arr[right]) {
        [arr[midIndex], arr[right]] = [arr[right], arr[midIndex]]
    }
    if (arr[left] > arr[right]) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    [arr[midIndex], arr[right - 1]] = [arr[right - 1], arr[midIndex]];
    return arr[right - 1];
}