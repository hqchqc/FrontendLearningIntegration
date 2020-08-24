/**
 * 1. 分类
 *      - 基本(值)类型
 *          - String: 任意字符串
 *          - Number: 任意的数字
 *          - Boolean： true / false
 *          - undefined: undefined
 *          - null: null
 *      - 对象(引用)类型
 *          - Object：任意对象
 *          - Function： 一种特殊的对象(可以执行)
 *          - Array： 一种特殊的对象(数值下标，内部数据是有序的)
 * 2. 判断
 *      - typeof： 
 *          - 可以判断： undefined / 数值 / 布尔值 / function
 *          - 不能判断： null 与 object   object 与 Array 
 *      - instanceof : 判断对象的具体类型
 *      - ===:
 *          - 可以判断： undefined , null
 */

// 1.基本
//  typeof 返回数据类型的字符串表达
    var a;
    console.log(a,typeof a,typeof a === 'undefined',a===undefined);
    console.log(undefined === 'undefined');

    a = 3;
    console.log(typeof a === 'number');
    a = 'dsa'
    console.log(typeof a === 'string');
    a = true
    console.log(typeof a === 'boolean');
    a = null
    console.log(typeof a);  // object
    console.log(a === null);
// 2.对象
    var b1 = {
        b2: [1,'abc',console.log],
        b3: function(){
            console.log('b3');
            return function(){
                return 'hqc'
            }
        }
    }

    console.log(b1 instanceof Object);  // b1 是不是 Object 的实例  Object就是一个构造函数 b1 是实例对象
    console.log(b1.b2 instanceof Array , b1.b2 instanceof Object);
    console.log(b1.b3 instanceof Function , b1.b3 instanceof Object);
    console.log(typeof b1.b3 === 'function'); // true

    console.log(typeof b1.b2[2]);
    b1.b3()()
    console.log(b1.b3()());