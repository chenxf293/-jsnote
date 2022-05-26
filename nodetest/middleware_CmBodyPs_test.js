
const express = require('express')

const app = express()

const CmBodyPs = require('./middleware_CmBodyPrs')

//使用app.use()注册中间件

app.use(CmBodyPs)

app.post('/book',(req, res) => {
    //如果没有配置任何解析表单数据的中间体，则req.body默认等于undefined

    res.send(req.body)
})

app.listen(80,() => {
    console.log('listening http://127.0.0.1')
})