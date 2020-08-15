/**
 * 1. undefined 与 null 的区别？
 *      undefined 代表定义了未赋值
 *      null定义了 也赋值了 只是值为null
 *
 * 2. 什么时候给变量赋值为 null?
 *      - 初始赋值 表明将要赋值为对象
 *      - 结束前，让对象成为垃圾对象(被垃圾回收机制回收)
 * 
 * 3. 严格区别变量类型与数据类型？
 *    数据的类型
 *      - 基本类型
 *      - 对象类型
 *    变量的类型(变量内存值的类型)
 *      - 基本类型：保存就是基本类型的数据
 *      - 引用类型：保存的是地址值
 */

 var a;
 console.log(a);
 a = null;
 console.log(a);

 var obj = null