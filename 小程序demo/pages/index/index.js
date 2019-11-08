//index.js
//获取应用实例

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    testObj:{test:'test'}
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
  onLoad: function() {
  }
})