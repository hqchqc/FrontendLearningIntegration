// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
    while(pHead){
        pHead = pHead.next;
        if(pHead === pHead.next){
            return pHead
        }else{
            return null;
        }
    }
}