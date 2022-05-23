const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    const url = req.url //获取请求的url地址
    let content = '<h1>404 Not found！</h1>'    //设置默认的内容为404 Not Found
    if(url === '/' || url === '/index.html'){
        content = '<h1>首页</h1>'   //用户请求的是首页
    }else if(url === '/about.html'){
        content = '<h1>关于页面</h1>'  //用户请求的是关于页面
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(content)
})

server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080')
})