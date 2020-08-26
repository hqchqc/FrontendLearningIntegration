function objectFactory(){
    let newObject = {},
        constructor = Array.prototype.shift.call(arguments),
        result = null;
    
    // 参数判断
    if(typeof constructor !== 'function'){
        console.error('type error')
        return
    }

    // 新建一个空对象 对象的原型为构造函数的 prototype 对象
    newObject = Object.create(constructor.prototype);

    // 将 this 指向新建对象 并执行函数
    result = constructor.apply(newObject,arguments);

    // 判断返回对象类型
    let flag = result && (typeof result === 'object' || typeof result === 'function');

    // 判断返回结果
    return flag ? result : newObject;
}
 
// 测试
function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

var person = objectFactory(Otaku, 'Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin

// 使用方法
// objectFactory(构造函数, 初始化参数);