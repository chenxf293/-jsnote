const path = require('path')
//path.join()
const pathStr = path.join(__dirname, '/javascript','/b/c','../','d','index.html')
console.log(pathStr)

//path.basename()


const pathBaseName = path.basename(pathStr)
console.log(pathBaseName)

const nameWithoutExtension = path.basename(pathStr,'.html')
console.log(nameWithoutExtension)

const pathExtName = path.extname(pathStr)
console.log(pathExtName)