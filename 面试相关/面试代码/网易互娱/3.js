/**
 * 
 *  坐标轴的面积 给一个数组 x轴是它的下标 y轴是值 
 */
function solution(data) {
    let area = 0,
        ave = 0;
    for (let i = 0; i < data.length; i++) {
        area += data[i];
    }
    ave = parseInt(area / data.length);

    data = data.map(function (item) {
        if (item > ave) {
            return item
        }
    })
    let res = {}
    for (let i = 0; i < data.length; i++) {
        if (data[i] !== undefined) {
            res[i] = data[i]
        }
    }
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for (let key in res) {
        if (key < min) {
            min = key
        }
        if (key > max) {
            max = key
        }
    }
    
    if (res[min] > res[max]) {
        return res[max] * (max - min)
    } else {
        return res[min] * (max - min)
    }
}
console.log(Math.floor(Math.random() * 100));
console.log(solution([1, 8, 6, 2, 5, 4, 8, 3, 7]));