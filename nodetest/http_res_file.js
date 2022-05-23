const http = require('http')

const server = http.createServer()

const fs = require('fs')

const path = require('path')

server.on('request', (req, res) => {
    //获取请求的url地址
    const url = req.url 
    //把请求的url地址映射为具体文件的存放路径
    // const fpath = path.join(__dirname, url)

    //优化动态请求资源路径
    let fpath = ''

    if (url === '/') {
        fpath = path.join(__dirname,'/source/clock/index.html')
    } else {
        fpath = path.join(__dirname,'/source/clock/',url)
    }

    //根据映射过来的文件路径读取文件的内容
    fs.readFile(fpath,'utf8', (err, dataStr) => {
        if (err) {
            return res.end('404 Not Found')
        }
        res.end(dataStr)
    })
})

server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080')
})