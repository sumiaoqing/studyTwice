// components/study/index.js

import {
  HTTP
} from '../../utils/http.js'

let http = new HTTP()

Component({
  // 组件的属性列表
  properties: {
    hah1: String
  },

  /**
   * 页面的初始数据
   */
  data: {
    // hah: 'hffh',
    save:'',
    arr: []
  },
  lifetimes: {
    attached: function() {
      // http.request("POST", "/moods/add", {
      //   title: "我的亚索贼ddd6",
      //   comment: "哈撒给ffff",
      //   time: "2019-3-17"
      // }, (res => {
      //   console.log(res)
      // }))

    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

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
  ,
  methods:
  {
   
  }
})