// // ES5中类的定义
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.running = function(){
//     console.log(this.name ,this.age ,'running');
// }
// let p = new Person('zxy',18);
// p.running();

//ES6中类的定义
class Person{
    // 构造方法
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // 定义方法
    running(){
        console.log(this.name,this.age,'running');
    }
}
let p = new Person('zxy',3)
p.running();

// this的隐式绑定
// let func = p.running;
// func()  // 报错的 TypeError: Cannot read property 'name' of undefined

// this的显示绑定
let obj = {
    name: 'hqc',
    age: 19
};

let func = p.running;

// 重新给func赋值
func = func.bind(obj);
func();