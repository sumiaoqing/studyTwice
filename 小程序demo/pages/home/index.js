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
    homePageAmount: [{ "homeTitle": "主页标题1", "homeTag": "主页标签", "homeAvatarUrl": "主页头像地址", "homeNickName": "用户主页名称", "homeUploadTime": 2014 - 11 - 13, "homeRemark": "主页备注", "homeComment": "主页内容", "homeImgPath": "主页静态图片" }, { "homeTitle": "主页标题2", "homeTag": "主页标签", "homeAvatarUrl": "主页头像地址", "homeNickName": "用户主页名称", "homeUploadTime": 2014 - 11 - 13, "homeRemark": "主页备注", "homeComment": "主页内容", "homeImgPath": "主页静态图片" }, { "homeTitle": "主页标题3", "homeTag": "主页标签", "homeAvatarUrl": "主页头像地址", "homeNickName": "用户主页名称", "homeUploadTime": 2014 - 11 - 13, "homeRemark": "主页备注", "homeComment": "主页内容", "homeImgPath": "主页静态图片" }, { "homeTitle": "主页标题4", "homeTag": "主页标签", "homeAvatarUrl": "主页头像地址", "homeNickName": "用户主页名称", "homeUploadTime": 2014 - 11 - 13, "homeRemark": "主页备注", "homeComment": "主页内容", "homeImgPath": "主页静态图片" }],
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
  }
})