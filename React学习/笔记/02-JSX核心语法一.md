---
tags:
  - React学习
categories:
  - React学习
cover: 'https://cdn.jsdelivr.net/gh/hqchqc/CDN/img/background.jpg'
title: 01-邂逅React开发(更新中...)
---

# 02-JSX核心语法一

## 前言

本节课以两个案例展开，主要还是对React有一个具体的认识，具体讲解JSX的一些知识点，并且在讲这些知识点的同时有对ES6中类的定义、类的继承以及高阶函数的使用做了补充。文章的相关代码放在GitHub仓库，有需要的小伙伴看这里( https://github.com/hqchqc/FrontendLearningIntegration/tree/master/React%E5%AD%A6%E4%B9%A0 )，多多 star 哦！ 另外博客也会同步更新的，感兴趣的小伙伴可以多多留言哦! ( https://www.bagbean.cn/ )

## 语法补充

### 类的定义

- 在ES5中定义类

  - ES5中我们是使用函数的方式来定义一个类的，并且把类的方法定义在原型上，这样就不会每次创建一个对象都要重新生成类中的方法，占用空间
  - 但其实读了小黄书(你不知道的JacaScript)之后，会认识到JS中本就没有类的概念，因为本质上来说，父类与子类的联系在面向对象中是有一种复制的关系，但是JS中并不是采用复制的方式，而是采用了原型将父类和子类联系起来，并没有复制，所以我们把JavaScript中的类称为一种“鸭子类型”(看起来像鸭子，走起路来像鸭子，那么就是鸭子)

  ```javascript
  // ES5中类的定义
  function Person(name,age){
      this.name = name;
      this.age = age;
  }
  Person.prototype.running = function(){
      console.log(this.name ,this.age ,'running');
  }
  let p = new Person('zxy',18);
  p.running();
  ```

- 在ES6中定义类

  - 在ES6中JavaScript引入了class关键字，用于定义一个类

  ```javascript
  //ES6中类的定义
  class Person{
      // 构造方法
      constructor(name,age){
          this.name = name;
          this.age = age;
      }
      // 定义方法
      running(){
          console.log(this.name,this.age,'running');
      }
  }
  let p = new Person('zxy',3)
  p.running();
  ```

- this的指向问题

  - 默认绑定(独立函数调用)：可以把这条规则看作是无法应用其它规则时的默认规则，this指向全局对象，但是在严格模式下，指向undefined
  - 隐式绑定(作为对象中的方法)：这条规则要看调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含，隐式绑定规则会把函数调用中的this绑定到这个上下文对象
  - 显示绑定(call、apply、bind)：它会把你指定的参数设置为this的上下文并调用原始函数
  - new绑定(new操作符)：我们会构造一个新对象并把this绑定到new操作符创造的那个对象上
  - 优先级：new绑定 > 显示绑定 > 隐式绑定 > 默认绑定

### 类的继承

- 这里我们讲的是ES6中的继承方式，面向对象有三大特性：封装、继承和多态

- 继承的优点：

  - 减少重复代码
  - 多态的前提(但是JavaScript是弱类型语言，所以多态是鸭子类型)
  - ES6中的继承其实是ES5中继承的语法糖，采用的是寄生式组合继承
  - 要注意，如果一个类继承自另一个类，那么在这个类的构造器中必须调用super()，用来调用一次父类的构造函数，也就是说子类必须初始化父类对象

  ```javascript
  class Person{
      constructor(name,age){
          this.name = name;
          this.age = age;
      }
      running(){
          console.log(this.name,this.age,'running');
      }
  }
  
  class Stu extends Person{
      constructor(name,age,sno){
          // 如果是继承的话 super是必须要调用的 否则会报错哦
          // 子类中必须初始化父类对象
          super(name,age);
          this.sno = sno;
      }
  }
  
  let stu = new Stu('zxy',3,520);
  console.log(stu.name,stu.age,stu.sno);
  stu.running();
  ```

### 高阶函数map

- 这个函数在之后遍历的时候会经常用到，所以讲了一下
- 首先要明白map它是对原来数组的一个映射，那么自然它是会返回一个新的数组
- map不会对空的数组进行检测，若数组为空，返回的也是一个空数组，这里和forEach有一点不同，forEach会对数组进行检测，如果数组为空，就不执行回调函数

```javascript
let names = ['zxy','hqc','cmm','zt'];
/**
 * map里的回调函数有三个参数
 *  第一个参数： 遍历到的那个数据项
 *  第二个参数： 下标值
 *  第三个参数： 数组本身
 * map会返回一个新的数组 是原本数组的一个映射
 */
let newNames = names.map((item,index,array) => {
    return item + '000'
})
console.log(newNames);	// [ 'zxy000', 'hqc000', 'cmm000', 'zt000' ]
```

## 案例练习

### 案例一 电影列表

- 在实际开发过程中，数据是通过发出网络请求来获取的，再渲染到页面上，这里我们先将发出网络请求的这一步骤省略，在state中定义一个数组，用来存放需要渲染的电影列表
- 这里我们有两种方式来进行渲染
  - for-of的方式
  - map的方式
- 本质上都是采用循环，将其拼接成```<li>{电影名称}</li>```这种形式，即可渲染到页面上，要注意不是字符串的拼接哦，而是直接将两者混在一起的方式，后面会讲到这是JSX的语法

```javascript
<body>
  <div id="app"></div>
  <!-- 引入依赖 -->
  <script src="../react/react.development.js"></script>
  <script src="../react/react-dom.development.js"></script>
  <script src="../react/babel.min.js"></script>

  <script type="text/babel">
    class App extends React.Component{
      constructor(){
        super();
        this.state = {
          message: '电影列表',
          movies: ["大话西游","星际穿越","盗梦空间","小谢尔顿"]
        }
      }

      render(){
        const newMovie = [];
        for(let movie of this.state.movies){
          newMovie.push(<li>{movie}</li>)
        }

        return(
          <div>
            <h2>{this.state.message}1</h2>
            <ul>
              {newMovie}
            </ul>

            <h2>{this.state.message}2</h2>
              <ul>
                {
                  this.state.movies.map((item) => {
                    return <li>{item}</li>
                  })
                }
              </ul>
          </div>
        )
      }
    }

    ReactDOM.render(<App/>,document.getElementById('app'))
  </script>
</body>
```

### 案例二 计数器

- 这个案例我们在学Vue的时候也写过，比较简单，这里只要注意在react中调用函数时的this指向问题即可

```javascript
<body>
  <div id="app"></div>

  <script src="../react//react.development.js"></script>
  <script src="../react//react-dom.development.js"></script>
  <script src="../react/babel.min.js"></script>

  <script type="text/babel">
    class App extends React.Component{
      constructor(){
        super();
        this.state = {
          counter: 0
        }
      }

      render(){
        return(
          <div>
            <h2>计数器{this.state.counter}</h2>
            <button onClick={this.increment.bind(this)}>+1</button>
            <button onClick={this.decrement.bind(this)}>-1</button>
          </div>
        )
      }

      increment(){
        this.setState({
          counter: ++this.state.counter
        })
      }

      decrement(){
        this.setState({
          counter: --this.state.counter
        })
      }
    }

    ReactDOM.render(<App/>,document.getElementById('app'))
  </script>
</body>
```

### 小结

上面两个案例主要是对上一节内容的一个回顾，让你熟悉在React中的开发方式，注意一些细节问题，比如列表的渲染、this的指向，这两个案例做下来，个人感觉react比vue更加灵活，对JavaScript的要求也更高，并没有像vue中存在```v-for、v-if```这样的指令，而是通过JSX这种方式再借助循环来实现的，非常灵活。

## 认识JSX

- 首先来看一段代码

```javascript
const element = <h2>Hello React</h2>
ReactDOM.render(element,document.getElementById('app'))
```

- 相信做了上面两个案例后，对这段代码并不陌生，那么这段element变量申明右侧赋值的标签语法是什么呢？
  - 它不是一段字符串(因为没有使用引号包裹)，它看起来像是一段HTML原生代码，但是我们能在Js中直接给一个变量赋值HTML吗？
  - 其实是不可以的，如果我们将```type = " text/babel " ```去掉就会出现语法错误的情况出现
  - 那么它到底是什么呢？ 没错，这就是 **JSX** 语法
- JSX是什么？
  - JSX是一种JavaScript的语法扩展(eXtension),也在很多地方称之为JavaScript XML，因为看起来就是一段 XML 语法
  - 它用于描述我们的 UI 界面，并且完全可以和 JavaScript 融合在一起
  - 它不同于 Vue 中的模板语法，你不需要专门学习模板语法中的一些指令(v-for、v-if、v-else)
  - 其实 Vue 也是支持 JSX 的，只是很多人不愿意写罢了

## 为什么React选择JSX

- React认为渲染逻辑本质上与其它 UI 逻辑存在内在耦合
  - 比如 UI 需要绑定事件( button 、a 等等)
  - 比如 UI 中需要展示数据状态，再某些状态发生改变时，又需要改变 UI
- 它们之间是密不可分的，所以 React 没有将标记分离到不同的文件中，而是把他们组合到了一起，这个地方就是组件(Component)
- JSX 是嵌入到JavaScript中的一种结构语法
- JSX 的书写规范(部分)
  - JSX 的顶层只能有一个根元素，所以我们很多时候会在外层包裹一个 div 原生(或者使用后面我们学习的 Fragment);
  - 为了方便阅读，我们通常在 JSX 的外层包裹一个小括号，这样可以方便阅读，并且 JSX 可以换行书写(render 函数中return 后面)
  - JSX 中的标签可以是单标签，也可以是双标签
    - 如果是但标签，必须以 ``` /> ``` 结尾

## JSX的使用

### JSX 中的注释

- 注释有两种形式，但是都要在大括号中{}

```javascript
class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        // 我是注释
        {/* 我是真的注释 */}
        {
          //我也是注释
        }
     </div>
	)
  }
}
```

### JSX 嵌入变量

- 情况一：当变量是 Number、String、Array类型时，可以直接显示
- 情况二：当变量是 Null、Undefined、Boolean类型时，内容为空
  - 如果希望可以显示 null、undefined、boolean，那么需要转成字符串
  - 转换的方式有很多，比如 toString 方法 和 空字符串拼接， String(变量)等方式
- 情况三：对象类型不能作为子元素(会报错)

```javascript
class App extends React.Component {
  constructor() {
    super();
      this.state = {
        // 1. 在{}可以正常显示的内容
        name: 'why',
        age: 18,
        fav: ['run','swim','football'],
          
        // 2. 在{}中不能显示(忽略)
        test1: null,
        test2: undefined,
        test3: true,

         // 3. 对象不能作为jsx的子类
         item: {
           name: 'zxy',
           age:18,
           like: 'eat'
          }
      }
 }

 render() {
   return ( 
     <div>
       <h2>{this.state.name}</h2>
       <h2>{this.state.age}</h2>
       <h2>{this.state.fav}</h2>
       <h2>--------------本身不显示-------------</h2>
       <h2>---------但是可以转换成String类型显示-------------</h2>
       <h2>{this.state.test1 + ''}</h2>
       <h2>{String(this.state.test2)}</h2>
       <h2>{this.state.test3.toString()}</h2>
	   <h2>--------------对象类型的数据不显示会报错-------------</h2>
       {/*<h2>{this.state.item}</h2>*/}
	</div>
   )
  }
}
```



### JSX 嵌入表达式

- 运算符表达式
- 三元表达式
- 函数调用

```javascript
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName: 'bag',
            lastName: 'bean',
            flag: true
        }
    }

    render(){
      // 对象的解构
      const {firstName,lastName} = this.state;
      return (
        <div>
            {/* 1. 插入运算符表达式 */}
            <h2>{firstName + lastName}</h2>

            {/* 2. 插入三元表达式*/}
            <h2>{this.state.flag ? this.state.firstName : this.state.lastName}</h2>

            {/* 3. 插入函数表达式*/}
            <h2>{this.callMe()}</h2>
        </div>
      )
	}

    callMe(){
        return this.state.firstName + ' ' + this.state.lastName;
    }
}
```



