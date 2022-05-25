//导入express
const express = require('express')

//创建服务器
const app = express()

//监听客户端的get 和 post请求，并向客户端响应具体的内容
app.get('/user',(req, res) => {
    //调用express提供的res.send()方法，向客户端响应一个JSON对象
    res.send({name:"zs",age:20,gender:"male"})
})

app.post('/user',(req, res) => {
    //调用express提供的res.send()方法，向客户端响应一个文本字符串
    res.send('请求成功')
})

app.get('/',(req, res) => {
    //通过req.query可以获取到客户端发送给过来的查询参数
    //注意：默认情况下，req.query是一个空对象
    console.log(req.query)
    res.send(req.query)
})


//注意：这里的:id是一个动态的参数
app.get('/user/:id/:name', (req, res) => {
    //req.params是动态匹配到的URL参数，默认也是一个空对象
    console.log(req.params)
    res.send(req.params)
})

//在这里，调用express.static()方法，快速的对外提供静态资源
//如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下第一行的方式

app.use('/image',express.static('../git/images'))
app.use(express.static('./source/clock'))

//启动服务器
app.listen(80,() => {
    console.log(`express server running at http://127.0.0.1`)
})