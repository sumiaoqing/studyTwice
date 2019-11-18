// components/search-bar/index.js

import {HTTP} from "../../utils/http.js"
let http =new HTTP()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    inputSearch:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //搜索栏回车触发的函数
    searchContent:function(e)
    {
    
      this.postPersonal(e)
      this.jumpSearchComplated(e)


    },
   //将搜索记录传递过去
    postPersonal:function(e)
    {
      let userSearchTime = new Date()
      let userNickName = wx.getStorageSync('userNickName')
      http.request("POST", "/personal-add", { "searchNickName": userNickName, "searchHistory": e.detail.value, "searchTime": userSearchTime }, (res) => {
      })
    },
   //跳转搜索完成详情页
   jumpSearchComplated(e)
   {
     wx.navigateTo({
       url: `../search-completed/index?search=${e.detail.value}`
     })
   },      
  }
})
