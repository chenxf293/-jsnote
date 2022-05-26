const express = require('express')
 
const app = express()


//导入路由模块
const router = require('./apiRouter')

//配置表单数据的中间件
app.use(express.urlencoded({extended:false}))

//一定要在路由之前，配置cors这个中间件，从而解决跨域的问题
const cors = require('cors')
app.use(cors())

//把路由模块，注册到app上
app.use('/api', router)


app.listen(80,()=>{
    console.log('listening on http://127.0.0.1')
})