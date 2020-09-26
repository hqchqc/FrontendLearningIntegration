/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    let pre = null,
        next = null,
        cur = pHead;
    while (cur) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}