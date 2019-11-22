let express =require('express')
let app =express()
let bodyParser=require('body-parser')
let session = require("express-session")

const mongoDB = require('./database')

//连接monog数据库
let mongoose=require('mongoose')

//路由
let yasuo=require('./route/yasuo')
let homedata=require('./route/homeData')
let ebsearch=require('./route/everybodySearch')
let personals=require('./route/personalSearch')
let sessionapi=require('./route/sessionApi')

//post请求
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(session({
    secret:'12345',
    resave:false,
    saveUninitialized:true,
}))

app.use('/api',sessionapi)
app.use('/api',yasuo)
app.use('/api',homedata)
app.use('/api',ebsearch)
app.use('/api',personals)


mongoose.connect(mongoDB)
// 让 mongoose 使用全局 Promise 库
mongoose.Promise = global.Promise
// 取得默认连接
const db = mongoose.connection

// 将连接与错误事件绑定（以获得连接错误的提示）
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'))


//设置静态托管文件目录
app.use('/public',express.static('public'))


app.listen(3000,()=>
{
    console.log('ok')
})

