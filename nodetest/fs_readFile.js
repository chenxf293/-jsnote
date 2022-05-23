const fs = require('fs')
//文件路径，编码格式，回调函数
fs.readFile('./code.txt','utf8',function(err, dataStr){
    if(err){
        return console.log('文件读取失败' + err.message)
    }
    console.log('文件读取成功，内容是' + dataStr)
//读取成功error为null
//否则为错误信息

const arr = dataStr.split(' ')

const newArr = []
arr.forEach(item => {
    newArr.push(item.replace('=',':'))
})
const newStr = arrNew.join('\r\n')
console.log(newStr)
})
