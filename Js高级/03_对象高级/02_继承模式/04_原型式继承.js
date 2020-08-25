/**
 * 
 * 重点：用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象。object.create()就是这个原理。

　　　　特点：类似于复制一个对象，用函数来包装。

　　　　缺点：1、所有实例都会继承原型上的属性。

　　　　　　　2、无法实现复用。（新实例属性都是后面添加的）
 */

var Person = {
    name: 'farther',
    colors: ['red','pink']
}

var anotherP = Object.create(Person,{
    name: {
        value: 'children'
    }
})

var anotherQ = Object.create(Person,{
    name: {
        value: 'another'
    }
})

anotherP.colors.push('yellow')
console.log(anotherP.name);
console.log(anotherP.colors);
console.log(anotherQ.name);
console.log(anotherQ.colors);