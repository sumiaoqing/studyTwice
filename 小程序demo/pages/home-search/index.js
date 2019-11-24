// pages/home-search/index.js

import {
  HTTP
} from '../../utils/http.js'


let http = new HTTP()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    everybodySearch: [],
    searchHistory: [],
    isSearchExist: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },



  //获取个人记录的接口
  getPersonal: function() {
    http.request('GET', '/personal', {}, (res) => {
      console.log(res)
      this.setData({
        searchHistory: res
      })
    })
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
    http.request('GET', '/search', {}, (res) => {
      this.setData({
        everybodySearch: res[0].searchTag
      })
    })
    this.getPersonal();
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
  //取消搜索
  cancelSearch:function()
  {
    console.log('hah')
    // wx.navigateTo({
    //   url: '../home/index'
    // })

  },
  //点击标签搜素
  tagSearch: function(e) {
    this.postEverybodySearch(e)
    wx.navigateTo({
      url: `../search-completed/index?search=${e.currentTarget.dataset.searchtag}`
    })
  },
  //将大家都在搜的标签加入历史记录
  postEverybodySearch(e) {
    let userSearchTime = new Date()
    let userNickName = wx.getStorageSync('userNickName')
    http.request("POST", "/personal-add", {
      "searchNickName": userNickName,
      "searchHistory": e.currentTarget.dataset.searchtag,
      "searchTime": userSearchTime
    }, (res) => {})
  },
  //点击×标志，删除搜索历史记录
  deleteSearch: function(e) {
    console.log(e.currentTarget.dataset.deletesearch)
    http.request('DELETE', '/personal-delete', {
      "_id": e.currentTarget.dataset.deletesearch
    }, (res) => {
      //未解决小程序的页面不刷新！important
    })
  },
  isClearHistory: function() {
    this.deleteHistory()
    this.setData({
      isSearchExist: false
    })
    //后续也是接口操作，暂时不写
  },
  //清除历史记录接口函数
  deleteHistory: function() {
    this.deleteHistoryRequest()
  },
  //清除搜索历史的接口请求
  deleteHistoryRequest: function() {
    let userNickName = wx.getStorageSync('userNickName')
    http.request('DELETE', '/personal-delete', {
      "searchNickName": userNickName
    })
  },
  //点击搜索历史跳转
  historyJump: function(e) {
    wx.navigateTo({
      url: `../search-completed/index?search=${e.currentTarget.dataset.historyjump}`
    })
  }
})