let express = require('express')
let router = express.Router()
let PersonalHistory = require('../model/personalHistory')
let HomeData=require('../model/homeData')
let Lodash=require('lodash')

router.get('/personal', (req, res) => {
    // console.log( req.session.username)
    // let searchNickName=req.session.username
    PersonalHistory.find({ searchNickName: "鲸落" }).then(data => {
        data.watchHistory=Lodash._.orderBy(data.watchHistory,['watchTime'],['desc'])
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

//插入_id值到历史记录
router.post('/insertWatchHistory/:id', (req, res) => {
    let isExist=false
    // console.log(req.body)
    PersonalHistory.find({searchNickName: "鲸落"}).then(data => {
        res.json(data[0].watchHistory)
        // for(let i=0;i<data[0].watchHistory.length;i++)
        // {
        //        if(data[0].watchHistory[i].watch_Id==req.params.id)
        //        {
        //            isExist=true
        //            console.log('00000')
        //        }
        //        console.log(data[0].watchHistory[i])
        // }
        console.log(Lodash._.find(data[0].watchHistory),{"watch_Id":req.params.id})
 if(Lodash._.find(data[0].watchHistory),{"watch_Id":req.params.id})
 {
    isExist=true
 }


       if(isExist==true)
       {
          data[0].watchHistory=Lodash._.filter(data[0].watchHistory,function(item)
          {
              return item.watch_Id!=req.params.id
          })
           data[0].watchHistory.push(req.body)
           PersonalHistory.findByIdAndUpdate({ _id: data[0]._id }, { $set: {"watchHistory":data[0].watchHistory} }, { new: true }).then(Profile => 
           {
               console.log('777')
               res.json(Profile)
           } 
           )
       }else
       {
           console.log('888')
           res.json(data)
       }
    })
    // PersonalHistory.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(Profile => res.json(Profile))
    // // HomeData.findByIdAndUpdate({_id:req.params.id},{$set:{homeCollectCount:{"collectNumber":1,"collectUser":['黄成']}}},{new:true}).then(Profile=>res.json(Profile))
})






module.exports = router