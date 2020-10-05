/**   响应式处理    */
let ARR_METHOD = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]

let array_methods = Object.create(Array.prototype);
ARR_METHOD.forEach(method => {
    array_methods[method] = function () {
        console.log('调用的是拦截的 ' + method);

        // 将数据进行响应式化
        for (let i = 0; i < arguments.length; i++) {
            observe(arguments[i]);  //这里还有一个问题 到后面解决
        }

        let res = Array.prototype[method].apply(this, arguments);
        return res;
    }
})

// 简化后的版本
function defineReactive(target, key, value, enumerable) {
    // 折中处理后 this 就是 vue实例
    let that = this;
    if (typeof value === 'object' && value !== null) {
        // 是非数组的引用类型
        observe(value,that);
    }
    // 函数内部就是一个局部作用域 这个 value 就只是在函数内使用的变量(闭包)
    Object.defineProperty(target, key, {
        configurable: true,
        enumerable,
        get() {
            console.log(`读取 ${key} 属性`);
            return value
        },
        set(newVal) {
            console.log(`设置 ${key} 属性为：${newVal}`);

            // 目的
            // 将重新赋值的数据变成响应式的 因此如果传入的是对象类型 那么就需要使用 observer 转换为响应式的
            if (typeof newVal === 'object' && newVal != null) {
                observe(newVal,that); 
            }

            value = newVal;
            

            // 模板刷新 (这里现在是假的 只是演示一下)
            // Vue实例 ？？？
            // that.mountComponent();
            typeof that.mountComponent() === 'function' && that.mountComponent();

            // 临时：数组现在没有参与页面的渲染
            // 所以在数组上进行响应式的处理 不需要页面的刷新
            // 那么 即使 这里无法调用也没有关系
        }
    })
}

// // 针对data中数据有好多层如何处理
// function reactify(data, vm) {
//     // 拿到一个data对象的key值 是一个数组
//     let keys = Object.keys(data);
//     // 遍历这个对象
//     for (let i = 0; i < keys.length; i++) {
//         // 如果是一个数组类型
//         if (Array.isArray(data[keys[i]])) {
//             // 对数组的每一项添加响应式
//             let temp = data[keys[i]];

//             temp.__proto__ = array_methods; // 数组就响应式了

//             for (let j = 0; j < temp.length; j++) {
//                 reactify(temp[j], vm);
//             }
//         } else {
//             // 如果是一个引用类型或是基本类型
//             defineReactive.call(vm, data, keys[i], data[keys[i]], true)
//         }

//         // 只需要子啊这里添加代理即可 (问题：在这里写的代码会有递归)
//         // 后面的元素会把前面的代替调
//         // 如果在这里将属性映射到 Vue 实例上 那么久表示 Vue 实例可以使用属性 key
//         /**
//          *  后面如果有相同的属性值 后面就会把前面的覆盖
//          * {
//          *  data: {
//          *      name: 'jack',
//          *      child: {
//          *          name: 'jim'
//          *      }
//          *  }
//          * }
//          * */
//     }
// }

// 取代原来的 reactify 方法 将对象本身转为响应式的
function observe(obj, vm) { // 将这个对象转为响应式的
    // 1. 在这里查看对象的成员 递归 
    // 2. 在这里调用 defineReactive 方法

    // 之前没有对 o 本身进行操作 这一次直接对 o 进行判断
    if (Array.isArray(obj)) {
        // 对其每一个元素进行处理
        obj.__proto__ = array_methods;
        for (let i = 0; i < obj.length; i++) {
            observe(obj[i],this);   // 递归处理每一个数组元素
        }
    } else {
        // 对其成员进行处理
        let key = Object.keys(obj)
        for(let i=0; i<key.length; i++){
            let prop = key[i];
            defineReactive.call(vm,obj,prop,obj[prop],true)
        }
        
    }
}

// 将某一个对象的属性 访问 映射到 某一个属性的成员上
function proxy(target, prop, key) {
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get() {
            return target[prop][key];
        },
        set(newVal) {
            target[prop][key] = newVal;
        }
    })
}

myVue.prototype.initData = function () {
    // 遍历 this._data 的成员 将属性转为响应式(已经写了前一节课)
    // 将 直接属性 代理到实例上
    let keys = Object.keys(this._data);

    // 响应式化
    observe(this._data,this);

    // 代理
    for (let i = 0; i < keys.length; i++) {
        // 将 this._data[ keys[ i ] ] 映射到 this.[ keys[i]]上
        // 就是要让 this 提供 keys[i] 这个属性
        // 在访问这个属性的时候 相当于在访问 this._data 这个属性
        // Object.defineProperty(this,keys[i],{
        //     enumerable: true,
        //     configurable: true,
        //     get(){
        //         return this._data[keys[i]];
        //     },
        //     set(newVal){
        //         this._data[key[i]] = newVal;
        //     }
        // })
        proxy(this, '_data', keys[i]);
    };
}