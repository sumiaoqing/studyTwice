// pages/tourism/index.js


import {
  HTTP
} from '../../utils/http.js'


let http = new HTTP()



Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyRecord:[],
    myCollection:[],
    watchHistory:[],
    userNickName:'',
    userAvatarUrl:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ userNickName:wx.getStorageSync('userNickName')})
    this.setData({userAvatarUrl:wx.getStorageSync('userAvatarUrl')})
    http.request('GET','/personal',{},(res)=>
    {
      this.setData({
        watchHistory: res[0].watchHistory
      })
      let postWatchString=''
      for(let i=0;i<this.data.watchHistory.length;i++)
      {
        postWatchString += `${this.data.watchHistory[i].watch_Id},`
      }
      postWatchString = postWatchString.slice(0, postWatchString.length-1)
      http.request('GET', `/personalData/${postWatchString}`,{},(res)=>
      {
        this.setData({
          watchHistory: res
        })
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})