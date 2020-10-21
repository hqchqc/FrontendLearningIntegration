/**
 * 汇编语言中有一种移位指令叫做循环左移（ROL），
 * 现在有个简单的任务，就是用字符串模拟这个指令的运算结果。
 * 对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。
 * 例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，
 * 即“XYZdefabc”。是不是很简单？OK，搞定它！
 */
// str.slice 
// arr.join
function LeftRotateString(str, n) {
    if(!str) return '';
    // 1. 转换为数组
    let arr = str.split('');
    // 2. 删除对应元素
    let del = arr.splice(0,n);
    // 3. 将删除的元素重新加到末尾
    del.forEach(item=>{
        arr.push(item)
    });
    // 4. 转为字符串
    return arr.join('')
}

// 法二 字符串也有 slice 方法
var reverseLeftWords = function(s, n) {
    if(!str) return '';
    return s = s.slice(n) + s.slice(0,n)
};