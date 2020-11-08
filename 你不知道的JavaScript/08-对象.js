var strPrimitive = 'I am a string';
console.log(typeof strPrimitive); // string
console.log(strPrimitive instanceof String); // false

var strObject = new String('I am a string');
console.log(typeof strObject); // object
console.log(strObject instanceof String); // true

console.log(Object.prototype.toString.call(strObject)); // [object String]
console.log(Object.prototype.toString.call(strPrimitive)); // [object String]

var myObject = {
    a: 2
}
console.log(myObject.a);
console.log(myObject['a']);

{
    var myObject = {};
    myObject[true] = 'foo';
    myObject[3] = 'bar';
    myObject[myObject] = 'baz'

    console.log(myObject['true']);
    console.log(myObject['3']);
    console.log(myObject['[object Object]']);
}

{
    var prefix = 'foo';

    var myObject = {
        [prefix + 'bar']: 'hello',
        [prefix + 'baz']: 'world'
    };

    console.log(myObject['foobar']);
    console.log(myObject['foobaz']);
}

let a = Symbol('s');
console.log(a);

{
    var myArray = ['foo', 42, 'bar'];
    myArray.baz = 'baz';
    console.log(myArray, myArray.length);
    myArray['3'] = 'test';
    console.log(myArray, myArray.length);
}

{
    var myObject = {
        a: 2
    }
    myObject.a = 3;
    console.log(myObject.a);

    Object.defineProperty(myObject, 'a', {
        value: 4,
        writable: true,
        configurable: false,
        enumerable: true
    });

    console.log(myObject.a);
    myObject.a = 5;
    console.log(myObject.a);
}

{
    var myObject = {
        a: 2
    };

    Object.preventExtensions(myObject);
    myObject.a = 3;
    console.log(myObject.a); // undefined
}

{
    var myObject = {};
    Object.defineProperty(myObject, 'FAV', {
        value: 42,
        writable: false,
        configurable: false
    })
    myObject.a = 2
    console.log(myObject.FAV, myObject.a);
}

{
    var myObject = {
        a: 2
    };
    Object.seal(myObject);
    Object.freeze(myObject)
    myObject.a = 3
    console.log(myObject.a);
} {
    var myObject = {
        get a() {
            return 2;
        },
    }

    Object.defineProperty(myObject, 'b', {
        enumerable: true,
        get: function () {
            return this.a * 2;
        }
    });

    console.log(myObject.a);
}
console.log('------------------'); {
    var myObject = {
        get a() {
            return this._a_;
        },
        set a(val) {
            this._a_ = val * 2;
        }
    };
    myObject.a = 5;
    console.log();
}

{
    var myObject = {
        a: 2
    }
    console.log('a' in myObject); // true
    console.log(myObject.hasOwnProperty('a'));
}

{
    var myObject = {};
    Object.defineProperty(myObject,"a",{
        enumerable: false,
        value: 3
    })

    console.log(myObject.hasOwnProperty("a"));

    myObject.b = 6;
    for(let key in myObject){
        console.log(key,myObject[key]);
    }
    console.log(Object.keys(myObject),Object.getOwnPropertyNames(myObject));
}

{
    var myArray = [1,2,3];
    var it = myArray[Symbol.iterator]()
    console.log(it);
    console.log(it.next());
}
{
    var myObject = {
        a: 2,
        b: 3
    };
    Object.defineProperty(myObject,Symbol.iterator,{
        enumerable: false,
        writable: false,
        configurable: true,
        value: function(){
            var o = this;
            var idx = 0;
            var ks = Object.keys(o);
            return {
                next: function(){
                    return {
                        value: o[ks[idx++]],
                        done: (idx > ks.length) 
                    }
                }
            }
        }
    });
    var it = myObject[Symbol.iterator]();
    console.log(it.next());
    for(var v of myObject){
        console.log(v);
    }
}

{
    var randoms = {
        [Symbol.iterator]:function(){
            return {
                next: function(){
                    return {value: Math.floor(Math.random() * 100)}
                }
            }
        }
    }
    var randoms_pool = [];
    for(var n of randoms){
        if(randoms_pool.length === 10) break;
    }
    console.log(randoms_pool);
}