/** Watcher 观察者, 用于 发射更新的行为 */
class Watcher {
    /**
     * 
     * @param {Object} vm JGVue 实例
     * @param {String|Function} expOrfn 如果是渲染 watcher, 传入的就是渲染函数, 如果是 计算 watcher 传入的就是路径表达式, 暂时只考虑 expOrFn 为函数的情况.
     */
    constructor(vm, expOrfn) {
        this.vm = vm;
        this.getter = expOrfn;

        this.deps = []; // 依赖项
        this.depIds = {}; // 是一个 Set 类型, 用于保证 依赖项的唯一性 ( 简化的代码暂时不实现这一块 )

        // 一开始需要渲染: 真实 vue 中: this.lazy ? undefined : this.get()
        this.get();
    }

    /** 用来进行 计算 或 执行 处理函数 */
    get() {
        this.getter.call(this.vm, this.vm); // 上下文的问题就解决了
    }

    /** 用来判断内部是使用异步运行还是同步运行等 */
    /**
     * 执行, 并判断是懒加载, 还是同步执行, 还是异步执行: 
     * 我们现在只考虑 异步执行 ( 简化的是 同步执行 )
     */
    run() {
        this.get();
        // 在真正的 vue 中是调用 queueWatcher, 来触发 nextTick 进行异步的执行
    }

    /** 公共的外部方法 该方法会触发内部的 run 方法 */
    update() {
        this.run();
    }

    /** 清空依赖队列 */
    cleanupDep() {

    }
}