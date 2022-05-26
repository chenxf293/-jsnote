const express = require('express')

const app = express()

//除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
//通过express.json()中间件，解析表单中的JSON格式的数据

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.post('/user',(req, res) => {
    //在服务器，可以用req.body这个属性，来接收客户端发送过来的请求体数据
    //默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body)
    
    res.send('ok')

})

app.post('/book',(req, res) => {
    //在服务器端，可以通过req.body,来获取JSON格式的表单数据和url-encoded格式的数据
    console.log(req.body)
    res.send('ok')
})

app.listen(80, ()=>{
    console.log('server running at http://127.0.0.1')
})