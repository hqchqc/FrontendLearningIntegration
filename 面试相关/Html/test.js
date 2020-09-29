let xhr = new XMLHttpRequest()

const server = '/server'

xhr.open('get', server, true);

xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return

    if (xhr.status === 200) {
        handle(this.responseText)
    } else {
        console.log(this.statusText);
    }
}

xhr.onerror = function () {
    console.log(this.statusText);
}

xhr.setRequestHeader('accept', 'application/json');

xhr.send(null);

function myInstanceof(left, right) {
    let prototype = right.prototype,
        proto = left.__proto__;

    while (true) {
        if (proto === prototype) {
            return true
        }
        if (!proto) return false;

        proto = Object.getPrototypeOf(proto);
    }
}

function myNew() {
    let newObj = {},
        fn = [].shift.apply(arguments),
        result = null;
    if (typeof fn !== 'function') {
        console.log('type error');
        return
    }
    newObj = Object.create(fn.prototype);

    result = fn.apply(newObj, arguments);

    let flag = result && (typeof result === 'function' || typeof result === 'object');

    return flag ? result : newObj;
}

let obj = function () {
    this.name = name;

    return {
        name: 'xxx'
    }
}
myNew(obj, 'xx')

const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise() {
    let self = this;
    self.state = PENDING;
    self.value = null;
    self.resolvedCallback = [];
    self.rejectedCallback = [];

    function resolved(value) {
        if (value instanceof myPromise) {
            return value.then(resolved, rejected)
        }
        setTimeout(() => {
            if (self.state === PENDING) {
                self.state = RESOLVED;
                self.value = value;
                self.resolvedCallback.forEach(callback => {
                    callback(value)
                })
            }
        }, 0)

    }

    function rejected(value) {
        setTimeout(() => {
            if (self.state === PENDING) {
                self.state = REJECTED;
                self.value = value;
                self.rejectedCallback.forEach(callback => {
                    callback(value)
                })
            }
        }, 0)
    }
    try {
        fn(resolved, rejected)
    } catch (e) {
        rejected(e);
    }
}
myPromise.prototype.then = function (onResolved,onRejected) {
    onResolved = typeof onResolved === 'function' ? onResolved : function(value){
        return value
    }
    onRejected = typeof onRejected === 'function' ? onRejected : function(value){
        return value
    }
    if(this.state === PENDING){
        this.resolvedCallback.push(onResolved);
        this.rejectedCallback.push(onRejected);
    }
    if(this.state === RESOLVED){
        onResolved(this.value)
    }
    if(this.state === REJECTED){
        onRejected(this.value)
    }

}
myPromise.all = function (fn) {
    return new Promise((resolve,reject)=>{
        let result = [];
        let len = fn.length;
        if(len === 0) {
            resolve(result);
            return 
        }
        function handle(data,index){
            result[index] = data;
            if(index === len - 1){
                resolve(result)
            }
        }
        for(let i=0; i<len; i++){
            Promise.resolve(fn[i]).then(data=>{
                handle(data,i)
            }).catch(err=>{
                reject(err)
            })
        }
    })
}
myPromise.race = function (fn) {
    return new Promise((resolve,reject)=>{
        let len = fn.length;
        if(len === 0){
            return
        }
        for(let i=0; i<len; i++){
            Promise.resolve(fn[i]).then(data=>{
                resolve(data)
                return
            }).catch(err=>{
                reject(err);
                return
            })
        }
    })
}

myPromise.all = function(fn){
    return new Promise((resolve,reject)=>{
        let len = fn.length;
        let result = [];
        if(len === 0){
            resolve(result);
            return
        }
        function handle(data,index){
            result[index] = data;
            if(index === len-1){
                resolve(result);
            }
        }
        for(let i=0; i<len;i++){
            Promise.resolve(fn[i]).then(data=>{
                handle(data,i)
            }).catch(err=>{
                reject(err)
            })
        }
    })
}

myPromise.race = function(fn){
    return new Promise((resolve,reject)=>{
        let len = fn.length;
        if(len === 0){
            return;
        }
        for(let i=0; i<fn.length; i++){
            Promise.resolve(fn[i]).then(data=>{
                resolve(data);
                return
            }).catch(err=>{
                reject(err)
            })
        }
    })
}