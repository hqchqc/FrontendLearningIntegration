/**
* 输入一棵二叉树，判断该二叉树是否是平衡二叉树。

在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
*/

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
    if(!pRoot) return true

    if(Math.abs(getLength(pRoot.left) - getLength(pRoot.right)) > 1){
        return false
    }else{
        return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
    }
}

function getLength(root){
    if(!root) return 0

    return Math.max(getLength(root.left) , getLength(root.right)) + 1;
}