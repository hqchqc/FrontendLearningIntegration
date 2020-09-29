/**
    输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
    假设压入栈的所有数字均不相等。
    例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
    但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    // 初始化
    let i = 0, j = 0;
    // 创建一个辅助栈来模拟行为
    let stack = [];
    // 如果 i 的值小于入栈的元素个数 说明还没有遍历完
    while(i < pushed.length){
        // 如果两个元素不相等 将此时入栈的那个元素加入到辅助栈中
        if(pushed[i] !== popped[j]){
            stack.push(pushed[i]);
            i++;
        }else{
            // 如果两个元素相等 i j 都 ++
            i++;
            j++;
            // 之后判断辅助栈中的元素个数是否不为空 且 辅助栈栈顶元素是否等于此时popped[j]
            while(stack.length !== 0 && stack[stack.length - 1] === popped[j]){
                stack.pop();
                j++;
            }
        }
    }
    // 这是错的 牛客的测试用例不够多
    // 此时代表已经遍历完入栈元素
    // for(let i = stack.length - 1; i >= 0; i-- ){
    //     if(stack[i] === popped[j]){
    //         j++;
    //     }else{
    //         return false;
    //     }
    // }
    return stack.length === 0 ? true : false;
};