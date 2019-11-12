let express =require('express')
let app =express()
let bodyParser=require('body-parser')

const mongoDB = 'mongodb://127.0.0.1/hero';

//连接monog数据库
let mongoose=require('mongoose')

//路由
let yasuo=require('./route/yasuo')

//post请求
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/hero',yasuo)
mongoose.connect(mongoDB);
// 让 mongoose 使用全局 Promise 库
mongoose.Promise = global.Promise;
// 取得默认连接
const db = mongoose.connection;

// 将连接与错误事件绑定（以获得连接错误的提示）
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));


app.listen(3000,()=>
{
    console.log('ok')
})

