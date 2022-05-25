//在express中使用路由的最简单的方式，就是把路由挂载到app上

//导包
const express = require('express')

//创建web服务器，命名为app
const app = express()

//挂载路由

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/', (req, res) => {
    res.send('post request')
})


//启动web服务器

app.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})