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

let bj={"homeTitle":"能奶能输出全能辅助 全面解析赛娜技巧", "homeTag":"百万播放","homeNickName":"诺达斯 ","homeUploadTime":"1970-01-01T00:00:01.990Z","homeRemark":"能输出有护盾的超级辅助","homeComment":"　赛娜作为设计师钦定的“第一位射手型辅助”，整体的玩法和技能结构都和其他英雄都很大的区别，他不是一个纯粹的输出型辅助，也不是一个单纯只会奶盾的辅助，设计师很好的把这两点都结合到了赛娜身上。","homeImgPath":"http://localhost:3000/public/home-img/saina.jpeg"}