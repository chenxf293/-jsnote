const express = require('express')
const app = express()

//1.导入路由模块
const router = require('./module_router')

//注册路由模块,通过app.use()函数的作用，就是来注册全局中间件
app.use(router)

//使用app.use()注册路由模块，并添加统一的访问前缀 /api
//app.use('/api', router)


app.listen(80 ,()=>{
    console.log('server running at http://127.0.0.1')
})