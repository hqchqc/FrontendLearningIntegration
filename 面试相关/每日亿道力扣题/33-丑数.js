/**
 * 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但14不是，因为它包含质因子7。 
 * 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 */

function GetUglyNumber_Solution(index) {
    let dp = [];
    dp[0] = 1;
    let a = 0,b=0,c=0;

    for (let i = 1; i < index; i++) {
        dp[i] = Math.min(2 * dp[a], 3 * dp[b], 5 * dp[c]);
        if(dp[i] === 2 * dp[a]){
            a++;
        }
        if(dp[i] === 3 * dp[b]){
            b++;
        }
        if(dp[i] === 5 * dp[c]){
            c++;
        }
    }

    return dp
}
console.log(GetUglyNumber_Solution(10));