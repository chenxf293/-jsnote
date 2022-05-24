
//导入自定义的格式化时间的模块
const TIME = require('./dateFormat')

//调用方法，进行时间的格式化

const dt = new Date()

const newDT = TIME.dateFormat(dt)
console.log(newDT)


const TIME1 = require('./source/tools')

//调用方法，进行时间的格式化

const dt1 = new Date()

const newDT1 = TIME.dateFormat(dt1)
console.log(newDT1)


const htmlEscape = require('./source/tools')

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>' 
const str = htmlEscape.htmlEscape(htmlStr)
console.log(str)

const str1 = htmlEscape.htmlUnEscape(str)
console.log(str1)