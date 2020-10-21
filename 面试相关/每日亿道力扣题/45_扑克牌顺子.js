/**
 * LL今天心情特别好,因为他去买了一副扑克牌,
 * 发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...
 * 他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,
 * 如果抽到的话,他决定去买体育彩票,嘿嘿！！
 * “红心A,黑桃3,小王,大王,方片5”,“Oh My God!”不是顺子.....
 * LL不高兴了,他想了想,决定大\小 王可以看成任何数字,
 * 并且A看作1,J为11,Q为12,K为13。
 * 上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),“So Lucky!”。
 * LL决定去买体育彩票啦。 
 * 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 
 * 如果牌能组成顺子就输出true，否则就输出false。
 * 为了方便起见,你可以认为大小王是0。
 */
function IsContinuous(numbers) {
    if (numbers.length <= 0) return false;
    // 最大值与最小值的差不会超过 5
    let set = {};
    let max = 0,
        min = 14;
    
    // 1. 遍历数组
    for (let key in numbers) {
        // 2. 剔除 0 之后判断
        if (numbers[key] > 0) {
            // 判断是否有重复值 有的话返回 false
            if (set[numbers[key]]) {
                return false
            } else {
                // 没有重复值
                // 设置 max min
                set[numbers[key]] = true;
                max = Math.max(max, numbers[key]);
                min = Math.min(min, numbers[key]);
            }
        }
    }
    // 最大值与最小值的差不会超过 5
    return max - min < 5
}

console.log(IsContinuous([1, 3, 2, 6, 4]));