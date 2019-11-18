// {searchNickName: "鲸落", searchHistory: "33338", searchTime: "2019/11/18 下午3:10:59"}

const mongoose=require('mongoose')

let Schema=mongoose.Schema

let personalHistorySchema=new Schema(
    {
        searchNickName:String,//用户昵称
        searchHistory:String,//用户记录
        searchTime:{  //用户记录排序时间
            type: Date
        }
    }
)

module.exports=mongoose.model('personalHistory',personalHistorySchema,'personalHistory')