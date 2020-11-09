/**
 * 第四章 混合对象 '类'
 * 
 * 4.1 类理论
 *     - 类 / 继承 描述了一种代码的阻止结构形式 —— 一种再软件中对真实世界中问题领域得建模方法
 *     - 面向对象编程强调得是数据和操作数据得行为本质上是互相关联的
 *          - 1. 我们往往只关心字符串得方法，而不关心字符串的数据是什么，所以这些方法都被设计成 String 类的方法
 *          - 2. 汽车属于一种交通工具，那么我们就可以在交通工具中把所有交通工具的共性整合起来，让汽车继承自我们的交通工具
 *     - 还有一个多态的概念 —— 父类的通用行为可以被字类用更特殊的行为重写
 *     - 类理论建议父类和子类使用相同的方法名来表示特定的行为，从而让子类重写父类
 *       但是在 JavaScript 中这样做会降低代码的可读性和健壮性
 * 
 *     4.1.1 '类' 设计模式
 *          - 类 是一种设计模式，我们在面向对象类的基础上实现了所有高级的设计模式
 *          - 类 并不是必须的编程基础，而是一种可选的代码抽象
 *          - Java —— 类并不是可选的 万物皆是类
 *          PHP / C / C++ —— 提供过程化和面向类这两种语法，开发者可以选择其中一种风格或是混用
 *     4.1.2 JavaScript中的 '类'
 *          - JavaScript中其实没有 类 的概念 他会有一些问题
 * 4.2 类的机制
 *     4.2.1 建造
 *          - 类 和 实例 的概念来源于房屋建造
 *              - 类就好比是蓝图
 *                实例就是建造好的房屋
 *     4.2.2 构造函数
 *          - 类实例是由一个特殊的类方法构造的，这个方法通常和类名相同 被称为 构造函数
 * 4.3 类的继承
 *     4.3.1 多态
 *            - 多态并不表示字类和父类有关联，字类得到的只是父类的一个副本。类的继承其实就是复制
 *     4.3.2 多重继承
 *            - 钻石问题
 * 4.4 混入
 *     4.4.1 显示混入
 *     4.4.2 隐式混入
 */

// 显示混入

// function mixin(sourceObj, targetObj) {
//     for(var key in sourceObj){
//         // 只会在不存在的情况下复制
//         if(!(key in targetObj)){
//             targetObj[key] = sourceObj[key];
//         }
//     }
//     return targetObj;
// }

// var Vehicle = {
//     engines: 1,

//     ignition: function(){
//         console.log('Turning on my engine');
//     },

//     drive: function(){
//         this.ignition();
//         console.log('Steering and moving forward!');
//     }
// };

// var Car = mixin(Vehicle,{
//     wheels: 4,

//     drive: function(){
//         Vehicle.drive.call(this);   // 显示多态
//         console.log('Rolling on all' + this.wheels + " wheels!");
//     }
// });

// 显示混入模式的一种变体 寄生继承
function Vehicle(){
    this.engines = 1;
}

Vehicle.prototype.ignition = function(){
    console.log('Turning on my engine.');
}

Vehicle.prototype.drive = function(){
    this.ignition();
    console.log("Steering and moving forward");
};

// 寄生类
function Car(){
    // 首先 Car是一个 Vehicle
    var car = new Vehicle();

    // 接着我们对 Car 进行定制
    car.wheels = 4;

    // 保存到Vehicle::drive()的特殊引用
    var vehDrive = car.drive;

    // 重写 Vehicle::drive()
    car.drive = function(){
        vehDrive.call(this);
        console.log('Rolling on all ' + this.wheels + ' wheels');
    }

    return car;
}
var myCar = new Car();
myCar.drive();
// Turning on my engine.
// Steering and moving forward
// Rolling on all 4 wheels

// 隐式混入
var something = {
    cool: function(){
        this.greting = "Hello word",
        this.count  = this.count ? this.count + 1 : 1
    }
}

something.cool();
console.log(something.greting , something.count);   // Hello word 1

var Another = {
    cool: function(){
        // 隐式把 something 混入 Another 
        something.cool.call(this);
    }
};

Another.cool();
console.log(Another.greting, Another.count);    // Hello word 1