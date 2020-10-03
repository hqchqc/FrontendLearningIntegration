/***
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点），
 * 请对此链表进行深拷贝，并返回拷贝后的头结点。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead) {
    if (!pHead) return pHead;

    // 1.把链表 1 -> 2 -> 3 变为 1 -> 1 -> 2 -> 2 -> 3 -> 3
    for (let node = null, p = pHead; p !== null; p = p.next.next) {
        node = new RandomListNode(p.label);
        node.next = p.next;
        p.next = node;
    }
    // 2.把 random 加上
    for (let p = pHead; p !== null; p = p.next.next) {
        if (p.random) {
            // 这里是 p.random.next 原因是因为要把指针指向上一步多出来的那个节点上
            p.next.random = p.random.next;
        }
    }
    // 3.把链表断开
    let newHead = pHead.next;
    for (let p = pHead; p !== null && p.next !== null;) {
        let temp = p.next;
        p.next = temp.next;
        p = temp;
    }

    return newHead;
}