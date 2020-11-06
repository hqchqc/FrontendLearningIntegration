/**给定一棵二叉搜索树，请找出其中的第k小的结点。 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k) {
    if (k == 0) return null;
    let res = [];
    kthSort(pRoot, res);
    return res[k - 1]
}

function kthSort(pRoot, res) {
    if (!pRoot) return
    if (pRoot.left) kthSort(pRoot.left, res);
    res.push(pRoot);
    if (pRoot.right) kthSort(pRoot.right, res);
}