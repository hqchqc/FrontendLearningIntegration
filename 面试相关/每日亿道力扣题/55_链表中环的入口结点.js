// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
    if (!pHead) return null;
    let map = [];

    while (pHead) {
        if (map.indexOf(pHead) !== -1) {
            return pHead
        } else {
            map.push(pHead);
            pHead = pHead.next;
        }
    }
}