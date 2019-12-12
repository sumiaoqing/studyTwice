// miniprogram/pages/Web-socket/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  wx.connectSocket({
    url: 'ws://localhost:8080',
  })

wx.onSocketOpen((res)=>
{
  console.log('已经连接')

  wx.sendSocketMessage({
    data: 'hahah'
  })

})


 
 wx.onSocketMessage((res)=>{
   console.log(`${res}ppppppp`)
 })

    wx.onSocketClose( (res)=> {
      console.log(res)
      fail:(err)=>
      {
        console.log('WebSocket 已关闭！')
      }
      
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