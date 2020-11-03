/**
 * 请实现一个函数按照之字形打印二叉树，
 * 即第一行按照从左到右的顺序打印，
 * 第二层按照从右至左的顺序打印，
 * 第三行按照从左到右的顺序打印，
 * 其他行以此类推。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
    const lists = [];

    if (!pRoot) {
        return lists
    }

    const stack1 = [];
    const stack2 = [];

    stack2.push(pRoot);

    let flag = true;

    while (stack1.length !== 0 || stack2.length !== 0) {
        const list = [];
        // 奇数层
        if (flag) {
            while (stack2.length !== 0) {
                const tmp = stack2.pop();
                list.push(tmp.val);
                if (tmp.left !== null) {
                    stack1.push(tmp.left);
                }
                if (tmp.right !== null) {
                    stack1.push(tmp.right);
                }
            }
        } else { // 偶数层
            while (stack1.length !== 0) {
                const tmp = stack1.pop();
                list.push(tmp.val);
                if (tmp.right !== null) {
                    stack2.push(tmp.right);
                }
                if (tmp.left !== null) {
                    stack2.push(tmp.left);
                }
            }
        }
        flag = !flag;
        lists.push(list);
    }
    return lists;
}