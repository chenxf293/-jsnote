const http = require('http')

const server = http.createServer()

//req是请求对象，包含了与客户端相关的数据和属性
server.on('request', (req, res) => {
    //req.url是客户端请求的URL地址
    const url = req.url
    //req.method是客户端请求的method类型
    const method = req.method
    const str = `Your request url is ${url},and request method is ${method}`
    console.log(str)

    //调用res.setHeader()方法，设置Content-Type响应头，解决中文乱码的问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    //调用res.end()方法，向客户端响应一些内容
    res.end(str)
})

server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080')
})




