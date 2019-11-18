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
    // let user = wx.getStorageSync('userNickName')
    // console.log(user)

    http.request('GET', '/search', {}, (res) => {
      this.setData({
        everybodySearch: res[0].searchTag
      })
    })


    this.getPersonal();



  },
  //获取个人记录的接口
  getPersonal: function() {
    http.request('GET', '/personal', {}, (res) => {
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
  //点击标签搜素
  tagSearch: function(e) {
    console.log(e.currentTarget.dataset.searchtag)
    wx.navigateTo({
      url: `../search-completed/index?search=${e.currentTarget.dataset.searchtag}`
    })
  },
  //点击×标志，删除搜索历史记录
  deleteSearch: function(e) {
    let temporary = this.data.searchHistory.filter(item => item.searchNickName != e.currentTarget.dataset.deletesearch.searchNickName)
    this.setData({
      searchHistory: temporary
    })
    //后续应该是操作接口的操作，暂时不写
  },
  isClearHistory: function() {
    this.setData({
      searchHistory: []
    })
    this.setData({
      isSearchExist: false
    })
    //后续也是接口操作，暂时不写
  }
})