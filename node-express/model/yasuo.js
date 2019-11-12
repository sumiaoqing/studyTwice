const mongoose=require('mongoose')

let Schema=mongoose.Schema

let yasuoSchema=new Schema(
    {
        name:String,
        sex:String,
        skill:Array,
        isBuy:Boolean
    }
)

module.exports=mongoose.model('yasuo',yasuoSchema,'yasuo')

