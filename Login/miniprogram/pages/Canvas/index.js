// miniprogram/pages/Canvas/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0, // 设置 计数器 初始为0
    countTimer: null // 设置 定时器 初始为null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.drawProgress() //绘制背景
    // this.drawWhiteCircle(2) //绘制白色圆环
    this.countInterval();
  },

  /**
   * 绘制背景方法
   */
  drawProgress: function() {
    let ctx = wx.createCanvasContext('canvasProgressbg', this)
    ctx.setLineWidth(4); // 设置圆环的宽度
    ctx.setStrokeStyle('#20183b'); // 设置圆环的颜色
    ctx.setLineCap('round') // 设置圆环端点的形状

    ctx.beginPath(); //开始一个新的路径
    ctx.arc(110, 110, 100, 0, 2 * Math.PI, false);
    //设置一个原点(110,110)，半径为100的圆的路径到当前路径
    ctx.stroke(); //对当前路径进行描边
    ctx.draw();

  },
  /**
   * 绘制白色圆环
   */
  drawWhiteCircle: function(step) {
    var ctx = wx.createCanvasContext('canvasProgress', this);
    ctx.setStrokeStyle('#fff');
    ctx.setLineWidth(10);
    ctx.setLineCap('round')
    ctx.beginPath();
    // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
    ctx.arc(110, 110, 100, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
    ctx.stroke();
    ctx.draw()
  },
  /**
   *设置定时器
   */
countInterval:function()
{
  this.countTimer=setInterval(()=>
  {
    if (this.data.count <= 300) {
      /* 绘制彩色圆环进度条  
      注意此处 传参 step 取值范围是0到2，
      所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
      */
      this.drawWhiteCircle(this.data.count / (300 / 2))
      this.data.count++;
  }
  },100
  )
}
,
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