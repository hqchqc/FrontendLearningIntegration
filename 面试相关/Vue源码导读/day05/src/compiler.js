// Vue 源码中使用的是栈结构 , 使用栈存储 父元素 来实现递归生成；
function getVNode(node) {
    // 首先拿到元素的节点类型
    let nodeType = node.nodeType;
    // 创建一个变量用来表示一个虚拟dom
    let _vNode = null;
    // 判断节点类型
    if (nodeType === 1) {
        // 为 1 代表是元素节点
        let nodeName = node.nodeName;
        // 返回的是 伪数组包含所有属性 得包装成一个对象
        let attrs = node.attributes;
        let _attrObj = {};
        for (let i = 0; i < attrs.length; i++) {
            _attrObj[attrs[i].nodeName] = attrs[i].nodeValue;
        }
        _vNode = new vNode(nodeName, _attrObj, undefined, nodeType);
        // 判断有没有子节点 有的话加到 children 中
        let nodeChild = node.childNodes;
        // 遍历子节点
        for (let i = 0; i < nodeChild.length; i++) {
            _vNode.appendChild(getVNode(nodeChild[i]));
        }
    } else if (nodeType === 3) {
        _vNode = new vNode(undefined, undefined, node.nodeValue, nodeType);
    }
    return _vNode;
}

function parseVNode(vNode) {
    // 拿到虚拟 DOM 的节点类型
    let nodeType = vNode.type;
    // 创建的真实 DOM
    let realNode = null;
    // 判断类型
    if (nodeType === 1) {
        // 元素节点 
        // 根据 vNode 的 tag 值建立几点
        realNode = document.createElement(vNode.tag);
        let data = vNode.data;
        // 遍历 data 给节点添加属性  foreach如果循环的是空数组 它不会执行
        // for(let key in data){
        //     realNode.setAttribute(key,data[key])
        // }
        Object.keys(data).forEach(value => {
            realNode.setAttribute(value, data[value])
        })
        // 子元素
        let childNode = vNode.children;
        // for(let i=0; i<childNode.length; i++){
        //     realNode.appendChild(parseVNode(childNode[i]));
        // }
        // item 是一个虚拟 dom
        childNode.forEach(item => {
            realNode.appendChild(parseVNode(item))
        })
    } else if (nodeType === 3) {
        realNode = document.createTextNode(vNode.value);
    }
    return realNode
}

// 使用字符串路径来访问对象的成员
function getValueByPath(obj, path) {
    // 得到的是数组 [xxx,yyy,zzz]
    let paths = path.split('.');
    let res = obj;
    let prop;
    // 这里使用的是 while 循环 很巧妙的一种方式
    // 通过每次来弹出首个数组中的元素来控制循环次数
    while (prop = paths.shift()) {
        res = res[prop];
    }
    return res
}

/** 将数据和模板进行匹配 模拟 AST -> VNode*/
function combine(ast, data) {
    const reg = /\{\{(.+?)\}\}/g
    let _type = ast.type;
    let _tag = ast.tag;
    let _data = ast.data;
    let _value = ast.value;
    let _children = ast.children;

    let VNode = null;

    if (_type === 1) {
        VNode = new vNode(_tag, _data, _value, _type);
        _children.forEach(item => {
            VNode.appendChild(combine(item, data));
        })
    } else if (_type === 3) {
        _value = _value.replace(reg, (_, g) => {
            return getValueByPath(data, g.trim());
        })

        VNode = new vNode(_tag, _data, _value, _type);
    }

    return VNode;
}