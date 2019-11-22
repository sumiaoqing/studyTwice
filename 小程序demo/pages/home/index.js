//index.js
//获取应用实例

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    testObj: {
      test: 'test'
    },
    currentData: 0,
    popularContent:[1,2,3,4],
    homePageAmount: [{ "_id": "01", "homeTitle": "能奶能输出全能辅助 全面解析赛娜技巧", "homeTag": "百万点赞", "homeNickName": "诺达斯 ", "homeUploadTime": "1970-01-01T00:00:01.990Z", "homeRemark": "能输出有护盾的超级辅助", "homeComment": "　赛娜作为设计师钦定的“第一位射手型辅助”，整体的玩法和技能结构都和其他英雄都很大的区别，他不是一个纯粹的输出型辅助，也不是一个单纯只会奶盾的辅助，设计师很好的把这两点都结合到了赛娜身上。", "homeImgPath": "http://img1.dwstatic.com/lol/1911/438197874485/438197948494.jpeg" }, { "_id": "02", "homeTitle": "真的很强吗 卡牌成S9热门英雄引发热议", "homeTag": "百万播放", "homeNickName": "电竞大事件esport", "homeUploadTime": "1970-01-01T00:00:01.990Z", "homeRemark": "卡牌还有一手单带", "homeComment": "　最近S9全球总决赛入围赛正在柏林如火如荼的进行中，在这次世界赛上其实有很多英雄得到了青睐，其中上场率颇高的卡牌大师崔斯特成为了不少网友热议的对象。说起卡牌这个英雄，让人印象最深的应该是很多高端局的主播会使用他在稳定上分，最出名的应该就是Dopa了，但是在比赛中卡牌成为主流还是在S2、S3那个上古赛季左右，LPL中单卡牌更是成为了一门必修课，最出名的应该就是若风的卡牌了。", "homeImgPath": "http://img4.dwstatic.com/lol/1910/434507320322/1570552222319.jpg" }, { "_id": "03", "homeTitle": "世界赛版本最强英雄 剑姬薇恩强势崛起", "homeTag": "百万播放", "homeNickName": "小麦", "homeUploadTime": "1970-01-01T00:00:01.990Z", "homeRemark": "单带无解", "homeComment": "　剑姬在这一次版本中迎来增加，多个技能能够对防御塔产生效果，这也让剑姬在推线方面变得更强，相信世界赛上剑姬势必会成为上单的热门选择。", "homeImgPath": "http://img4.dwstatic.com/lol/1909/433433045903/433433092810.jpeg" }, { "_id": "04","homeTitle": "9.18五大高胜率上单 蚂蚱奎因强势归来", "homeTag": "百万播放", "homeNickName": "小麦", "homeUploadTime": "1970-01-01T00:00:01.990Z", "homeRemark": "新版本强势英雄", "homeComment": "　潘森的第一件装备一般以樱花刀为主，能够提升穿甲和减CD的效果，同时主动还能用来及时支援。黑切能够进一步提升潘森的输出伤害，同时还能增加少量的坦度。要是追求输出最大化，可以选择幕刃，要是想提升抗伤能力第三件做血手，或者复活甲提升容错率。", "homeImgPath": "http://img2.dwstatic.com/lol/1909/433249224898/433249285940.jpeg" }],
  },
  onStudy: function() {
    // 传递单个参数

    // wx.navigateTo({
    //   url: '../about/index?id=888&&happy=8989'
    // })

    //传递对象
    wx.navigateTo({
      url: '../about/index?testobj=' + JSON.stringify(this.data.testObj)
    })
  },
  onLoad: function() {},
  //控制选中的选项卡
  selectCurrentData: function(e) {
    const that = this
    that.setData({
      currentData: e.currentTarget.dataset.current
    })
  },
  //控制选项卡内容更改
  swiperChange: function(e) {
    const that = this
    if (that.data.currentData === e.detail.current) {
      return
    } else {
      that.setData({
        currentData: e.detail.current
      })
    }
  },
  //主页面搜索框的内容
  homeSearch:function()
  {
console.log('主页搜索框')
wx.navigateTo({
      url: '../home-search/index'  
      //  url: '../search-completed/index'
    })
  },
  //跳转到文章的详情页
  jumpDetails:function(e)
  {
     
    console.log(e.currentTarget.dataset.detail)
    wx.navigateTo({
      url: `../search-details/index?clickContent=${e.currentTarget.dataset.detail._id}`
    })
  }
})