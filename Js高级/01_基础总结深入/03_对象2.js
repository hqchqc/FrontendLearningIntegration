/**
 *  1. 什么时候必须使用['属性名']的方式？
 *      - 属性名包含特殊字符 - 空格
 *      - 属性名不确定
*/

var p = {}
// 给 p对象添加一个属性： content type: text/json
p['content-type'] = 'text/json'
console.log(p['content-type']);

// 变量名不确定
var propName = 'myAge'
var value = 18

// p.propName = value
p[propName] = value
console.log(p[propName]);
