// {searchNickName: "鲸落", searchHistory: "33338", searchTime: "2019/11/18 下午3:10:59"}

const mongoose = require('mongoose')

let Schema = mongoose.Schema

let personalHistorySchema = new Schema(
    {
        searchNickName:
        {
            type: String,
            required: true,
        },//用户昵称
        searchHistory:
        {
            type: Array,
            required: true
        },//用户搜索记录以及搜索时间
        watchHistory:
        {
            type: Array,
            required: true
        },//用户观看记录以及时间
        myFavorite: {
            type: Array,
        },//用户的收藏夹
    }
)

module.exports = mongoose.model('personalHistory', personalHistorySchema, 'personalHistory')