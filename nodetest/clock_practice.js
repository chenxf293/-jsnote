//导入fs模块
const fs = require('fs');
//导入path模块
const path = require('path');

//定义正则表达式，分别匹配<style></style>和<script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/
//调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname,'/source/index.html'),'utf8',function(err,dataStr){
    //读取HTML文件失败
    if (err) return console.log('读取HTML文件失败'+err.message)
    //读取文件成功后，调用对应的三个方法，分别拆解出css，jss，html文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

//定义处理css样式的方法
function resolveCSS(htmlStr){
    //使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    //将提取出来的样式字符串，进行字符串的replace替换操作
    const newCSS = r1[0].replace('<style>','').replace('</style>','')
    //调用fs.writeFile()方法，将提取的样式，写入得到clock目录中index.css的文件里
    fs.writeFile(path.join(__dirname, '/source/clock/index.css'),newCSS,function(err){
        if(err){
            return console.log('写入css样式失败'+err.message)
        }
        console.log('写入样式成功！')
    })
    
}

//定义处理js脚本的方法
function resolveJS(htmlStr){
    //使用正则提取需要的内容
    const r2 = regScript.exec(htmlStr)
    //将提取出来的脚本字符串，进行字符串的replace替换操作
    const newJS = r2[0].replace('<script>','').replace('</script>','')
    //调用fs.writeFile()方法，将提取的脚本，写入得到clock目录中index.js的文件里
    fs.writeFile(path.join(__dirname, '/source/clock/index.js'),newJS,function(err){
        if(err){
            return console.log('写入js样式失败'+err.message)
        }
        console.log('写入脚本成功！')
    })
    
}

//定义处理HTML结构的方法
function resolveHTML(htmlStr){
    //将字符串调用replace方法，把内嵌的style和script标签，替换为外联的link和scrit标签
    const newHtml = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./clock/index.css" />').replace(regScript,'<script src="./clock/index.js"></script>')
    //写入index.thml
    fs.writeFile(path.join(__dirname,'/source/clock/index.html'),newHtml,function(err){
        if(err){
            return console.error('写入HTML文件失败'+err.message)
        }
        console.log('写入HTML文件成功')
    })
}
