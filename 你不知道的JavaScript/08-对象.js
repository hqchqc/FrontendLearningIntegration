var strPrimitive = 'I am a string';
console.log(typeof strPrimitive);   // string
console.log(strPrimitive instanceof String);    // false

var strObject = new String('I am a string');
console.log(typeof strObject);  // object
console.log(strObject instanceof String);   // true

console.log(Object.prototype.toString.call(strObject)); // [object String]
console.log(Object.prototype.toString.call(strPrimitive));  // [object String]

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