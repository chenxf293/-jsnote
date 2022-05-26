//创建API路由模块
const express = require('express')
const apiRouter = express.Router()

 //挂载对应的路由

apiRouter.get('/get', (req, res) => {
    //通过req.query()方法，获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query

    //调用res.send()方法，向客户端响应处理的结果
    res.send({
        status: 0,//0表示处理成功，1表示处理失败

        msg: 'GET 请求成功',//状态描述

        data: query //需要响应给客户端的数据
    })
})

apiRouter.post('/post',(req, res) => {
    //获取客户端通过请求体，发送到服务器的URL-encoded数据
    const body = req.body

    //2.调用res.send()方法，把数据响应给客户端
    res.send({
        status: 0,
        msg:'Post 请求成功!',
        data: body
    })
})



 module.exports = apiRouter