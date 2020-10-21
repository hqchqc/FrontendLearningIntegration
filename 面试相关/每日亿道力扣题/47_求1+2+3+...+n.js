/**
 * 求1+2+3+...+n，
 * 要求不能使用乘除法、for、while、if、else、switch、case等关键字及
 * 条件判断语句（A?B:C）。
 */

function Sum_Solution(n) {
    n > 1 && (n += Sum_Solution(n - 1))
    return n;
}