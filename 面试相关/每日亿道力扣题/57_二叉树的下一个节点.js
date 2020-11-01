/**
 * 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
 * 注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
 */

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode) {
    if (!pNode) return null;
    // 当前结点右孩子结点，那么下一节点就是：右孩子结点的最左孩子结点,如果右孩子结点没有左孩子就是自己
    if (pNode.right) {
        pNode = pNode.right;
        while (pNode.left) {
            pNode = pNode.left
        }
        return pNode
    }
    // 当前结点为父亲结点的左孩子结点
    while (pNode.next) {
        let pRoot = pNode.next;
        if (pNode === pRoot.left) {
            return pRoot;
        }
        pNode = pNode.next
    }
    // 最尾节点
    return null;
}