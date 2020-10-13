function setName(obj){
    obj.name = 'hqc';
    obj = new Object();
    obj.name = 'xxx';
}

let obj1 = new Object();
setName(obj1)
console.log(obj1.name); // hqc

let reg = /\{\{(.+?)\}\}/g

console.log(typeof reg);