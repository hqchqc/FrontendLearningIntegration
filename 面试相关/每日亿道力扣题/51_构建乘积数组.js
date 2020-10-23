/**
 * 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
 * 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。
 * 不能使用除法。
 * （注意：规定B[0] = A[1] * A[2] * ... * A[n-1]，B[n-1] = A[0] * A[1] * ... * A[n-2];）
 * 对于A长度为1的情况，B无意义，故而无法构建，因此该情况不会存在。
 */
function multiply(array) {
    // 大致思路 ： 把数组分为左边 和 右边 最后相乘
    // 设置一个初始数组
    let res = [];
    // 遍历 array
    for (let i = 0; i < array.length; i++) {
        // 将数组分为左右两部分 不包含 i
        let left = array.slice(0, i);
        let right = array.slice(i + 1);
        let sum = 1;
        // 遍历左边数组 相乘
        for (let j = 0; j < left.length; j++) {
            sum *= left[j]
        }
        // 遍历右边数组 相乘
        for (let k = 0; k < right.length; k++) {
            sum *= right[k]
        }
        // 对应位置上的数值赋值即可
        res[i] = sum;
    }
    console.log(res);
}


console.log(multiply([1, 2, 3, 4, 5]));