  //index.js
  //获取应用实例

  import {
    HTTP
  } from '../../utils/http.js'


  let http = new HTTP()

  const app = getApp()

  Page({
    data: {
      currentData: 0,
      homePageAmount: [],
      currentPage: 1,
      size: 4,
      study:'0000'
    },
    //上拉加载更多
    onReachBottom: function() {
      let _this = this
      wx.showLoading({
        title: '玩命加载中',
      })
      _this.setData({
        currentPage: _this.data.currentPage + 1
      })
      this.gethomeData(this.data.currentPage, this.data.size)
      wx.hideLoading();
    },
    //下拉刷新
    onPullDownRefresh: function() {
      console.log('666')
      let _this = this
      wx.showLoading({
        title: '刷新中',
      })
      _this.setData({
        currentPage: 1
      })
      this.gethomeData(this.data.currentPage, this.data.size)
      wx.hideLoading();
      wx.stopPullDownRefresh();
    },
    onStudy: function() {
      // 传递单个参数

      // wx.navigateTo({
      //   url: '../about/index?id=888&&happy=8989'
      // })

      //传递对象
      // wx.navigateTo({
      //   url: '../about/index?testobj=' + JSON.stringify(this.data.testObj)
      // })
    },
    onLoad: function() {

      this.gethomeData(this.data.currentPage, this.data.size)

    },
    //获取主页数据的homeData接口
    gethomeData(currentPage, size) {
      http.request('GET', `/homeData/${currentPage}/${size}`, {}, (res) => {
        for (let i = 0; i < res.length; i++) {
          res[i].homeComment = ""
        }
        this.setData({
          homePageAmount: res.data
        })
      })
    },
    //控制选中的选项卡
    selectCurrentData: function(e) {
      const that = this
      that.setData({
        currentData: e.currentTarget.dataset.current
      })
    },
    //控制选项卡内容更改
    swiperChange: function(e) {
      const that = this
      if (that.data.currentData === e.detail.current) {
        return
      } else {
        that.setData({
          currentData: e.detail.current
        })
      }
    },
    //主页面搜索框的内容
    homeSearch: function() {
      console.log('主页搜索框')
      wx.navigateTo({
        url: '../home-search/index'
        //  url: '../search-completed/index'
      })
    },
    //跳转到文章的详情页
    jumpDetails: function(e) {
      console.log(e.currentTarget.dataset.detail)
      wx.navigateTo({
        url: `../search-details/index?clickContent=${e.currentTarget.dataset.detail._id}`
      })
      http.request()
    }
  })