/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归法：从上至下
 */
var mirrorTree = function (root) {
    if (!root) return null
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    mirrorTree(root.left);
    mirrorTree(root.right);
    return root;
};
/**
 * 递归法： 从下至上
 */

function Mirror(root) {
    if (!root) return
    return dfs(root)
}

function dfs(root) {
    if (!root) return
    let left = dfs(root.left);
    let right = dfs(root.right);
    root.left = right;
    root.right = left;
    return root
}