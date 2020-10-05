/** mount 函数作为一个入口用来调用其他的函数 */
myVue.prototype.mount = function () {
    // 需要提供一个 render 方法 用来生成虚拟 DOM
    // 这么写是为了 有一个缓存抽象语法树(虚拟 dom)的函数
    // 为什么不把 render 写在原型上是因为 Vue 中是可以自定义这个render函数的
    // 源码中是下面这样 做了一个判断 可以看另一个文件
    // if(typeof this.render !== 'function'){
    //     this.render = this.createRender()
    // }
    this.render = this.createRender()
    // 为了靠近源码 这么写 调用mountComponent函数
    this.mountComponent();
}

/** mountComponent 用于在这里面执行 update 等函数*/
myVue.prototype.mountComponent = function () {
    let mount = () => {
        this.update(this.render());
    }
    mount.call(this); // 本质应该交给 watcher 来调用 但是还没有讲到
}

/** 生成的render函数 目的是用来缓存抽象语法树的函数 */
myVue.prototype.createRender = function () {
    // 先生成 ast 这里我们使用 vNode 来代表它
    let ast = getVNode(this._el);
    // Vue: 将 AST + data => VNode
    // 这里： 将 带坑的 VNode + data => 含有数据的VNode
    return function render() {
        // 在用数据去填坑
        let temp = combine(ast, this._data);
        return temp;
    }
}

/** update函数用来将虚拟dom渲染到页面中 diff算法 就在这里面实现 */
myVue.prototype.update = function (callback) {
    // 简化 直接生成 HTML DOM replaceChild 到页面中
    let combineAfter = callback;
    let realNode = parseVNode(combineAfter);
    this._parent.replaceChild(realNode, document.querySelector('#root'));
}