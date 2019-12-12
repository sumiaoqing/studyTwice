// components/children/index.js
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

  },

  lifetimes: {
    //子组件传递给父组件的信息
    attached: function () {
      this.triggerEvent('myevent',{uu:'fff'})
    }
    
    },

  /**
   * 组件的方法列表
   */
  methods: {
     say666:function()
     {
       console.log('666')
     }
  }
})
