---
tags:
  - React学习
categories:
  - React学习
cover: 'https://cdn.jsdelivr.net/gh/hqchqc/CDN/img/background.jpg'
title: 01-邂逅React开发(更新中...)
---

# 01-邂逅React开发

### 前言

特别喜欢coderwhy老师的讲课风格，每接触一个新技术第一节课教学的时候都喜欢用”邂逅“这个词，一开始看它Vue视频的时候还觉得没什么，但是在看它的React视频的时候，发现也是用的邂逅，感慨良多，希望自己能够保持学习的热情，爱上前端工程师这份工作。

### React是什么

- 官网描述：用于构建用户界面的JavaScript库
- 原生HTML、CSS、JS存在的问题
  - 操作DOM兼容性问题
  - 过多兼容性代码的冗余问题
  - 代码组织和规范的问题
- 所以在很长时间以来用的都是jQuery这个库
- 直到angular、react、vue这些框架的出现
- 这里拓展一下这些框架和jQuery库的区别
  - 个人感觉之所以将angular、react、vue叫做框架，将jQuery称为库，一定程度上两者还是有较大的不同，库更倾向于是一种扩展，实在原有的基础上的一种扩展，所以数据和视图是没有分离的，杂糅在一起的
  - 另外数据和视图的杂糅就容易造成代码后期维护不便利，逐渐的就慢慢衍生出将数据与视图相分离的方式，但是相较原生而言，已经是有了较大的不同，所以把它们叫做框架，让数据去驱动视图的变化

### React的起源

- react是2013年由Facebook开源的JavaScript框架

- 它来源于这样一个需求(图片摘自coderwhy公众号)

  ![react起源](https://cdn.jsdelivr.net/gh/hqchqc/CDN/img/react%E8%B5%B7%E6%BA%90.png)

- 当红色的三个数字在发生变化的时候，过多的操作很容易产生bug

  - 传统开发模式中，过多的去操作界面的细节，并且需要掌握大量DOM操作的API，当然我们可以使用jQuery来简化和适配一些API来使用
  - 另外关于数据(状态)往往会分散到各个地方，不方便管理和维护

- 于是就有了以下解决方案

  - 以组件的方式去划分一个个功能模块
  - 组件内以jsx来描述UI的样式，以state来存储组件内的状态
  - 当应用的状态发生改变的时候，通过setState来修改状态，状态发生变化时，UI会自动变化

### React的特点

- 声明式编程(Vue、React、Flutter、SwiftUI)

  - 它允许我们只需要维护自己的状态，当状态改变时，React可以根据最新的状态去渲染我们的UI界面

  ![react的特点](https://cdn.jsdelivr.net/gh/hqchqc/CDN/img/react%E7%9A%84%E7%89%B9%E7%82%B9.png)

- 组件化开发

- 多平台适配

  - 2013年 React发布之初开发Web界面
  - 2015年 Facebook推出ReactNative，用于开发移动端跨平台(Flutter)
  - 2017年 Facebook推出ReactVR，用于开发虚拟现实Web应用程序

- 总之 react的各种特点不管是在现在还是在将来，对各大框架都是由借鉴意义的，比如Vue3的很多新特性，也是借鉴的react，Flutter的很多灵感也是来自React

### Hello React案例

- 需求

  - 在界面上显示一个文本：Hello world
  - 点击下方的一个按钮，点击后文本改变为Hello react

  ![react案例](https://cdn.jsdelivr.net/gh/hqchqc/CDN/img/react%E6%A1%88%E4%BE%8B.png)

- 原生实现

  ```javascript
  <body>
      <h2 class="title"></h2>
      <button class="btn">点击切换</button>
  
      <script>
          // 命令式编程：每做一个操作，都是给计算机(浏览器)一步步命令
          // 声明式编程：React
          // document.getElementsByClassName 返回的是一个数组哦！
  
          // 1. 定义数据
          let message = "Hello World"
  
          // 2. 将数据显示在 h2 元素中
          const titleEl = document.getElementsByClassName("title")[0];
          titleEl.innerHTML = message;
  
          // 3. 点击按钮，界面的数据发生改变
          const btnEl = document.getElementsByClassName('btn')[0];
          
          btnEl.addEventListener('click', e => {
              message = "Hello React";
              titleEl.innerHTML = message;
          })
      </script>
  </body>
  ```

  原生实现在这种情况下还是可以接受的，比较简单，需要注意的是有些原生的DOM操作的方法不能忘记了，这里的 document.getElementsByClassName 返回的是一个数组，要注意。

- React实现

  在使用react实现之前，我们要先了解react在开发时要依赖哪些东西，如果是vue的话，只要引入一个文件即可，但是react不一样，我们需要依赖三个库

  - React：包含react所必须的核心代码
  - Reacr-dom：react渲染在不同平台所需要的核心代码
  - Babel：将jsx转换成react代码的工具

  原因：

  - 在React0.14版本之前是没有react-dom这个概念的，所有功能包含在react里
  - 为什么要进行拆分呢？ react-native 为了适配多平台
  - React包中包含了react和react-native所共同拥有的核心代码
  - React-dom针对web和native所完成的事情不同
    - web端：react-dom会将jsx最终渲染成真实的DOM，显示在浏览器中
    - native端：react-dom会将jsx最终渲染成原生的空间(比如Android中的button,ios中的UIButton)

  关于Babel

  ​	![babel](https://cdn.jsdelivr.net/gh/hqchqc/CDN/img/babel.png)

  - React和Babel的关系：
    - 默认情况下开发react其实是可以不用babel的
    - 但是前提是我们自己使用React.createElement来编写代码，它编写的代码非常的繁琐并且可读性很差
    - 那么我们就可以通过直接编写jsx(JavaScript XML)的语法，并且让Babel帮助我们转换成React.createElement
  - 引入React依赖
    - 直接CDN引入 (可以在引入的script标签中添加```crossorigin```属性，目的是为了能够在控制台中拿到跨域脚本的错误信息)
    - 下载源码后，添加本地依赖
    - 通过npm包管理工具(脚手架)

  第一步： 我们先使用jsx的方式来显示一段文本

  ```javascript
  <body>
      <div>Header</div>
  
      <div id="app">app</div>
  
      <div>footer</div>
      <!-- 添加 React 依赖 Vue只要引入一个文件 -->
      <!-- crossorigin 添加了此属性后 如果引入的脚本有问题会在 console 控制台中体现出来 -->
      <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  
      <!-- 开始开发 -->
      <!-- 注意事项： 使用jsx,并且希望script中的jsx的代码被解析，必须在script标签中添加一个属性 -->
      <script type="text/babel">
          // 源码中有导出这个对象 同时导出了它的其它方法
          // 本质从 React-dom 里的index.js中 导出了 *
          // React-dom -> src -> client -> ReactDOM里 export了一个对象 {}
          //  ReactDOM 就是这个对象 有一个 render函数
          // ReactDOM.render(渲染的内容,挂载的对象)
          // <h2></h2> jsx代码
          let message = "Hello World";
          ReactDOM.render(<h2>{message}</h2>,document.getElementById('app'))
      </script>
  </body>
  ```

  - 注意事项
    - 我们如果想要使用jsx，需要在script标签的type属性中指明为```text/babel```
    - ```ReactDom```是哪里来的呢？
      - 本质上是先到源码中的React-dom文价夹下的index.js中找到这一行 ```export * from './src/client/ReactDOM'``` 
      - 再去ReactDOM中找到这一行```export {render, createPortal .........}```	
      - 这里就有我们的这个render方法了 我们可以再去看一下这个render函数

  第二步：在文本之后添加一个按钮

  ```javascript
  <body>
      <!-- <div>header</div> -->
  
      <div id="app">
          <button>改变文本</button>
      </div>
  
      <!-- <div>footer</div> -->
  
      <!-- 添加 React 依赖 Vue只要引入一个文件 -->
      <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  
      <!-- 开始开发 -->
      <!-- 注意事项： 使用jsx,并且希望script中的jsx的代码被解析，必须在script标签中添加一个属性 -->
      <!-- jsx 特点： 多个标签最外层(根)只能有一个标签 -->
      <script type="text/babel">
          let message = "Hello World";
  
          function btnClick(){
              message = "Hello React";
              console.log(message);
              render();
          }
          // <h2></h2> jsx代码
          function render(){
              ReactDOM.render(
                  <div>
                      <h2>{message}</h2>
                      <button onClick={btnClick}>改变文本</button>
                  </div>,
                  document.getElementById('app')
              )
          }
  
          render();   
      </script>
  </body>
  ```

  - 注意事项
    - 使用jsx就和vue一样，只能有一个根标签
    - 注意一下这里 我们要想让界面发生改变 我们要重新渲染DOM 就是要调用render函数 如果不写 它是不会变的 所以需要封装一下
    - 这样的代码看起来很分散 很凌乱

  第三步：组件化开发

  ```javascript
  <body>
      <div id="app"></div>
  
      <!-- 添加 React 依赖 Vue只要引入一个文件 -->
      <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  
      <!-- 开始开发 -->
      <script type="text/babel">
          class App extends React.Component{
              constructor(){
                  super();
                  this.state = {
                      message: 'hello world'
                  }
              }
  
              render(){
                  return (
                      <div>
                          <h2>{this.state.message}</h2>
                          <button onClick = {this.btnClick.bind(this)}>点击</button>
                      </div>
                  )
              }
              
              btnClick(){
                  this.setState({
                      message: 'Hello React'
                  })
                  console.log(this);
              }
          }
  
          ReactDOM.render(<App/>,document.getElementById("app"))
      </script>
  </body>
  
  ```

  - 注意事项
    - 这里我们是以一种类的方式来实现组件化开发
    - 这里构造函数中的```this.state```的作用是作为一个保存状态的地方，类似小程序，当数据发生变化时，我们可以调用```this.setState```来更新数据，并且通知React进行update操作，如果仅仅是用```this.message```的话界面是不会发生更新的哦！
    - 这里还有一个问题就是this的指向性问题，如果我们这样写```button onClick = {this.btnClick}```，那么在btnClick函数中this是undefined，不难奇怪，这是this的隐式绑定，这里this先指向这个class对象，然后找到这个函数，在函数里又有一个this，那么此时的this就会找是谁调用this,结果找不到返回undefined，所以需要显示的绑定

  