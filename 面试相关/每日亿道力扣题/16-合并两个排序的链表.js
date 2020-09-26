/**
 * 题目描述
输入两个单调递增的链表，输出两个链表合成后的链表，
当然我们需要合成后的链表满足单调不减规则。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
    let cur = new ListNode(0),
        node = cur;

    while (pHead1 && pHead2) {
        if (pHead1.val <= pHead2.val) {
            node.next = pHead1;
            pHead1 = pHead1.next;
        } else {
            node.next = pHead2;
            pHead2 = pHead2.next;
        }
        node = node.next;
    }

    node.next = pHead1 ? pHead1 : pHead2;

    return cur.next;
}