function myVue(options) {
    this._el = document.querySelector(options.el);
    let elm = document.querySelector(options.el);
    this._data = options.data;
    this._parent = elm.parentNode;
    // 调用 mount 函数 挂载到页面中

    // 对 data 进行响应式
    // reactify(this._data , this); // 将 Vue 实例传入

    this.initData(); // 将 data 进行响应式转换并进行代理

    this.mount();
}