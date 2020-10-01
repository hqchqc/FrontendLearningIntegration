/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则返回true,否则返回false。
 * 假设输入的数组的任意两个数字都互不相同。
 */
/*
*  二叉搜索树定义： 左子树中所有节点的值 << 根节点的值；右子树中所有节点的值 >> 根节点的值；其左、右子树也分别为二叉搜索树。
*/

function VerifySquenceOfBST(sequence)
{
   if(sequence.length <= 0) return false
   return dfs(sequence,0,sequence.length-1);
}

function dfs(array,start,end){
    // 如果 start 都到了 end 的位置 说明只有一个元素 返回 true
    if(start >= end) return true;
    // 定义一个 p 变量
    let p = start;
    // 找到第一个大于最后一个元素 也就是根元素的变量
    while(array[p] < array[end]){
        p++;
    }
    // 把这个临界值转给 m 变量 
    // 要注意 p 指的是下标 而 array[p]始终会比你想的多一个
    let m = p;
    // 继续让符合条件的 p ++ 
    // 相当于看右子树是否满足条件
    while(array[p] > array[end]){
        p++;
    }
    // 要注意这里的 m-1 和 end-1
    // m-1 才是左子树 因为上面说明了 m 始终会比想的多一
    // end - 1是因为已经判断过的根元素就不用继续放到下一次判断了
    return p === end && dfs(array,start,m-1) && dfs(array,m,end-1)
}