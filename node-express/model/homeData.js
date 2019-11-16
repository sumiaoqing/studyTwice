const mongoose=require('mongoose')

let Schema=mongoose.Schema

let homeDataSchema=new Schema(
    {
       homeTitle:String,//主页标题
       homeTag:String,//主页标签
       homeNickName:String,//主页用户名称
       homeAvatarUrl:String,
       homeUploadTime:
        {
            type:Date,
            default:Date.now
        },//上传时间
        homeRemark:String,//主页备注
        homeComment:String,//主页内容
        homeImgPath:String,//主页静态图片

    }
)

module.exports=mongoose.model('homeData',homeDataSchema,'homeData')
