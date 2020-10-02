/**
 * 题目描述
输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。
路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
    // 定义变量 用于存储总的路径 单条路径
    let res = [];
    let path = [];
    if (!root) return res;
    dfs(root, expectNumber, path, res);
    return res;
}

function dfs(root, expectNumber, path, res) {
    // 首先将当前节点加入到path中
    path.push(root.val);
    // 若到了叶子节点说明遍历完了且等于expectNumber 记录下这条路径
    if (!root.left && !root.right && expectNumber == root.val) {
        // 这里存放的是 path 的深拷贝 否则 path 会随着元素的变化而变化
        res.push([...path]);
    }
    // 前序遍历 
    if (root.left) {
        dfs(root.left, expectNumber - root.val, path, res);
    }
    if (root.right) {
        dfs(root.right, expectNumber - root.val, path, res);
    }
    // 到这说明还是没有满足要求 则回溯
    path.pop();
}