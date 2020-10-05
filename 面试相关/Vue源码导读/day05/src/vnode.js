/** 这里就写一些上边的函数中调用到的我们前面所学的一些方法*/
class vNode {
    constructor(tag, data, value, type) {
        // tag 表示属性的名称 比如 div ul li...
        this.tag = tag && tag.toLowerCase();
        // data 表示的是具有的属性 比如说class...
        this.data = data;
        // value 只有在元素为文本节点时才有效 指的是对应的值 如果是文本节点则上面的两个属性为 undefined
        this.value = value;
        // type 表示类型 这里只有两种类型 文本节点和元素节点
        this.type = type;
        // children 表示该节点下面的子节点
        this.children = [];
    }
    appendChild(vNode) {
        this.children.push(vNode)
    }
}