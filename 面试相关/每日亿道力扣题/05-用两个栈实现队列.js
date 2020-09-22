/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 */

let inStack = [],
    outStack = [];

function push(node)
{
    inStack.push(node);
    
}
function pop()
{   
    outStack.push(inStack.shift());
    
    return outStack.pop();
}