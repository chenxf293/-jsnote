//导入fs模块
const fs = require('fs');
//导入path模块
const path = require('path');

//定义正则表达式，分别匹配<style></style>和<script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

