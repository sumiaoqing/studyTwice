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
    HomeData.findByIdAndUpdate({_id:req.params.id},{$set:{"homeComment":"<p><span style='background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);'>赛娜也已经上线一段时间啦，今天我们就来详细全面的解析一下赛娜这位</span><a href='http://lol.duowan.com/hero/' target='_blank' style='background-color: rgb(255, 255, 255); color: rgb(0, 167, 134);'>英雄</a><span style='background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);'>的具体玩法和技巧。</span></p><p><strong style='background-color: rgb(255, 255, 255); color: rgb(0, 0, 255);'>能输出有护盾的超级辅助</strong></p><p><img src='http://img1.dwstatic.com/lol/1911/438197874485/438197948494.jpeg' alt='能奶能输出全能辅助 全面解析赛娜技巧'></p><p><span style='background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);'>赛娜作为设计师钦定的“第一位射手型辅助”，整体的玩法和技能结构都和其他英雄都很大的区别，他不是一个纯粹的输出型辅助，也不是一个单纯只会奶盾的辅助，设计师很好的把这两点都结合到了赛娜身上。</span></p><p><span style='background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);'>目前赛娜在辅助榜单上的排名也是稳步上账，她的胜率和Tier排名都在上升，已经来到了T2前列的位置了，作为一个</span><a href='http://lol.duowan.com/tag/338898929551.html' target='_blank' style='background-color: rgb(255, 255, 255); color: rgb(0, 167, 134);'>新英雄</a><span style='background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);'>，能在这么短的时间内获得如此出色的数据，可见赛娜是有多强。</span></p><p><span style='background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);'>各大职业战队的辅助选手都开始练习赛娜了，上图就是EDG辅助meiko的韩服战绩，表现不可谓不惊艳，特别是17-2-15的这一场，完美展现了赛娜作为一个辅助对战场的影响有多大。</span></p><p><span style='background-color: rgb(255, 255, 255); color: rgb(51, 51, 51);'><span class='ql-cursor'>﻿</span>虽然赛娜的技能看起来非常复杂，但在仔细了解过之后，赛娜的关键技能还是她的被动。赦除给赛娜带来的提升是非常巨大的，每20层灵魂可以给赛娜提供25攻击距离、15%暴击率还有攻击力，赛娜的所有玩法都将围绕着被动展开，越多的灵魂，赛娜的攻击力和攻击距离就越高，Q技能的释放距离也会越远，中后期利用比ADC还远的攻击距离去对敌人进行输出和拉扯，便是赛娜的核心玩法。</span></p>"}},{new:true}).then(Profile=>res.json(Profile))
    // HomeData.findByIdAndUpdate({_id:req.params.id},{$set:{homeCollectCount:{"collectNumber":1,"collectUser":['黄成']}}},{new:true}).then(Profile=>res.json(Profile))
})

module.exports = router
