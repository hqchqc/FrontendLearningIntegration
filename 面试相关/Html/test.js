function myInstance(left,right){
    let proto = Object.getPrototypeOf(left),
        prototypes = right.prototype;
    
    while(true){
        if(!proto) return false;
        if(proto == prototypes) return true;
        proto = Object.getPrototypeOf(proto);
    }
}

function myNew(){
    let newObj = null,
        constructor = Array.prototype.shift.call(arguments),
        result = null;
    
    if(typeof constructor !== 'function'){
        return 'type error'
    }

    newObj = Object.create(constructor.prototype);

    result = constructor.apply(newObj,arguments);

    let flag = result && (typeof result === 'function' || typeof result === 'object');

    return flag ?  result : newObj;
}

function Person(name,age){
    this.name = name;
    this.age = age;

    return{
        name: 'xx',
        age: 10000
    }
}
Person.prototype.fly = function(){
    console.log('i can fly');
}

let stu1 = myNew(Person,'hqc',20)
console.log(stu1.name);