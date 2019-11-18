const mongoose=require('mongoose')

let Schema=mongoose.Schema

let everybodySearchSchema=new Schema(
    {
      searchTag:[]//大家都在搜索
    }
)

module.exports=mongoose.model('everybodySearch',everybodySearchSchema,'everybodySearch')