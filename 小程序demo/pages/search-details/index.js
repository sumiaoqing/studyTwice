// pages/search-details/index.js
//引入WxParse 插件

import {
  wxParse,
  wxParseTemArray,
  emojisInit
} from '../../wxParse/wxParse.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchDetailsContent: '<p><strong style=\"color: rgb(51, 51, 51);\">记得那是一个上午，&nbsp;我们正在上语文课，窗户在教室的左边，窗外的阳光照进来，热且刺眼，&nbsp;我看着她极力用本子 当着阳光，我就站了起来，&nbsp;老师问我怎么了？我说有点困，站着听课好一点，&nbsp;那可是上午第二节课，怎么会困呢。。&nbsp;只不过想用自己的身体挡住阳光，让她在我的影子里能够舒服一些。</strong></p></br><p><strong style=\"color: rgb(51, 51, 51);\">记得那是一个上午，&nbsp;我们正在上语文课，窗户在教室的左边，窗外的阳光照进来，热且刺眼，&nbsp;我看着她极力用本子 当着阳光，我就站了起来，&nbsp;老师问我怎么了？我说有点困，站着听课好一点，&nbsp;那可是上午第二节课，怎么会困呢。。&nbsp;只不过想用自己的身体挡住阳光，让她在我的影子里能够舒服一些。</strong></p></br><p><strong style=\"color: rgb(51, 51, 51);\">记得那是一个上午，&nbsp;我们正在上语文课，窗户在教室的左边，窗外的阳光照进来，热且刺眼，&nbsp;我看着她极力用本子 当着阳光，我就站了起来，&nbsp;老师问我怎么了？我说有点困，站着听课好一点，&nbsp;那可是上午第二节课，怎么会困呢。。&nbsp;只不过想用自己的身体挡住阳光，让她在我的影子里能够舒服一些。</strong></p>',
  searchLinkTag:['骚套路','国服上分','大神专用','教你怎么玩劫']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //然后调用详情页的接口
    console.log(options)
    let _this = this;
    let a=wxParse('searchDetailsContent', 'html', this.data.searchDetailsContent, _this)
    // console.log(a.searchDetailsContent.nodes);
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
  ,
  //点击收藏按钮触发的事件
  collectArticle:function()
  {
    console.log('收藏成功')
  }
})