function fibonacci(n){
    return n<=2 ? 1 : fibonacci(n-1) + fibonacci(n-2)
}

var onmessage = function(event){
    var number = event.data
    var result = fibonacci(number);
    postMessage(result)
    // alert(result) alert是window的方法 这里的this不是window也就不能调用
}