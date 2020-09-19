/**
 * 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
 */
var reverseList = function(head) {
    let list = head,
        p = list,
        q = null;
   if(list == null) return head
    
   while(p.next !== null){
       q = p.next;
       p.next = q.next;
       q.next = list;
       list = q;
   }

    return list;
};