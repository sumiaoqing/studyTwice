let express=require('express')
let router=express.Router()
let PersonalHistory=require('../model/personalHistory')

router.get('/personal',(req,res)=>
{
    console.log( req.session.username)
    let searchNickName=req.session.username
    PersonalHistory.find({searchNickName: searchNickName}).sort({searchTime:-1}).then(data=>{
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

router.delete('/personal-delete',(req,res)=>
{
    PersonalHistory.remove(req.body).then(data=>
        {
            console.log('清除历史记录')
        })
})

module.exports = router