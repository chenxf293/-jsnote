const express = require('express')
const app = express()

/*
//常量mv所指向的就是一个中间件函数
const mw = function(req, res, next) {
    console.log('这是一个最简单的中间件函数')
    //注意：当前中间件的业务处理完毕后，必须调用next()函数
    //表示把流转关系转交给下一个中间件或路由

    next()
}
*/

//将mw注册为全局生效的中间件
// app.use(mw)

// 简化中间件的写法
app.use(function(req,res,next){
    //获取到请求到达服务器的时间
    const time = Date.now()

    //为req对象，挂载自定义属性，从而把时间共享给后面的所有路由

    req.startTime = time

    console.log('这是一个最简单的中间件，调用第一个中间件')
    next()
})

//定义多个全局中间件
app.use((req,res,next) => {
    
    console.log('这是一个最简单的中间件，调用第2个中间件')
    next()
})

//定义局部生效中间件
const mw = function(req, res, next) {
    console.log('这是一个不通过app.use注册的局部生效中间件函数mw')
    next()
}

const mw1 = function(req, res, next) {
    console.log('这是一个不通过app.use注册的局部生效中间件函数mw1')
    next()
}

//mw为 / 请求的局部生效中间件
// 多个中间件的写法 [mw,mw1] 可
app.get('/',mw,mw1, (req, res) => {
    console.log('调用了 / 这个路由')
    //人为制造错误
    throw new Error('服务器内部发生了错误')
    res.send('Home page.'+ req.startTime)
})


app.get('/user', (req, res) => {
    console.log('调用了 /user 这个路由')
    
    res.send('User page.'+ req.startTime)
})

app.use((err, req, res, next) => {
    console.log('发生了错误' + err.message)
    res.send('Error'+ err.message)
})

app.listen(80, () => {
    console.log('http://127.0.0.1')

})

//收到请求先进入中间件，然后通过next()进入下个中间件或路由
