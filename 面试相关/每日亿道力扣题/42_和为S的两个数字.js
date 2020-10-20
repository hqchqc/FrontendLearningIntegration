/**
 * 输入一个递增排序的数组和一个数字S，
 * 在数组中查找两个数，使得他们的和正好是S，
 * 如果有多对数字的和等于S，输出两个数的乘积最小的。
 */

function FindNumbersWithSum(array, sum) {
    if (!Array.isArray(array) || array.length < 1) return [];

    let i = 0,
        j = array.length - 1;
    let temp = Number.MAX_SAFE_INTEGER;
    let res = [];
    while (i < j) {
        if (array[i] + array[j] === sum) {
            if (array[i] * array[j] < temp) {
                temp = array[i] * array[j];
                res = [array[i], array[j]];
            }
            i++;
            j--;
        } else if (array[i] + array[j] < sum) {
            i++;
        } else if (array[i] + array[j] > sum) {
            j--;
        }
    }
    return res
}

console.log(FindNumbersWithSum([2, 7, 11, 15], 9));