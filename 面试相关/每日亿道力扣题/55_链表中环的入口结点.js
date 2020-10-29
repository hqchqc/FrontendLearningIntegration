// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
    if (!pHead || !pHead.next || !pHead.next.next) return null
    let slow = pHead.next,
        fast = pHead.next.next
    while (slow != fast) {
        slow = slow.next
        fast = fast.next.next
    }
    let p = pHead,
        q = fast
    while (p != q) {
        p = p.next
        q = q.next
    }
    return p
}