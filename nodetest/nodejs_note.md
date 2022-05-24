## clock_practice中的两个注意点
1. fs.writeFile()方法只能用来创建文件，不能用来创建路径
2. 重复调用fs.writeFile()写入同一个文件，新写入的内容会覆盖之前的旧内容

# http模块
    http模块是Node.js官方提供的、用来创建web服务器的模块。通过http模块提供的http.createServer()方法，就能方便地把一台普通的电脑变成一台web服务器，从而对外提供web资源服务。

## http模块的作用
    服务器和普通电脑的区别在于，服务器上安装了web服务器软件，例如IIS、Apache等。通过安装这些服务器软件，就能把一台普通的电脑变成一台web服务器

    在Node.js中,我们不需要使用IIS、Apache等这些第三方web服务器软件。因为我们可以基于Node.js提供给的http模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供web服务。

    实际应用中，URL中的80端口可以被省略

## req请求对象
    只要服务器接收到了客户端的请求，就会调用通过server.on()为服务器绑定的request事件处理函数。
    如果想在事件处理函数中，访问与客户端相关的数据或属性，可以使用如下的方式：
        server.on('request', (req) => {})

## res响应对象
    在服务器的request事件处理函数中，如果访问与服务器相关的数据或属性，可以使用如下的方式：
       server.on('request', (req,res) =>{
           res.end(str)
       }) 


# 模块化
    编程领域中的模块化，就是遵守固定的规则，把一个大文件拆成独立并互相依赖的多个小模块
        好处：
            1. 提高了代码的复用性
            2. 提高了代码的可维护性
            3. 可以实现按需加载

## 模块化规范
    大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大方便了各个模块之间的互相调用，利人利己

## Node.js中的模块化
    Node.js中根据模块来源的不同，将模块分为了3大类，分别是:
        - 内置模块  内置模块是由Node.js官方提供的，例如fs，path，http等
            const fs = require('fs')

        - 自定义模块 用户创建的每个js文件，都是自定义模块
            const custom = require('./custom.js') 可省略.js

        - 第三方模块 由第三方提供的内置模块，使用前需要下载
            const moment = require('moment')
    
    使用require()方法加载其他模块时，会执行被加载模块中的代码

## Node.js中的模块作用域
    和函数作用域类似，在自定义模块自定义的变量，方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，就叫做模块作用域
        好处：
            防止了全局变量污染的问题

## 向外共享模块作用域中的成员
### 1.module对象
    每个.js自定义模块中都有个module对象，它里面存储了和当前模块有关的信息
        module {
            id: '' ,
            path: '' ,
            exports: {} ,
            filename: '' ,
            parent: null ,
            loaded: false ,
            children: [] ,
            paths: [] 

        }

### module.exports对象
    在自定义模块中，可以使用module.export对象，将模块内的成员共享出去，共外界使用。
    外界用require()方法导入自定义模块时，得到的就是module.exports所指向的对象

    使用require()方法导入模块时，导入的结果，永远以module。exports指向的对象为准。

    建议不要再同一个模块中同时使用exports和module.exports

## Node.js中的模块化规范

    CommonJS规定：
        1. 每个模块内部，module变量代表当前模块
        2. module变量是一个对象，它的exports属性(即module.exports)是对外的接口
        3. 加载某个模块，其实是加载模块的module.exports属性。require()方法用于加载模块。


## npm与包
    包基于内置模块封装出来的，提高了更高级，更方便的api，极大提高了开发效率
    IT公司  npm, Inc.

    www.npmjs.com

    是全球最大的包共享平台
    registry.npmjs.org服务器可下载我们需要的包

    Node Package Manager

    npm包管理工具

    不要手动修改node_modules或packa-lock.json文件中的任何代码，npm包管理工具会自动维护他们

    npm install package@版本号  来下载指定的版本

    包的语义化版本规划
    例 2.24.0 
        1. 大版本
        2. 功能版本
        3. Bug修复版本
        只要前面版本号增长了，则后面的版本号归零

    包管理配置文件
        npm规定，在项目根目录中，必须提供一个叫做package.json的包管理配置文件。用来记录与项目有关的一些配置信息

    多人协作如何记录项目中安装了那些包
        在项目根目录中，创建一个叫做package.json的配置文件，即可用来记录项目中安装了哪些包。从而方便剔除node_modules目录之后，在团队成员之间共享项目的源代码。

    快速创建package.json

        npm init -y

    dependences节点

        专门用来记录使用npm install命令安装了哪些包

    npm install 

        可以一次性把package.json里dependencies节点中的所有包下载下来

    devDependencies
        如果某些包只在项目开发阶段会用到，在项目上线线之后不会用到，则建议把这些包记录到devDependencies
        某些包在开发和项目上线之后都需要用到，则建议把这些包记录到dependencies

    安装指定的包，并记录到devDependencies节点中

        npm i 包名 -D

        完整写法

        npm install 包名 --save-dev-

    切换npm的下包镜像源

        查看当前的下包镜像源 

            npm config get registry
        
        将下包的镜像源切换到指定镜像源地址

            npm config set registry=https://registry.npmjs.org/

    为了更方便切换下包的镜像源，安装nrm这个小工具，利用nrm提供的终端命令，可以快速查看和切换下包的镜像源
        
        通过npm包管理器，将nrm安装为全局可用的工具

            npm i nrm -g
        
        查看所有可用的镜像源

            nrm ls

        将下包的镜像源切换为taobao镜像

            nrm use taobao

        i5ting_toc
            是一个可以把md文档转为html页面的小工具
            安装为全局包

                npm install -g i5ting_toc
            
            调用 i5ting_toc，轻松实现 md 转 html 的功能

                i5ting_toc -f 要转换的md文件路径 -o

        规范的包结构

            1. 包必须以单独的目录而存在
            2. 包的顶级目录下要必须包含package.json这个包管理配置文件
            3. package.json中必须包含name,version,main这三个属性，分别代表包的名字，版本号，包的入口

## 开发属于自己的包
1. 新建 包名 文件夹，作为包的根目录
2. 在包文件夹中，新建如下三个文件：
    - package.json (包管理配置文件)
    - index.js  (包的入口文件)
    - README.md (包的说明文档)

### 使用require()加载自定义模块时，必须指定以 ./ 或 ../ 开头的路径标识符。在加载自定义模块时，如果没有指定./或../这样的路径标识符，则node会把它当作内置模块或第三方模块进行加载

### 目录作为模块
1. 在被加载的目录下查找一个叫做package.json的文件，并寻找main属性，作为require()加载的入口
2. 如果目录里没有package.json文件，或者main入口不存在或无法解析，则Node.js将会试图加载目录下的index.js文件
3. 上两步失败，打印错误


# express
    基于Node.js平台，快捷、开放、极简的web开发框架

    http内置模块用起来很复杂开发效率低，express进行了进一步封装