Function.prototype.myCall = function(context){
    if(typeof this !== 'function'){
        console.error('type error')
    }

    let args = [...arguments].slice(1),
                result = null;
    
    context = context || window;

    context.fn = this;

    result = context.fn(...args);

    delete context.fn;

    return result
}

Function.prototype.myCall = function(context){
    if(typeof this !== 'function'){
        console.error('type error')
    }

    let args = [...arguments].slice(1),
        result = null;
    
    context = context || window

    context.fn = this

    result = context.fn(...args)

    delete context.fn

    return result
}