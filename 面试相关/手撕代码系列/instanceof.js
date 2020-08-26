function myInstanceof(left,right){
    let prototype = right.prototype,
        proto = Object.getPrototypeOf(left)
    while(true){
        if(!proto) return false
        if(prototype === proto) return true

        proto = Object.getPrototypeOf(proto)
    }
}