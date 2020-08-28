function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}

const arrayProto = Array.prototype
console.log("11 arrayProto: " + arrayProto);
const arrayMethods = Object.create(arrayProto)
console.log("13 arrayMethods: " + arrayMethods);

const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]

/**
 * 拦截变异方法并发出事件
 */
methodsToPatch.forEach(function (method) {
    // cache original method  缓存原始方法
    const original = arrayProto[method]
    console.log("31 original: " + original);
    
    // 定义一个原型
    def(arrayMethods, method, function mutator(...args) {
        console.log(112);
        const result = original.apply(this, args)
        console.log("result: " + result);
        const ob = this.__ob__
        console.log("38 ob: " + ob);
        
        let inserted
        switch (method) {
            // push、unshift会新增索引，所以要手动observer
            case 'push':
            case 'unshift':
                inserted = args
                break
                // splice方法，如果传入了第三个参数，也会有索引加入，也要手动observer。
            case 'splice':
                inserted = args.slice(2)
                break
        }
        // 获取插入的值，并设置响应式监听
        if (inserted) ob.observeArray(inserted)
        // notify change
        ob.dep.notify()
        console.log("56 result" + result);
        return result
    })
})

let arr = ['11','22','33']
arr.push('44')
console.log(arr);