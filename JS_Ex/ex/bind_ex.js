
//JavaScript 的一大特点是，函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。
function fruits() {}

fruits.prototype = {
  color: "red",
  say: function() {
    console.log("my color is " + this.color);
  }
}

var apple = new fruits;
apple.say();

banana = {
  color: "yellow"
}

apple.say.call(banana)
apple.say.apply(banana)

/**
 *
var func = function(arg1, arg2) {
 
};

func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2])

JavaScript 中，某个函数的参数数量是不固定的，因此要说适用条件的话，当你的参数是明确知道数量时用 call 。
而不确定的时候用 apply，然后把参数 push 进数组传递进去

 */

 console.log("********** bind ********")

 //多次 bind() 是无效的。
 var bar = function() {
   console.log(this.x);
 }

 var foo = {x: 20};
bar()
var func = bar.bind(foo)
func()

var obj = {
  x: 81,
};

/*
var foo = {
  getX: function() {
      return this.x;
  }
}

console.log(foo.getX.bind(obj)());  //81
console.log(foo.getX.call(obj));    //81
console.log(foo.getX.apply(obj));   //81
*/
/**
 * apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
 * apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
 * apply 、 call 、bind 三者都可以利用后续参数传参；
 * bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。
 */