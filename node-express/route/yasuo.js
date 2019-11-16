let express=require('express')
let router=express.Router()
let Yasuo=require('../model/yasuo')

router.get('/yasuo',(req,res)=>
{
    console.log('iii')
    res.json({"n":"j"})
    // YASUO.find().then((yasuo)=>
    // {
    //     console.log('111')
    // }).catch(err=>console.log(err))
})

// name:String,
// sex:String,
// skill:Array,
// isBuy:Boolean

router.post('/yasuo-add',(req,res)=>
{
    console.log('ooo')
        let yasuoModel =  new Yasuo({"name":"yasuo","sex":"男","skill":["东","南"],isBuy:true});
        yasuoModel.save().then(yasuo=>
            {
                console.log('hah')
                // res.json({name:'ok'})
              
            })
        
})

module.exports = router
