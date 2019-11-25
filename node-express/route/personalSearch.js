let express = require('express')
let router = express.Router()
let PersonalHistory = require('../model/personalHistory')
let HomeData=require('../model/homeData')

router.get('/personal', (req, res) => {
    // console.log( req.session.username)
    // let searchNickName=req.session.username
    PersonalHistory.find({ searchNickName: "鲸落" }).then(data => {
        res.json(data)
    })
})

router.get('/personalData/:dataTotal', (req, res) => {
    // console.log( req.session.username)
    // let searchNickName=req.session.username
    let watchHistoryArr = req.params.dataTotal.split(",")
    console.log(watchHistoryArr)
        HomeData.find({ _id: {$in:watchHistoryArr }}).then(data => {
         
            res.json(data)
        })
        

})


router.post('/personal-add', (req, res) => {
    new PersonalHistory({
        "searchNickName": "鲸落", "searchHistory": [{ "searchTime": Date.parse(new Date()), "searchContent": "河流之王" },
        { "searchTime": Date.parse(new Date()), "searchContent": "黑色玫瑰" }], "watchHistory": [{ "watchTime": Date.parse(new Date()), "watch_Id": "5dda2c1f4eb9900d680441eb" }, { "watchTime": Date.parse(new Date()), "watch_Id": "5dda2d39fc0d462898de3f1f" }, { "watchTime": Date.parse(new Date()), "watch_Id": "5dda2d9b7816442428032204" }], "myFavorite": [{ "fileName": '默认文件夹', "fileDataId": [{ "fileDataTime": Date.parse(new Date()), "fileDataId": "5dda2c1f4eb9900d680441eb" }], "fileRemark": "这是默认文件夹", "fileCreateTime": Date.parse(new Date()) }]
    }).save().then(file => {
        console.log('搜索记录存入成功')
        res.json(file)
    })
})

router.delete('/personal-delete', (req, res) => {
    PersonalHistory.remove(req.body).then(data => {
        console.log('清除历史记录')
    })
})

module.exports = router