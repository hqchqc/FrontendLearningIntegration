let str = '1 + 2 * (3 + 4)'
str = eval(str)
console.log(str);


var reg = /(?!^)(?=(\d{3})+\.)/g
console.log('1111110.22'.replace(reg,','));
// function format(number) {
//     return number && number.replace(/(?!^)(?=(\d{3})+\.)/g, ",");
//   }
//   console.log(format('1111110.3'));

let obj = new Object();
obj.name = 'hqc'
obj.getName = function(){
    console.log('name');
}

let obj = {
    name: 'xxx',
    run: function(){
        console.log('i can fly');
    }
}

function create(name){
    let obj = {
        name,
        run: function(){
            console.log('i can fly');
        }
    }
    return obj
}
let obj = create('xxx');

function create(name){
    this.name = name;
    this.run = function(){
        console.log('i can fly');
    }
}
let obj = new create('xx');

function obj(name){
    this.name = name;
}
obj.prototype.run = function(){
    console.log('i can fly');
}
let obj = new obj('xxx')

function Parent(){
    this.name = 'xxx'
}
Parent.prototype.run = function(){
    console.log('a');
}
function Children(name,age){
    this.name = name;
    this.age = age;
}

Children.prototype = new Parent();
Children.prototype.constructor = Children

class Parent {
    constructor(name){
        this.name = name;
    }
    run(){
        console.log('run');
    }
}
class children extends Parent{
    constructor(name,age){
        super(name);
        this.age = age;
    }
    run(){
        console.log('run ');
    }
}
let a = new Parent('ss');


function children(name,age){
    Parent.call(this,name);
    this.age = age;
}

function Fn(obj){
    function fn(){};
    fn.prototype = obj;
    return new fn;
}
function create(obj){
    let obj = Fn(obj);
    obj.run = function(){
        console.log('sss');
    }
    return obj
}

function Parent(name){
    this.name = name
}
Parent.prototype.run = function(){
    console.log('c');
}
function content(obj){
    function test(){};
    test.prototype = obj;
    return new test();
}
function Chilren(name,age){
    Parent.call(this,name)
    this.age = age
}
Chilren.prototype.go = function(){
    console.log('s');
}
Chilren.prototype = content(Parent);
Chilren.prototype.constructor = Chilren


