let express=require('express')
let router=express.Router()
let HomeData=require('../model/homeData')

router.get('/homeData',(req,res)=>
{
    console.log('iii')
    // res.json({"n":"j"})
    HomeData.find().then(data=>
        {
            res.json(data)
        })
})


router.post('/homeData-add',(req,res)=>
{
    console.log('ooo')
    let homeModel=new HomeData({"homeTitle":"主页标题","homeTag":"主页标签","homeAvatarUrl":"主页头像地址","homeNickName":"用户主页名称","homeUploadTime":2014-11-13,"homeRemark":"主页备注","homeComment":"主页内容","homeImgPath":"主页静态图片"})
        homeModel.save().then(HD=>
            {
                console.log('hah')
                res.json(HD)
              
            })
        
})

module.exports = router
