/**
 * 1. 每个函数 function 都有一个 prototype , 即显示原型(属性)
 * 2. 每个实例对象都有一个 __proto__, 可称为隐式原型(属性)
 * 3. 对象的隐式原型的值为其对应构造函数的显示原型的值
 * 4. 内存结构
 * 5. 总结：
 *      - 函数的 prototype 属性： 在定义函数时自动添加，默认值是一个空Object对象
 *      - 对象的 __proto__属性： 在创建对象时自动添加，默认值为构造函数的 prototype 属性值
 *      - 程序员能直接操作显示原型，但不能直接操作隐式原型(ES6之前)
 */

 function Fn(){ // 内部语句 this.prototype = {}

 }
//  1. 每个函数 function 都有一个 prototype , 即显示原型(属性)
console.log(Fn.prototype);
// 2. 每个实例对象都有一个 __proto__, 可称为隐式原型(属性)
var fn = new Fn()
console.log(fn.__proto__);  // this.__proto__ = Fn.prototype
// 3. 对象的隐式原型的值为其对应构造函数的显示原型的值
console.log(Fn.prototype === fn.__proto__);

