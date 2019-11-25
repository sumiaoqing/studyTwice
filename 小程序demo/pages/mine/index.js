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
    myFavorite:[],
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
        watchHistory: res[0].watchHistory,
        myFavorite: res[0].myFavorite
      })
      console.log(this.data.myFavorite)
      // this.getWatchHistory(this.data.watchHistory)
      // this.getmyFavorite(this.data.myFavorite)
     
    })
  },
//历史记录请求接口的操作
getWatchHistory:function(arr)
{
  // let postWatchString = ''
  // for (let i = 0; i < this.data.watchHistory.length; i++) {
  //   postWatchString += `${this.data.watchHistory[i].watch_Id},`
  // }
  // postWatchString = postWatchString.slice(0, postWatchString.length - 1)
  let postWatchString = this.getHttpData(arr,'watch_Id')
  http.request('GET', `/personalData/${postWatchString}`, {}, (res) => {
    this.setData({
      watchHistory: res
    })
  })
}
,
//收藏夹的请求接口的操作
  getmyFavorite:function(arr)
  {
    let postWatchString = this.getHttpData(arr, 'fileDataId')
    http.request('GET', `/personalData/${postWatchString}`, {}, (res) => {
      this.setData({
        myFavorite: res
      })
    })
  },
  //封装请求多少接口的函数
  getHttpData: function (arr, property)
{
  let postWatchString = ''
  for (let i = 0; i < arr.length; i++) {
    postWatchString += `${arr[i][property]},`
  }
    postWatchString = postWatchString.slice(0, postWatchString.length - 1)
    return postWatchString
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