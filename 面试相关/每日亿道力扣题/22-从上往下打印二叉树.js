/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length) {
        let temp = queue.shift();
        if (temp.left) {
            queue.push(temp.left);
        }
        if (temp.right) {
            queue.push(temp.right);
        }
        result.push(temp.val);
    }
    return result
}