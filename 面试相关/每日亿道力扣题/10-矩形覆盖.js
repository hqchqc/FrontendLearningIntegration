/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 */
function rectCover(number) {
    let memo = [];
    return helper(memo, number);
}

function helper(memo, number) {
    if (number === 0) return 0;
    if (number === 1) return 1;
    if (number === 2) return 2;
    if (memo[number] !== undefined) return memo[number];
    memo[number] = helper(memo, number - 1) + helper(memo, number - 2)
    return memo[number]
}