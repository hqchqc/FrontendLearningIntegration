function myGetElementById(node,id){
    if(!node) return null
    
    for(let i=0; i<node.childNodes.length; i++){
        let found = myGetElementById(node.childNodes[i],id);
        if(found) return found
    }

    return null
}