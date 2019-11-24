let express=require('express')
let router=express.Router()
let HomeData=require('../model/homeData')

router.get('/homeData',(req,res)=>
{
    HomeData.find().then(data=>
        {
            res.json(data)
        })
})


router.post('/homeData-add',(req,res)=>
{
    console.log('ooo')
    let homeModel=new HomeData({ "homeTitle": "9.18五大高胜率上单 蚂蚱奎因强势归来", "homeTag": "新鲜文章", "homeNickName": "小麦", "homeUploadTime": Date.parse(new Date()), "homeViewCount": 0, "homeRemark": "", "homeComment": "<div>测试是否有用第四<div>", "homeImgPath": "http://img2.dwstatic.com/lol/1909/433249224898/433249285940.jpeg", "homeProperties": "爆发", "homeCollectCount":{"collectNumber":0,"collectUser":[]}})
        homeModel.save().then(HD=>
            {
                console.log('hah')
                res.json(HD)
              
            })
})

//homeData单个数据
router.get("/singleHomeData/:_id",(req,res)=>
{
    HomeData.findOne({_id:req.params._id}).then(homedata=>
    {
        if(!homedata) return res.status(404).json('没有内容')
        res.json(homedata)
    })
    .catch(err=>res.status(404).json(err))
})

//homeData修改数据
router.post('/editSingleHomeDataCollect/:id',(req,res)=>
{
    // console.log(req.body)
    HomeData.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true}).then(Profile=>res.json(Profile))
    // HomeData.findByIdAndUpdate({_id:req.params.id},{$set:{homeCollectCount:{"collectNumber":1,"collectUser":['黄成']}}},{new:true}).then(Profile=>res.json(Profile))
})

module.exports = router
