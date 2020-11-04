/**
 * 请实现两个函数，分别用来序列化和反序列化二叉树

二叉树的序列化是指：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，
                 从而使得内存中建立起来的二叉树可以持久保存。
                 序列化可以基于先序、中序、后序、层序的二叉树遍历方式来进行修改，
                 序列化的结果是一个字符串，序列化时通过 某种符号表示空节点（#），
                 以 ！ 表示一个结点值的结束（value!）。

二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。

例如，我们可以把一个只有根节点为1的二叉树序列化为"1,"，然后通过自己的函数来解析回这个二叉树
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Serialize(pRoot) {
    const queue = [pRoot];
    let res = [];
    while (queue.length) {
        const node = queue.shift(); // 考察出列的节点
        if (node) { // 是真实节点，带出子节点入列
            res.push(node.val);
            queue.push(node.left); // 不管是不是null节点都入列
            queue.push(node.right);
        } else { // 是null节点
            res.push('X');
        }
    }
    return res.join(',');
}

function Deserialize(s) {
    if (s == 'X') return null;

    const list = s.split(',');

    const root = new TreeNode(list[0]);
    const queue = [root];
    let cursor = 1;

    while (cursor < list.length) {
        const node = queue.shift();

        const leftVal = list[cursor];
        const rightVal = list[cursor + 1];

        if (leftVal != 'X') {
            const leftNode = new TreeNode(leftVal);
            node.left = leftNode;
            queue.push(leftNode);
        }
        if (rightVal != 'X') {
            const rightNode = new TreeNode(rightVal);
            node.right = rightNode;
            queue.push(rightNode);
        }
        cursor += 2;
    }
    return root;
}