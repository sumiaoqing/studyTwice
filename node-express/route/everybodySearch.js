let express=require('express')
let router=express.Router()
let EveryBodySearch=require('../model/everybodySearch')


//后期逻辑需要更改，暂时使用固定数据
router.get('/search',(req,res)=>
{
    //这边的逻辑处理没有综合所有热搜，所以需要改进

    //数据过多的话进行截取
    EveryBodySearch.find().then((search)=>
    {
        if(search[0].searchTag.length<=15)
        {
            res.json(search)
        }else
        {
            search[0].searchTag=search[0].searchTag.slice(0,15)
            res.json(search)
        }
    }).catch(err=>console.log(err))
})

// name:String,
// sex:String,
// skill:Array,
// isBuy:Boolean

router.post('/everybodySearch-add',(req,res)=>
{
    console.log('ooo')
        let everyBodySearch =  new EveryBodySearch({"searchTag":['疾风剑豪', '麦林炮手', '诡术妖姬', '弗雷尔卓德之心', '蛮族之王', '德玛西亚之力', '德玛西亚皇子', '生化魔人', '黑暗之女']});
        everyBodySearch.save().then(search=>
            {   
                res.json(search)
              
            })
        
})

module.exports = router