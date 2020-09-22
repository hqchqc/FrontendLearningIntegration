/**
 * 输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示。
 */
function NumberOf1(n)
{
    if(n >= 0){
        n = n.toString(2);
    }else{
        n = (Math.pow(2,32) - Math.abs(n)).toString(2);
        console.log(n);
    }
    
    let res = 0;
    for(let i=0; i<n.length; i++){
        if(n[i] == 1){
            res++;
        }
    }
    return res
}
console.log(NumberOf1(-1));
// console.log((-10).toString(2));
// console.log(Math.pow(2, 32) - Math.abs((-1)).toString(2));
// n = Math.pow(2, 32) - Math.abs(n)
