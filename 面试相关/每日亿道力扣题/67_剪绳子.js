/**
 * 给你一根长度为n的绳子，
 * 请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1，m<=n），
 * 每段绳子的长度记为k[1],...,k[m]。
 * 请问k[1]x...xk[m]可能的最大乘积是多少？
 * 例如，当绳子的长度是8时，
 * 我们把它剪成长度分别为2、3、3的三段，
 * 此时得到的最大乘积是18。
 */

function cutRope(number) {
   let dp = [0,1,1,2,3,4,9];
   if(number <= 6){
       return dp[number]
   }else{
       for(let i = 7; i <= number; i++){
           dp[i] = 3 * dp[i - 3];
       }
       return dp[number]
   }
}