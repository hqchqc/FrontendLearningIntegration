var person = new Object();

person.name = 'hqc';
person.age = 18;
person.height = 1.81;

person.sayHello = function () {
    console.log('hello my name is ' + this.name);
}

person.sayHello();