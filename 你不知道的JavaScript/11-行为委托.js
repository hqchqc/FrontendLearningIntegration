// let Task = {
//     setID: function(ID){
//         this.id = ID;
//     },
//     outputID: function(){
//         console.log(this.id);
//     }
// }

// // 让 XYZ 委托 Task
// let XYZ = Object.create(Task);

// XYZ.prepareTask = function(ID,Label){
//     this.setID(ID);
//     this.Label = Label;
// };

// XYZ.outputTaskDetail = function(){
//     this.outputID();
//     console.log(this.Label);
// }

// // ABC = Object.create( Task );

// var FOO = {};
// var a1 = Object.create(FOO);
// console.log(a1);

// Object.defineProperty(FOO,"constructor",{
//     enumerable: false,
//     value: function Gotcha(){}
// })

// console.log(a1);

// function Foo(who){
//     this.me = who;
// }
// Foo.prototype.identify = function(){
//     return "I am " + this.me;
// }
// function Bar(who){
//     Foo.call(this,who);
// }
// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.speak = function(){
//     console.log("Hello, " + this.identify() + '.');
// };
// var b1 = new Bar("b1");
// var b2 = new Bar("b2");
// b1.speak();
// b2.speak();

// let Foo = {
//     init: function(who){
//         this.me = who;
//     },
//     identify: function(){
//         return "I am " + this.me;
//     }
// };
// Bar = Object.create(Foo);
// Bar.speak = function(){
//     console.log("Hello, " + this.identify() + ".");
// };
// var b1 = Object.create(Bar);
// b1.init("b1");
// var b2 = Object.create(Bar);
// b2.init('b2');

// b1.speak();
// b2.speak();

var Foo = {
    bar: function(x){
        if(x < 10){
            return Foo.bar(x * 2);
        }
        console.log(x);
    },
    baz: function baz(x){
        if(x < 10){
            return baz(x * 2);
        }
        return x;
    }
};
Foo.bar(1)