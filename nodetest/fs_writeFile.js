const fs = require('fs')
//调用fs.writeFile()方法，写入问文件的内容
//文件存放路径，要写入的内容，回调函数
fs.writeFile('./code.txt','asakjldja',function(err){
    if(err){
        return console.log('文件写入失败!' + err.message);
    }
    console.log('文件写入成功')
})

//写入成功err为null
//否则等于一个错误对象