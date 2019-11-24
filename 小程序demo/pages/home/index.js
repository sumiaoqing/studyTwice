  //index.js
//获取应用实例

import {
  HTTP
} from '../../utils/http.js'


let http = new HTTP()

const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    currentData: 0,
    homePageAmount: [],
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

this.gethomeData()

  },
  //获取主页数据的homeData接口
  gethomeData()
  {
    http.request('GET','/homeData',{},(res)=>
    {
      this.setData({
        homePageAmount:res
      })
    })
  },
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