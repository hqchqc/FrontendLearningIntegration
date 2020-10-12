/**
 * with 语句的作用是将代码作用域设置为特定的对象
 * 使用 with 语句的主要场景是针对一个对象反复操作，这时候将代码作用域设置为为该对象能提供便利
 */

 // search 属性是一个可读可写的字符串，可设置或返回当前 URL 的查询部分（问号 ? 之后的部分）
 let qs = location.search.substring(1);
 let host = location.hostname;
 let url = location.href;

 // 使用 with
 /**
  * 这里，with 语句用于连接 location 对象。这意味着在这个语句内部，每个变量首先会被认为是
    一个局部变量。如果没有找到该局部变量，则会搜索 location 对象，看它是否有一个同名的属性。如
    果有，则该变量会被求值为 location 对象的属性。
    严格模式不允许使用 with 语句，否则会抛出错误。

  */
 with(location){
     let qs = search.substring(1);
     let host = hostname;
     url = href;
 }