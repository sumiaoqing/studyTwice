// pages/about/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    save: 'save',
    happy: 'happy',
    testObj: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //传递单个参数的接收
    // this.setData({
    //   save: options.id,
    //   happy:options.happy
    // })
    // console.log(this.data.save)
    // console.log(this.data.happy)

    //传递对象的接受
    this.setData({
      testObj: JSON.parse(options.testobj)
    })
    console.log(typeof this.data.testObj)
    // console.log(typeof options.testobj);
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

  }
})