function randomSort(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return

    for (let i = 0; i < arr.length - 1; i++) {
        let index = Math.floor(Math.random() * (arr.length - i)) + i;

        [arr[index], arr[i]] = [arr[i], arr[index]];
    }

    return arr
}

let arr = [10, 5, 6, 1, 3, 5, 4, 31]
console.log(randomSort(arr))