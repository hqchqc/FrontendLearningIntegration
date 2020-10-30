/**
 * 原型链继承
 * 当我们在子类中修改父类种的数据 如果数据是基本数据类型那没问题
 * 如果数据是引用类型的话 父类中的数据就会被修改
 * 你会发现这里父类型的数据是写死的 主要是为了拿到方法
 */
function Supper(){
    this.supProp = 'hello'
}
Supper.prototype.show = function(){
    console.log(this.supProp);
}

function Sub(){
    this.sub = 'children'
}
Sub.prototype.show = function(){
    console.log(this.sub);
}

Sub.prototype = new Supper()
Sub.prototype.constructor = Sub

/**
 * 借用构造函数继承(假继承)
 * 所有的子类都会拷贝一份父类型 占用内存大
 * 主要是为了属性
 * 不能继承父类原型上的方法
 */
function Father(name,age){
    this.name = name;
    this.age = age;
}
function Children(name,age,price){
    Father.call(this,name,age);
    this.price = price;
}
let c = new Children('xx',13,1400);
console.log(c);

/**
 * 组合式继承
 * 解决上面两个痛点
 */
function Father2(name){
    this.name = name
}
Father2.prototype.run = function(){
    console.log(this.name);
}
function Children(name,age){
    Father2.call(this,name);
    this.age = age;
}
Children.prototype.fly = function(){
    console.log('i can fly do you?');
}

Children.prototype = new Father2();
Children.prototype.constructor = Children;

let c2 = new Children('jack',12)
c2.run();

/**
 * 原型式继承
 * 和原型链继承差不多 如果是引用数据类型 则会被修改
 */
let Father3 = {
    name : 'x',
    say : function(){
        console.log('year~');
    },
    data: [1,2,3]
}
function Fn(obj){
    function fn(){};
    fn.prototype = obj;
    return new fn();
}
let obj6 = Object.create(Father3,{
    roll:{
        value:function(){
            console.log('roll~roll');
        }
    }
})
let obj5 = Fn(Father3)
obj5.say();
obj6.roll();

/**
 * 寄生式继承
 * 缺点是不能做到方法的复用 和构造函数模式类似
 */
function content(obj){
    function Fn(){};
    Fn.prototype = obj;
    return new Fn();
}
function createObj(obj){
    let clone = content(obj)
    clone.say = function(){
        console.log('hello hello');
    }
    return clone;
}
let obj = {
    name: 'xxx',
    go: function (){
        console.log('go go go');
    }
}
let obj7 = createObj(obj)
obj7.say()

/**
 * 寄生组合式继承
 * 
 */

 function Person(name){
     this.name = name;
 }
 Person.prototype.say = function(){
     console.log('say nuo');
 }

 function Student(name,grade){
    Person.call(this,name);
    this.grade = grade;
 }

 function content(obj){
    function Fn(){}
    Fn.prototype = obj;
    return new Fn();
 }

 Student.prototype = content(Person.prototype);
 Student.prototype.constructor = Student;


