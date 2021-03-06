/**
 * 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
 * 例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，
 * 那么一共存在6个滑动窗口，
 * 他们的最大值分别为{4,4,6,6,6,5}；
 *  针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： 
 * {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}，
 *  {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。
 *   窗口大于数组长度的时候，返回空
 */

function maxInWindows(num, size) {
    if(num.length === 0 || size === 0 || num.length < size) return [];

    let res = [],
        len = num.length;
    //如果数组的大小是n，窗口的大小是size，那么窗口的数量就是 n - size + 1.
    for(let i = 0; i < len - size + 1; i++){
        let max = num[i];
        for(let j = i; j < i + size; j++){
            max = Math.max(max,num[j]); 
        }
        res.push(max);
    }
    return res
}
maxInWindows([2,3,4,2,6,2,5,1],3)