/**
 * 注意：使用寄生式继承方式来为对象添加函数，由于不能达到函数复用，导致效率变低，这与构造函数模式类似。
 * 
 */

// 封装一个函数容器 用来输出对象和承载继承的原型
function content(obj){
    function F(){}
    F.prototype = obj;  // 继承了传入的参数
    return new F()  // 返回函数对象
}

function createAnother(obj){
    var clone = content(obj);
    clone.sayHi = function(){
        console.log('hi');  // 以某种方式增强对象
    }
    return clone
}

var person = {
    name: 'xxx'
}

var now = createAnother(person)
now.sayHi()