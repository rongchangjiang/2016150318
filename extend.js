//1.继承 原型继承 call继承 混合继承 new Parent
function Parent() {
    this.smoke = '抽烟';
}
Parent.prototype.eat = function () {
    console.log('吃');
};
function Child() {
    //Parent.call(this); // child.smoke = '抽烟'
}
/*function create(pro) { //Object.create的原理
    var Fn = function () {};//这个函数是一个空函数
    Fn.prototype = pro;//函数的公有方法指向父亲的共有方法
    return new Fn();//实例只有共有方法
}
Child.prototype = create(Parent.prototype);*/
Object.setPrototypeOf(Child.prototype,Parent.prototype);
/*1.会继承私有属性和公有属性
Child.prototype = new Parent();
  2.call继承 只继承私有
Parent.call(this);
  3.只继承父亲公有的方法
Child.prototype.__proto__ = Parent.prototype;
Child.prototype = Object.create(Pxarent.prototype); es5
Object.setPrototypeOf(Child.prototype,Parent.prototype); es6
extends es6
* */
var child = new Child();
console.log(child.smoke);
child.eat();