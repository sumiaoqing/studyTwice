// pages/search-completed/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData:0,
    swiperData: [{ "name": "999" }, { "name": "nufff" }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //搜索完成页面展示
console.log(options)
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

  },
  swiperChange:function(e)
  {
    const that = this
    if (that.data.currentData === e.detail.current) {
      return
    } else {
      that.setData({
        currentData: e.detail.current
      })
    }
  },
  selectCurrentData:function(e)
  {
    const that = this
    that.setData({
      currentData: e.currentTarget.dataset.current
    })
  }
})