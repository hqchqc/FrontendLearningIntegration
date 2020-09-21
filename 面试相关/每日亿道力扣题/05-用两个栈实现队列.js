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