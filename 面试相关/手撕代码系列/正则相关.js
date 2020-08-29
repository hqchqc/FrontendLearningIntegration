/**
 *  如何将浮点数点左边的数每三位添加一个逗号，
 *  如 12000000.11 转化为『12,000,000.11』?
 */
// exp1(?!exp2)：查找后面不是 exp2 的 exp1。
function format(number){
    return number && number.replace(/(?!^)(?=(\d{3})+\.)/g,',');
}