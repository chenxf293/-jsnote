//创建web服务器的基本步骤
//1. 导入http模块
const http = require('http')

//2. 创建web服务器实例
const server = http.createServer()

//3. 为服务器实例绑定request事件，监听客户端的请求
server.on('request',function(req, res){
    console.log('Someone visit our web server.')
})

//4. 启动服务器
server.listen(8080, function(){
    console.log('sever running at http://127.0.01:8080')
})


//只要服务器接收到了客户端的请求，就会调用通过server.on()为服务器绑定的request事件处理函数。
//如果想在事件处理函数中，访问与客户端相关的数据或属性，可以使用如下的方式：
server.on('request', (req) => {})