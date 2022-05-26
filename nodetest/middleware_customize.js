const express = require('express')

const app = express()

//导入Node.内置的querystring模块
const qs = require('querystring')

app.use((req, res, next) => {
    //定义中间件具体的业务逻辑
    //1.定义一个str字符串，专门用来存储客户端发送过来的请求体
    let str = ''
    //2.监听req的data事件
    req.on('data', (chunk) => {
        str += chunk
    })

    //监听req对象的end事件(请求体发送完毕后自动触发)
    req.on('end', () => {
        //打印完整的请求体数据
        console.log(str)
        //把字符串格式的请求体数据，解析成对象格式
        const body = qs.parse(str)
        console.log(body)
        req.body = body
        next()
        
    })


})

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(80,() => {
    console.log('listening http://127.0.0.1')
})