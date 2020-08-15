#  JavaScript高级

### 一. 基础总结深入

##### 数据类型

###### 1. 分类

  - 基本(值)数据类型
      - String
      - Number
      - Boolean
      - Null
      - Undefined
      - Symbol
  - 对象(引用)数据类型
    	 - Object
    	 - Function：特殊的对象(可以执行)
    	 - Array：特殊的对象(数值下标，内部数据是有序的)

###### 2. 判断

 - typeof（返回的是对应类型的一个字符串形式）
   	- 可以判断 number boolean string undefined
   	- 不能判断 null 和 object , array 和 object

 - instanceof (返回的是一个布尔值 用来判断 a 是否是 b 的一个实例对象)
   	- 不能判断基本数据类型
   	- 用来判断对象的具体类型
 - ===
   	- 可以判断null undefined

###### 3. 补充

- undefined 与 null 的区别？
  - undefined代表定义了未赋值
  - null定义了 也赋值了 只是值为null
- 什么时候给变量赋值为 null？
  - 初始赋值 表明将要赋值为对象
  - 结束前 让对象成为垃圾对象(被垃圾回收机制回收)
- 严格区别变量类型与数据类型？
  - 数据的类型
    - 基本类型
    - 对象类型i
  - 变量的类型(变量内存值的类型)
    - 基本类型：保存的就是基本类型的数据
    - 引用类型：保存的是地址值

##### 数据 _ 变量 _ 内存

##### 对象

##### 函数

##### 回调函数

##### IIFE

##### 函数中的this

##### 分号问题



