# JavaScript ES6
## 对象
```javascript
//1. 创建类class  创建一个 类
class Xxx{
    //CLASS BODY
    //构造函数设置属性
    constructor(uname，age){
        this.uname = uname;
        this.age = age;
    }
    //共有方法
    method(){
        console.log("method");
    }

    //类里面所有函数不需要写function
    //多个函数方法之间不需要添加逗号分割
}
//2. 利用类创建对象   new
var xxx = new Xxx('name',19);
var ddd = new Xxx('name1',20);
console.log(xxx)
console.log(ddd)
```
1. 通过class关键字创建类，类名定义习惯性首字母大写
2. 类里面有constructor函数，可以接收传递过来的参数，同时返回实例对象
3. constructor函数，只要new生成实例时，就会自动调用这个函数，如果我们不写这个函数，类也会自动生成这个函数
4. 生成实例new不能省略
5. 最后注意语法规范，创建类 类名后面不加小括号， 生成实例 类名后面加小括号，构造函数不需要加function
    
## 继承
```javascript
class Father {
    constructor(){

    }
    method(){

    }
}

class Son extends Father {
    constructor(){
        super();//调用了父类中的构造函数
    }

}

var son = new Son();

```
### super关键字
**super关键字**用于访问和调用对象父类上的函数。**可以调用父类的构造函数**，也可以调用父类的普通函数
**super必须在子类this之前调用**

```javascript

class Father{
    say(){
        return '我是爸爸';
    }
}

class Son extends Father{
    say(){
        //console.log('我是儿子')
        console.log(supper.say() + '的儿子');
    }
}
 var son = new Son();
 son.say();
```
### 继承中的属性或者方法查找原则，就近原则
1. 继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，如果有就先执行子类的
2. 继承中，如果子类里面没有，就去查找父类有没有这个方法，如果有，就执行父类的这个方法(就近原则)

### 类使用注意事项
1. 在ES6中类没有变量提升，所以必须先定义类，才能通过类实例化对象
2. 类里面的共有属性和方法一定要加`this`使用
3. 类里面的`this`指向问题
4. `constructor`里面的`this`指向实例对象，方法里面的this指向这个方法的调用者

### 静态成员和实例成员
构造函数中的属性和方法我们称为成员，成员可以添加
1. 实例成员 就是构造函数内部通过`this`添加的成员 `name` `age` `method`就是实例成员<br>实例成员只能通过实例化的对象来访问
2. 静态成员在构造函数本身上添加的成员 ``Star.sex = '男'``,sex就是静态成员<br>`class.attribute = xxx`<br>静态成员只能通过构造含数据来访问，不能通过对象来访问

## 构造函数原型prototype
JavaScript规定，每一个构造函数都有一个`prototype`属性，指向一个对象。这个`prototype`就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有

我们可以把**那些不变的方法，直接定义在`prototype`对象上**，这样所有对象的实例就可以共享这些方法。

**一般情况下，我们的公共属性定义到构造函数里面，公共的方法我们方法放到原型对象身上**

## 对象原型__proto__
实例化对象都会有一个属性`__proto__`指向构造函数的`prototype`原型对象，之所以我们对象可以使用构造函数`prototype`原型对象的属性和方法，就是因为对象有_proto_原型的存在