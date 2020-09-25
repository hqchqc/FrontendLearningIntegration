function curry(fn, ...args) {
    return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}

function curry(fn, args) {
    let length = fn.length;
    args = args || [];

    return function () {
        let newArg = args.slice(0);
        for (let i = 0; i < arguments.length; i++) {
            newArg.push(arguments[i]);
        }
        if (newArg.length < length) {
            return curry.call(this, fn, newArg);
        } else {
            return fn.apply(this, newArg);
        }
    }
}