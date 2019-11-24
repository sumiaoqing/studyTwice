// pages/search-details/index.js
//引入WxParse 插件

import {
  wxParse,
  wxParseTemArray,
  emojisInit
} from '../../wxParse/wxParse.js'

import {
  HTTP
} from '../../utils/http.js'


let http = new HTTP()
let user = wx.getStorageSync('userNickName')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    singleHomeData: {}, //单个页面的数据
    isCollected: true,
    _id: '',
  },
  //获取单个数据的接口
  getSingleHomeData(options) {
    http.request('GET', `/singleHomeData/${options.clickContent}`, {}, (res) => {
      this.setData({
        singleHomeData: res
      })
      if (res.homeCollectCount.collectUser.includes(user)) {
        this.setData({
          isCollected: true
        })
      } else {
        this.setData({
          isCollected: false
        })
      }
      let _this = this;
      wxParse('searchDetailsContent', 'html', this.data.singleHomeData.homeComment, _this)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //然后调用详情页的接口
    this.setData({
      _id: options.clickContent
    })
    this.getSingleHomeData(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //点击收藏按钮触发的事件
  collectArticle: function() {
  this.isLike()
  }, //点赞的取消与否
  isLike: function() {
    if (this.data.isCollected == true) {
      this.data.singleHomeData.homeCollectCount.collectNumber = this.data.singleHomeData.homeCollectCount.collectNumber - 1
      this.data.singleHomeData.homeCollectCount.collectUser = this.data.singleHomeData.homeCollectCount.collectUser.filter(item => item != user)
      this.isLikePost()
      this.setData({
        isCollected: false
      })
    } else {
      this.data.singleHomeData.homeCollectCount.collectNumber = this.data.singleHomeData.homeCollectCount.collectNumber + 1
      this.data.singleHomeData.homeCollectCount.collectUser.push(user)
      this.isLikePost()
      this.setData({
        isCollected: true
      })
    }
  }, //是否收藏的接口
  isLikePost: function() {
    http.request('POST', `/editSingleHomeDataCollect/${this.data._id}`, this.data.singleHomeData, (res) => {
      console.log('成功')
    })
  }
})