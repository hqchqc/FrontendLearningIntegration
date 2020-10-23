/**
 * 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 
 * 数值为0或者字符串不是一个合法的数值则返回0
 */

function StrToInt(str) {
    // 1. 设置变量用来控制出现哪些数值
    const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // 2. 将字符串转为数组
    const arr = str.split('');
    // 3. 判断首个字符是否为 + / - 或是 数字 否则返回 0
    if ((!['+', '-'].includes(arr[0])) && (!num.includes(arr[0]))) {
        return 0
    }
    // 4. 遍历字符串 除开第一个 第一个放到最后处理
    for (let i = 1; i < arr.length; i++) {
        // 如果不为数字返回 0
        if(!num.includes(arr[i])){
            return 0;
        }
    }
    // 5. 拿出除了第一个元素
    const n1 = Number(str.slice(1));
    // 6. 如果为 0 返回 0
    if(n1 === 0) return 0;
    // 7. 对第一个字符串处理后返回
    return arr[0] === '+' ? n1 : arr[0] + Number(str.slice(1));
}

console.log(StrToInt('-1256'));