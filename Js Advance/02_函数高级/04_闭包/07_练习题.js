/** 
 * 第一题  不存在闭包
 */
var name = 'The Window'
var object = {
    name: 'My Object',
    getNameFunc: function(){
        return function(){
            return this.name;
        }
    }
}
console.log(Object.getNameFunc()());    // The Window

/** 
 * 第二题  有闭包
 */
var name2 = 'The Window'
var object2 = {
    name2: 'Object',
    getNameFunc: function(){
        var that = this;
        return function(){
            return that.name2
        }
    }
}
console.log(Object2.getNameFunc()());    // Object