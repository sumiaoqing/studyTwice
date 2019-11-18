let express=require('express')
let router=express.Router()
let PersonalHistory=require('../model/personalHistory')

router.get('/personal',(req,res)=>
{
    PersonalHistory.find({searchNickName: "鲸落"}).sort({searchTime:-1}).then(data=>
        {
            res.json(data)
        })
})

router.post('/personal-add',(req,res)=>
{
    new PersonalHistory(req.body).save().then(res=>
        {
            console.log('搜索记录存入成功')
        })
})

module.exports = router