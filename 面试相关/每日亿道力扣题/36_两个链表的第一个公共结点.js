/**
 * 输入两个链表，找出它们的第一个公共结点。
 * （注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，
 * 保证传入数据是正确的）
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
    let qc = pHead1;
    let yq = pHead2;

    while (qc !== yq) {
        qc = qc !== null ? qc.next : pHead2;
        yq = yq !== null ? yq.next : pHead1;
    }

    return qc
}