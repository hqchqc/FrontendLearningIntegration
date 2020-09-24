/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */

// 解法一 遍历一遍拿到长度减去k值继续遍历
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// function FindKthToTail(head, k) {
//     let n = 0,
//         current = head;
//     while (head) {
//         n++;
//         head = head.next;
//     }
//     if (n < k) return head
//     n = n - k;
//     while (n) {
//         current = current.next;
//         n--;
//     }
//     return current;
// }

// 解法二 快慢指针
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
    let left = head,
        right = head;
    while (k--) {
        if (right) {
            right = right.next;
        } else {
            return null
        }
    };
    while (right) {
        left = left.next;
        right = right.next;
    }
    return left;
}