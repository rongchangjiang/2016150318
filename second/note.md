## npm官方源
切换到国内源下载
- nrm切换源
```
npm install nrm -g
```
- 查看所有源
```
nrm ls
```
- 测试源的速度
```
nrm test
```
- 添加珠峰源
```
nrm add zhufeng http://172.18.1.139
```
- 删除源
```
nrm del zhufeng
```
- 查看全局安装目录 
```
npm root -g
```

## 安装本地依赖时
--save  --save-dev


## angular
### ng-app
```
html ng-app="appModule"
```
会产生一个根作用域$rootScope,让angular启动,可以指定模块名,告诉angular以当前模块来启动
### 声明模块
一切从模块开始
```
var app = angular.module("appModule",[]);
```
### ng-model
实现双向数据绑定,放在表单元素上
```
ng-model="name"
```
M->V:将name(作用域上定义的内容)代表的值放到输入框内
V->M:如果修改输入框中的内容，可以改变作用域上name的值

> 如果写的格式是ng-model="person.name",并且person不存在会声明一个对象

### ng-bind
取值和{{}}作用一致,可以解决闪烁单行问题

- 赋值，三元，运算

### ng-cloak
解决多行闪烁问题
```
<style>
    [ng-cloak]{display:none}
</style>
<div ng-cloak></div>
```

### ng-事件 
事件，在angular可以通过ng-事件来执行作用域上的方法，如果需要事件源，需要手动传递$event对象

### ng-controller
会产生一个作用域，作用范围和DOM平齐，可以嵌套控制器，子可以继承父亲。不要操作DOM
```
<div ng-controller="myCtrl"></div>
app.controller('myCtrl',['$scope',function($scope){}])
```

### run方法
写了ng-app会默认调用run方法,一般定义全局共有的变量
```
app.run(['$rootScope',function($rootScope){}]);
```

### ng-repeat
可以遍历数组或对象,遍历谁，写在谁的身上
```
<div ng-repeat="(key,value) in arrs track by key"></div>
$scope.arrs = [{name:1},{name:2}]
```

### filter数组的方法
"删除"过滤,返回是一个新的数组
push,pop,unshift,shift,slice,splice,concat,forEach,join,map,sort,indexof,reverse,lastIndexOf,every,some
```
var newArr = [].filter(function(item,index){
    return true保留这一项/false这项不要了
},this指向);
```

### map数组的方法
"修改"映射,返回是一个新的数组
```
var newArr = [1,2,3,2,2,2].map(function (item,index) {
    return `<li>${item}</li>`;//返回什么内容，就会将这一项变成什么内容
});
console.log(newArr);
``` 