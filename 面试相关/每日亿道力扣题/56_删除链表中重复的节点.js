/**
 * 在一个排序的链表中，存在重复的结点，
 * 请删除该链表中重复的结点，重复的结点不保留，
 * 返回链表头指针。
 *  例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead) {
    if (pHead === null || pHead.next === null) return pHead;
    const Head = new ListNode(0);
    Head.next = pHead;
    let cur = Head.next;
    let pre = Head;

    while (cur !== null) {
        if (cur.next !== null && cur.next.val === cur.val) {
            while (cur.next !== null && cur.next.val === cur.val) {
                cur = cur.next;
            }
            pre.next = cur.next;
            cur = cur.next;
        } else {
            pre = pre.next;
            cur = cur.next;
        }
    }

    return Head.next;
}