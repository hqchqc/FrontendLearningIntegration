/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
    n<=39
 */

// 动态规划
function Fibonacci(n) {
    let dp = [];
    dp[0] = dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// 带备忘录的递归
function Fibonacci(n) {
    let memo = [];
    return helper(memo, n);
}

function helper(memo, n) {
    if (n === 1) return 1
    if (n === 0) return 0
    if (memo[n] !== undefined) return memo[n]
    memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
    return memo[n];
}