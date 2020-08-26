/**
 * readyState状态说明
 * 0 未初始化   此阶段确认XMLHttpRequest对象是否创建 值为 0 时表示对象已存在 否则浏览器会报错
 * 1 载入       此阶段对XMLHttpRequest对象进行初始化 即调用 open 方法 并调用 send 方法开始向服务端发送请求 值为 1 表示正在向服务端发送请求
 * 2 载入完成   此阶段接收服务器端的响应数据 但获得的还只是服务端响应的原始数据，并不能直接在客户端使用 值为 2 表示已经接受完全部响应数据 并为下一阶段数据解析做好准备
 * 3 交互       此阶段解析接收到的服务器端响应数据。即根据服务器端响应头部返回的MIME类型把数据转换成能通过responseBody、responseText或responseXML属性存取的格式，
 *              为在客户端调用作好准备。状态 3 表示正在解析数据。
 * 4 完成       此阶段确认全部数据都已经解析为客户端可用的格式，解析已经完成。值为4表示数据解析完毕，可以通过XMLHttpRequest对象的相应属性取得数据。
 */
const SERVER_URL = '/server'

let xhr = new XMLHttpRequest();

// 创建 http 请求
xhr.open("GET",SERVER_URL,true)

// 设置状态监听函数
xhr.onreadystatechange = function(){
    if(this.readyState !== 4) return;

    if(this.status === 200){
        handle(this.response);
    }else{
        console.error(this.statusText);
    };
}

// 设置请求失败时的监听函数
xhr.onerror = function(){
    console.log(this.statusText);
}

// 设置请求头信息
xhr.responseType = 'json';
xhr.setRequestHeader("Accept","application/json");

// 发送 http 请求
xhr.send(null);

// promise 封装实现：

function getJSON(url) {
    // 创建一个 promise 对象
    let promise = new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
  
      // 新建一个 http 请求
      xhr.open("GET", url, true);
  
      // 设置状态的监听函数
      xhr.onreadystatechange = function() {
        if (this.readyState !== 4) return;
  
        // 当请求成功或失败时，改变 promise 的状态
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      };
  
      // 设置错误监听函数
      xhr.onerror = function() {
        reject(new Error(this.statusText));
      };
  
      // 设置响应的数据类型
      xhr.responseType = "json";
  
      // 设置请求头信息
      xhr.setRequestHeader("Accept", "application/json");
  
      // 发送 http 请求
      xhr.send(null);
    });
  
    return promise;
  }