/**
 * 习题一
 */

 var x = 10;
 function fn(){
     console.log(x);
 }
 function show(f){
     var x = 20
     f()
 }
 show(fn)

 /**
  * 习题二
  */

  var fn = function(){
      console.log(fn);
  }
  fn()

  var obj = {
      fn2: function(){
          // 首先在这个 函数本身找 没找到
          // 向上一层找 也就是全局作用域中 也找不到
          console.log(fn2);
          // this 指向obj对象 就能找到了
        //   console.log(this.fn2);
      }
  }
  obj.fn2()