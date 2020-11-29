/**
 * 面向对象有三大特性： 封装/继承/多态
 * 继承： 1. 减少重复的代码
 *       2. 多态的前提(鸭子类型)
 */
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    running(){
        console.log(this.name,this.age,'running');
    }
}

class Stu extends Person{
    constructor(name,age,sno){
        // 如果是继承的话 super是必须要调用的 否则会报错哦
        // 子类中必须初始化父类对象
        super(name,age);
        this.sno = sno;
    }
}

let stu = new Stu('zxy',3,520);
console.log(stu.name,stu.age,stu.sno);
stu.running();