class single{
    constructor(name){
        this.name = name;
        this.instance = null
    }

    getName(){
        console.log(this.name);
    }

    getInstance(name){
        if(this.instance){
            return this.instance
        }
        return this.instance = new single(name)
    }
}

let bad = new single('bad')
bad.getInstance('bad')
bad.getInstance('happy')
console.log(bad);