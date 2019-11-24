const mongoose = require('mongoose')

let Schema = mongoose.Schema

let homeDataSchema = new Schema(
    {
        homeTitle:
        {
            type: String,
            required: true,
        },//文章标题
        homeTag: {
            type: String,
            required: true,
        },//文章标签
        homeNickName: {
            type: String,
            required: true,
        },//文章用户名称
        homeViewCount: {
            type: Number,
            required: true,
        },//文章观看数
        homeUploadTime:
        {
            type: Date,
            default: Date.now,
            required: true,
        }, //上传时间
        homeCollectCount: {
            type: Object,
            required: true,
        },//文章收藏数字包括个数以及收藏用户的昵称
        homeProperties: {
            type: String,
            required: true,
        },//文章性质
        homeRemark: {
            type: String,
        },//用户备注
        homeComment: {
            type: String,
            required: true,
        },//用户内容
        homeImgPath: {
            type: String,
            required: true,
        },//用户图片
    }
)

module.exports = mongoose.model('homeData', homeDataSchema, 'homeData')
