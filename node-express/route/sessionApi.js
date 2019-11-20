let express=require('express')
let router=express.Router()

// router.get('/homeData',(req,res)=>
// {
//     console.log('iii')
//     // res.json({"n":"j"})
//     HomeData.find().then(data=>
//         {
//             res.json(data)
//         })
// })


router.post('/sessionApi-add',(req,res)=>
{
    req.session.username = req.body.sessionApi
})

module.exports = router
