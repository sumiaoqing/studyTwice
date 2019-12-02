let express = require('express')
let router = express.Router()
let HomeData = require('../model/homeData')

router.get('/homeData/:currentPage/:size', (req, res) => {
    console.log(req.params.currentPage)
    console.log(req.params.size)
    let currentPage = new Number(req.params.currentPage)
    let size = new Number(req.params.size)

    if (currentPage <= 1) {
        currentPage = 1
    }
    HomeData.find().sort({"homeUploadTime":-1}).then(data => {
        console.log(data.length % size)
        let totalPage = Math.floor(data.length / size)
        if (data.length % size != 0) {
            totalPage = totalPage + 1
        }
        if (currentPage > totalPage) {
            currentPage = totalPage
        }
        let query = HomeData.find().sort({"homeUploadTime":-1})
        console.log(currentPage);
        query.skip((currentPage - 1) * size)
        query.limit(size)
        query.then((resPage) => {
            jsonArray = { "totalPage": data.length, data: resPage }
            res.json(jsonArray)
        })
    }).catch(err => console.log(err))
})


router.post('/homeData-add', (req, res) => {
    console.log('ooo')
    let homeModel = new HomeData({ "homeTitle": "LPL公益活动：刘青松被迫营业笑晕粉丝", "homeTag": "新鲜文章", "homeNickName": "梵高搞", "homeUploadTime": Date.parse(new Date()), "homeViewCount": 0, "homeRemark": "", "homeComment": "<div>测试是否有用第7<div>", "homeImgPath": "http://localhost:3000/public/home-img/公益.jpg", "homeProperties": "公益", "homeCollectCount": { "collectNumber": 0, "collectUser": [] } })
    homeModel.save().then(HD => {
        console.log('hah')
        res.json(HD)

    })
})

//homeData单个数据
router.get("/singleHomeData/:_id", (req, res) => {
    HomeData.findOne({ _id: req.params._id }).then(homedata => {
        if (!homedata) return res.status(404).json('没有内容')
        res.json(homedata)
    })
        .catch(err => res.status(404).json(err))
})

//homeData修改数据
router.post('/editSingleHomeDataCollect/:id', (req, res) => {
    // console.log(req.body)
    HomeData.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(Profile => res.json(Profile))
    // HomeData.findByIdAndUpdate({_id:req.params.id},{$set:{homeCollectCount:{"collectNumber":1,"collectUser":['黄成']}}},{new:true}).then(Profile=>res.json(Profile))
})

module.exports = router
