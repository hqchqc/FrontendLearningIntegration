/**
 * 1. Symbol 不能和 new 关键词一起作为构造函数使用，但是如果你想让其成为一个包装对象 也是有办法的
 * 2. 如果想要对 Symbol 类型的值进行复用 可以使用 Symbol.for() 使用之后 for 中如果没有参数就会是 Symbol(undefined) 
 *    这个时候如果对两个 Symbol.for() 相同的值进行比较的话 则为 true
 * 3. Symbol.keyFor() 用于查询使用 Symbol.for() 声明过的变量的值 传入的是一个属性 找到它的值
 *      - 如果参数是 Symbol.for() 声明过的 返回对应的值
 *      - 如果参数是 Symbol() 声明过的 返回 undefined
 *      - 如果参数不符合以上两点    报错 xx is not defined
 * 4. 使用 Symbol 作为属性
 *      - 用作属性时 使用 Object.getOwnPropertyNames 和 getOwnPropertySymbols 时互斥的 也就是说 前一个方法不会返回
 *         Symbol 类型的属性
 */

// let mySymbol = new Symbol() 不能作为构造函数使用

// 真的想用
let mySymbol = Symbol('test');
let wrapperSymbol = Object(mySymbol);
console.log(wrapperSymbol);

// 如果需要复用我们的 Symbol
let use1 = Symbol.for();
let use3 = Symbol()
console.log(use1, use3);
use1 = Symbol.for('use')
let use2 = Symbol.for('use')
console.log(use2);
console.log(use1 === use2); //true

// Symbol.keyFor() 查询是否有对应 Symbol.for 创建的值 注意是值哦

let s = Symbol.for('ss');
console.log(Symbol.keyFor(s)); // ss

let s2 = Symbol('s22');
console.log(Symbol.keyFor(s2)); // undefined

// console.log(Symbol.keyFor(s3));  // 报错

{
    let s1 = Symbol('foo'),
        s2 = Symbol('bar');
    let o = {
        [s1]: 'foo val',
        [s2]: 'bar val',
        baz: 'baz val',
        qux: 'qux val'
    };
    console.log(Object.getOwnPropertySymbols(o));
    // [Symbol(foo), Symbol(bar)] 
    console.log(Object.getOwnPropertyNames(o));
    // ["baz", "qux"] 
    console.log(Object.getOwnPropertyDescriptors(o));
    // {baz: {...}, qux: {...}, Symbol(foo): {...}, Symbol(bar): {...}} 
    console.log(Reflect.ownKeys(o));
    // ["baz", "qux", Symbol(foo), Symbol(bar)] 

}