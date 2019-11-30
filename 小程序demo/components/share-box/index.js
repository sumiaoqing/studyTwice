// components/share-box/index.js
Component({
  //组件的初始化函数
  lifetimes: {
    attached: function() {
      this.drawPic()
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    //属性值可以在组件使用时指定


  },

  /**
   * 组件的初始数据
   */
  data: {
    imgDraw: {}, //展示的海报的对象
    sharePath: '', //生成的分享图
    isPainter: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //绘制生成模板
    drawPic: function() {
      wx.showLoading({
        title: '生成中'
      })
      this.setData({
        imgDraw: {
          width: '750rpx',
          height: '1334rpx',
          background: 'https://qiniu-image.qtshe.com/20190506share-bg.png',
          views: [{
              type: 'image',
              url: 'http://localhost:3000/public/home-img/小鱼人.jpeg',
              css: {
                top: '32rpx',
                left: '30rpx',
                right: '32rpx',
                width: '688rpx',
                height: '420rpx',
                borderRadius: '16rpx'
              },
            },
            {
              type: 'image',
              url: wx.getStorageSync('userAvatarUrl') || 'https://qiniu-image.qtshe.com/default-avatar20170707.png',
              css: {
                top: '404rpx',
                left: '328rpx',
                width: '96rpx',
                height: '96rpx',
                borderWidth: '6rpx',
                borderColor: '#FFF',
                borderRadius: '96rpx'
              }
            },
            {
              type: 'text',
              text: wx.getStorageSync('userNickName') || '鲸落',
              css: {
                top: '532rpx',
                fontSize: '28rpx',
                left: '375rpx',
                align: 'center',
                color: '#3c3c3c'
              }
            },
            {
              type: 'text',
              text: `邀您畅游峡谷资讯`,
              css: {
                top: '576rpx',
                left: '375rpx',
                align: 'center',
                fontSize: '28rpx',
                color: '#3c3c3c'
              }
            },
            {
              type: 'text',
              text: `前端技术菜鸡小青哥`,
              css: {
                top: '644rpx',
                left: '375rpx',
                maxLines: 1,
                align: 'center',
                fontWeight: 'bold',
                fontSize: '44rpx',
                color: '#3c3c3c'
              }
            },
            {
              type: 'image',
              url: 'http://localhost:3000/public/home-img/小青哥.png',
              css: {
                top: '834rpx',
                left: '470rpx',
                width: '200rpx',
                height: '200rpx'
              }
            }
          ]
        }
      })
    },
    //成功生成图片
    onImgOk: function(e) {
      wx.hideLoading()
      this.setData({
        sharePath: e.detail.path
      })
    },
   //保存图片
    savePic:function()
    {
      wx.showLoading({
        title: '正在保存...',
        mask: true
      })
      wx.saveImageToPhotosAlbum({
        filePath: this.data.sharePath,
        success: (res) => {
          wx.showToast({
            title: '保存成功',
            icon: 'none'
          })
          //退出界面
          this.triggerEvent('cancelScreen')
          },
        fail:(res)=>
        {
          console.log(res)
          wx.showToast({
            title: '保存失败',
            icon: 'none'
          })
          this.triggerEvent('cancelScreen')
        }
      })
    } 
    ,//退出界面
    cancelScreenShot:function()
    {
      this.triggerEvent('cancelScreen')
    }
  }
})