var MinStack = function () {
    this.result = [];
    this.minResult = [];
};

function push(node) {
    this.result.push(node);
    if (node < this.minResult[this.minResult.length - 1]) {
        this.minResult.push(node)
    } else {
        this.minResult.push(this.minResult[this.minResult.length - 1])
    }
}

function pop() {
    this.result.pop();
    this.minResult.pop();
}

function top() {
    return this.result.shift();
}

function min() {
    return this.minResult.top();
}