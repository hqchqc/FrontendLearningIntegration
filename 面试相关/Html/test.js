var name = 'xxx'
var obj = {
    name: 'hqc',
    say:()=>{
        console.log(this.name);
    }
}

var f = obj.say;
f()
console.log(this);