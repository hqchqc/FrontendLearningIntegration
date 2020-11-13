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
   let res = [0,1,2,3];
   if(number < 4){
       return number - 1;
   }
   if(res[number]) return res[number];
   let max = 0;
   for(let i = 4; i <= number; i++){
       max = 0;
       for(let j = 1; j <= i / 2; j++){
           let p = res[i - j] * res[j];
           max = max < p ? p : max
       }
       res[i] = max;
   }
   return res[number]
}
console.log(cutRope(8)
);