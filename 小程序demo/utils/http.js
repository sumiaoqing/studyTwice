import {
  config
} from '../config.js'

class HTTP {
  constructor() {
    this.baseUrl = config.api_blink_url
  }
  request(obj) {
    let that = this
    wx.request({
      url: `${that.baseUrl}${obj.api_router}`,
      data: obj.data,
      method: obj.type,
      header: {
        'content-type': 'application/json'
      },
      success:(res)=>
      {
        console.log(res)
        obj.success && obj.success(res.data)
      },
      fail:(err)=>
      {
        console.log(err)
      }
    })
  }
}

export {HTTP}