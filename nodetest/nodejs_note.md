## clock_practice中的两个注意点
    1. fs.writeFile()方法只能用来创建文件，不能用来创建路径
    2. 重复调用fs.writeFile()写入同一个文件，新写入的内容会覆盖之前的旧内容

# http模块
    http模块是Node.js官方提供的、用来创建web服务器的模块。
    
    通过http模块提供的http.createServer()方法，就能方便地把一台普通的电脑变成一台web服务器，从而对外提供web资源服务。

## http模块的作用
    服务器和普通电脑的区别在于，服务器上安装了web服务器软件，例如IIS、Apache等。
    
    通过安装这些服务器软件，就能把一台普通的电脑变成一台web服务器

    在Node.js中,我们不需要使用IIS、Apache等这些第三方web服务器软件。
    
    因为我们可以基于Node.js提供给的http模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供web服务。

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
        在项目根目录中，创建一个叫做package.json的配置文件，即可用来记录项目中安装了哪些包。
        
        从而方便剔除node_modules目录之后，在团队成员之间共享项目的源代码。

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

## nodemon
    在编写调试Node.js项目的时候，如果修改了项目代码，则需要频繁地手动close掉，然后在重新启动，非常繁琐
    使用nodemon能够监听项目文件的变动，自动帮我们重启项目

    使用nodemon来启动项目代码被修改之后会被nodemon监听到，从而实现自动重启项目的效果

# Express 路由
    在express中，路由指的是客户端的请求与服务器处理函数之间的映射关系

    在express中路由分3部分组成，分别是请求类型，请求的URL地址，处理函数

    路由匹配的注意点
        1. 按照定义的先后顺序进行匹配
        2. 请求类型和请求的URL同时匹配成功，才会调用对应的处理函数

## 模块化路由
    express不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模块

## 中间件
    业务处理当中的处理环节

    本质上就是一个function处理函数

    中间件函数的形参列表中，必须包含next参数，而路由处理函数中只包含req和res

    多个中间件之间，共享同一份req和res，可以在上游的中间件中，统一为req或res对象添加自定义的属性或方法，共下游的中间件或路由进行使用

### 全局生效的中间件
    客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件。
    通过调用app.use(中间函数件)，即可定义一个全局生效的中间件

### next 函数的作用
    实现多个中间件连续调用的关键，他表示把流转关系转交给下一个中间件或路由

### 局部生效的中间件
    不使用app.use定义的中间件，叫做局部生效的中间件

### 注意事项

    1. 一定要在路由之前注册中间件
    2. 客户端发送过来的请求，可以连续调用多个中间件进行处理
    3. 执行完中间件的业务代码之后，不要忘记调用next()函数
    4.为了防止代码逻辑混乱，调用next()函数后不要再写额外的代码
    5. 连续调用多个中间件时，多个中间件之间，共享req和res对象

### 中间件的分类
    1. 应用级别的中间件
        app.use(function(req, res, next) {})

    2. 路由级别的中间件
        router.use(function(req, res, next) {})

    3. 错误级别的中间件
        app.use(function(err, req, res, next) {})

    4.express内置的中间件
        - express.static 快速托管静态资源的内置中间件
        - express.json 解析JSON格式的请求体数据  post 请求
        - express.urlencoded 解析URL-encoded格式的请求体数据 post 请求

    5.第三方中间件
        非express官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件
        例如 body-parser

### 自定义中间件

    1. 定义中间件
    2. 监听req的data事件
    3. 监听res的end事件
    4. 使用querystring模块解析请求体数据
    5. 将解析出来的数据对象挂载为req.body
    6. 将自定义中间件封装为模块

# Web开发模式
    目前主流的web开发模式有两种，分别是：

        1.  基于服务端渲染的传统Web开发模式



        2.  基于前后端分离的新型Web开发模式

# 前后端身份认证

    JWT是目前最流行的跨域认证解决方案
    JSON Web TOken


# HTTP
    超文本传输协议 HyperTextTransferProtocol

        客户端要以HTTP协议要求的格式把数据提交到服务器
        服务器要以HTTP协议要求的格式把内容响应给客户端


## http协议的交互模型

    采用了  请求 / 响应  的交互模型
    客户端发起一次请求 服务器就响应一次

## HTTP请求消息

    由于http协议属于客户端浏览器和服务器之间的通信协议。
    因此，客户端发起的请求叫做http请求，客户端发送到服务器的消息，叫做http请求消息/请求报文

### 组成部分
                请求行      line
                请求头部    reqheader
                空行        space
                请求体      reqbody

    1.请求行

        由  请求方式，URL，http协议版本  3个部分组成中间用空格隔开

    2. 请求头部

        用来描述客户端的基本信息，从而把客户端相关的信息告知服务器

            User-Agent 当前是什么类型的浏览器
            Content-Type 发送到服务器的数据根式
            Accept 客户端能够接收什么类型的返回内容
            Accept-Language 客户端期望接收哪种人类语言的文本内容

    3. 空行

        通知服务器请求头部到此结束
        分割请求头部和请求体
    
    4. 请求体

        请求体中存放的，是要通过POST方式提交到服务器的数据

        ※只有POST请求才有请求体，GET请求没有请求体

## HTTP响应消息

    服务器响应给客户端的消息内容，也叫作响应报文

### 组成部分

                状态行      status
                响应头部    resheader
                空行        space
                响应体      resbody
            
    1. 状态行

        由  HTTP协议版本，状态码，状态码的描述文本  3各部分组成

    2. 响应头部    

        描述服务器的基本信息 由多行键/值对组成

            X-Powered-By 服务器用的什么样的软件如express
            Access-Control-Allow-Origin
            Content-Type 响应内容的格式
            Content-Length 内容长度
            Date 响应时间

    3.空行

        通知响应头部至此结束
        分隔响应头跟响应体

    4.响应体

        存放的是服务器响应给客户端的资源内容


## HTTP请求方法 GET(查询)/POST(新增)/PUT(修改)/DELETE(删除)/HEAD/OPTIONS/CONNECT/TRACE/PATCH

    属于HTTP协议中的一部分，请求方法的作用是：用来表明要对服务器上的资源执行操作。
    
    最常用的请求方法是GET和POST

### get请求
#### 通常用于获取服务器短的资源(向服务器要资源)
    例如URL地址，从服务器获取THML文件，css文件，js文件，图片文件，数据资源等

### post请求
#### 通常用于向服务器提交数据(往服务器发送资源)
    例如登录时向服务器提交的登录信息，注册时向服务器提交的注册信息，添加用户时向服务器提交的用户信息等各种数据提交操作


#### get方式适合用来提交少量的，简单的数据
#### post方式适合用来提交大量的，复杂的，或包含文件上传的数据

## HTTP响应状态码 HTTP Status Code

    属于HTTP协议的一部分，用来标识响应的状态
    状态码由三个十进制数字组成，第一个十进制数字定义了状态码的类型，后两个数字用来对状态码进行细分

        1xx     信息，服务器收到请求，需要请求者继续执行操作

        2xx     成功，操作被成功接收并处理

        3xx     重定向，需要进一步的操作以完成请求

        4xx     客户端错误，请求包含语法错误或无法完成请求

        5xx     服务器错误，服务器在处理请求的过程中发生了错误

# Ajax

    能够实现网页和服务器间的数据交互的包

# <form>标签属性

    1. action 用来规定当提交表单时，向何处发送表单数据，默认值时当前url

    2. target 用来规定在何处打开action url
    默认值是_slef 当前相同的框架中打开

    3. method 用来规定以何种方式把表单数据提交到action url
        有两个可选get post
        get 通过url的方式提交给action的url
        post 以form data 的形式提交，地址栏不显示数据

    4. enctype 用来规定在发送表单数据之前如何对数据进行编码
        默认值 application/x-www-form-urlencoded 表示在发送前编码所有的字符 

        multipart/form-data 不对字符编码，在使用包含文件上传控件的表单时，必须使用该值， 文件上传操作时必须设置
    

    表单同步提交的缺点    直接点击提交按钮
        1. 页面会发生跳转
        2. 页面之前的状态和数据会丢失

    解决方案: 表单只负责采集数据，Ajax负责将数据提交到服务器

# XML
    被设计用来传输和存储数据，是数据的载体
    体积臃肿，js解析困难

# JSON
    本质是字符串
    轻量级文本数据交换格式
    比xml更小，更快，更易解析


    两种结构 对象 嵌套

    key必须用英文的双引号进行包裹

    语法注意事项
        1. 属性名必须使用双引号包裹
        2. 字符串类型必须使用双引号进行包裹
        3. JSON中不允许使用单引号表示字符串
        4. 不能写注释
        5. 最外层必须时对象或数组格式
        6. 不能使用undefined或函数作为JSON的值

    JSON.stringify  JSON序列化 把数据对象转换为字符串的过程

    JSON.parse JSON反序列化 把字符串转换为数据对象

# axios
    专注于网络数据请求的库
    比jQuery更轻量化，只专注于网络数据请求

    get 数据属性 params:paramsData
    post 数据属性 data:{ ... }


# 同源策略
    如果页面的 协议，域名，和端口号 都相同，则两个页面具有相同的源

    同源策略
    全称Same origin policy 是浏览器提供的一个安全功能

    通俗的理解：浏览器规定，A网站的js不允许和非同源网站C之间进行资源的交互
    如
        无法读取非同源网页的Cookie，LocalStorage 和 IndexedDB
        无法接触非同源网页的DOM
        无法向非同源地址发送Ajax请求

# 跨域问题

## 跨域
    同源指的是两个URL的协议，域名，端口一致，反之，则是跨域
    出现跨域的根本原因：浏览器的同源策略 不允许 非同源的URL之间 进行资源的交互

## 浏览器对跨域请求的拦截
    浏览器允许发起跨域请求，但是，跨域请求回来的数据，会被浏览器拦截，无法被页面获取到

## 解决跨域问题

### JSONP JSON with Padding 临时解决方案
    1.JSONP的概念与特点

        由于浏览器同源策略的限制，网页中无法通过Ajax请求非同源的接口数据。但是<script>标签不受浏览器同源策略的影响，可以通过src属性，请求非同源的js脚本

        浏览器通过<script>标签的src属性，请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求数据的方式叫做JSONP

        JSONP不属于 真正的Ajax请求，因为它没有使用XMLHttpRequest这个对象

        JSONP 仅支持GET 请求，不支持POST，PUT，DELETE等请求
        
    注意事项
        如果项目中已经配置了CORS跨域资源共享，为了防止冲突，必须在配置CORS中间件之前声明JSONP的接口。否则JSONP接口会被处理成开启了CORS的接口

### CORS 根本解决方案

#### 使用cros中间件解决跨域问题
    Cross-Origin Resource Sharing,跨域资源共享
    由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源。
    浏览器的同源安全策略默认会阻止网页“跨域”获取资源。但如果服务器配置了CORS相关的HTTP响应头，就可以解除浏览器的跨域访问限制。

    注意点
        1. CORS主要在服务器端经行配置，客户端浏览器无须做任何额外的配置，即可请求开启CORS的接口
        2. CORS在浏览器中有兼容性。只有支持XMLHttpRequest Level2的浏览器，才能正常访问开启CORS的服务端接口

    响应头部
        Access-Control-Allow-Origin

        表示允许指定网页的请求，*表示允许任何域的请求
            res.setHeader('Access-Control-Allow-Origin','http://example.com')

        Access-Control-Allow-Headers

        默认情况下，CORS仅支持客户端向服务器发送9个请求头

        如果客户端向服务器发送了额外的请求头信息，则需要服务器端，通过Access-Control-Allow-Headers对额外的请求头进行声明，否则会失败

        Access-Control-Allow-Methods

        默认情况下，CORS仅支持客户端发起GET，POST，HEAD请求。
        如果客户端希望通过PUT，DELETE等方式请求服务器的资源，则需要子啊服务器端，通过Access-Control-Allow-Methods来指明实际请求所允许使用的HTTP方法

#### CORS的请求分类

    简单请求
        GET，POST，HEAD三者之一
        HTTP头部信息不超过默认的9个字段

    预检请求
        只要符合以下任何一个条件的请求，都需要进行预检请求

            1. 请求方式为GET，POST，HEAD之外的请求Method类型
            2.请求头中包含自定义头部字段
            3.向服务器发送了application/json格式的数据

        在浏览器与服务器正式通信之前，浏览器会先发送OPTION请求进行预检，以获知服务器是否允许该实际请求，所以这一次的OPTION请求称为 “预检请求”。
        服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据。

    简单请求和客户端请求的区别
        简单请求的特点：客户端与服务器之间 只会发生一次请求
        预检请求的特点：客户端与服务器之间会发生两次请求  OPTION预检请求成功之后，才会发起真正的请求


