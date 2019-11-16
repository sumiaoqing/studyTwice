let express=require('express')
let router=express.Router()
let Yasuo=require('../model/everybodySearch')


//后期逻辑需要更改，暂时使用固定数据
router.get('/',(req,res)=>
{
    console.log('iii')
    let search=['疾风剑豪', '麦林炮手', '诡术妖姬', '弗雷尔卓德之心', '蛮族之王', '德玛西亚之力', '德玛西亚皇子', '生化魔人', '黑暗之女']
    res.json({"everybodySearch":search})
    // YASUO.find().then((yasuo)=>
    // {
    //     console.log('111')
    // }).catch(err=>console.log(err))
})

// name:String,
// sex:String,
// skill:Array,
// isBuy:Boolean

// router.post('/yasuo-add',(req,res)=>
// {
//     console.log('ooo')
//         let yasuoModel =  new Yasuo({"name":"yasuo","sex":"男","skill":["东","南"],isBuy:true});
//         yasuoModel.save().then(yasuo=>
//             {
//                 console.log('hah')
//                 // res.json({name:'ok'})
              
//             })
        
// })

module.exports = router