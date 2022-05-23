//在一个自定义模块中，默认情况下，module.exports = {}

const age = 20

module.exports.age = age

//向module.exports对象上挂载username属性
module.exports.username = 'zs'

//向module.exports对象上挂载sayHello方法
module.exports.sayHello = function(){
    console.log('Hello!')
}

//让module.exports指向一个全新的对象
module.exports = {
    nickName: 'xiaohei',
    sayHi(){
        console.log('Hi!')
    }
}

//用exports挂载和用module.exports挂载的效果一样

//调用require()模块时，得到的永远是module.exports指向的对象