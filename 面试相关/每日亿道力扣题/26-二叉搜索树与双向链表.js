/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
 * 要求不能创建任何新的结点，只能调整树中结点指针的指向。
 */

/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

var treeToDoublyList = function(root) {
    if(!root) return null;
    let head, pre;
    // 中序遍历
    dfs(root);
    // 遍历完成后 修改头尾指针 变为循环双链表
    head.left = pre;
    pre.right = head;
    function dfs(cur){
    if(!cur) return
    // 从左子树开始 左子树都是比根节点小的
    dfs(cur.left);
    // 判断pre是否为null 为null说明cur是头指针 
    if(pre){
        pre.right = cur;
    }else{
        head = cur;
    }
    // 让当前元素的前一个元素为 pre
    cur.left = pre;
    // 把当前元素的值给 pre 为下一次循环做准备
    pre = cur;
    // 遍历右子树
    dfs(cur.right);
}
    // 返回头指针
    return head;
};
