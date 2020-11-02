/**
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。
 * 注意，如果一个二叉树同此二叉树的镜像是同样的，
 * 定义其为对称的。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
    return isSame(pRoot,pRoot)
}
function isSame(leftRoot,rightRoot){
    if(!leftRoot && !rightRoot) return true
    if(!leftRoot || !rightRoot) return false

    return leftRoot.val === rightRoot.val &&
           isSame(leftRoot.right,rightRoot.left) &&
           isSame(leftRoot.left,rightRoot.right)
}