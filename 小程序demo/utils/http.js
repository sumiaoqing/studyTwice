import {
  config
} from '../config.js'

class HTTP {
  constructor() {
    this.baseUrl = config.api_blink_url
  }
  request(type="GET",api_router,data={},cb) {
    let that = this
    wx.request({
      url: `${that.baseUrl}${api_router}`,
      data: data,
      method: type,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log(res.data)
        typeof cb=="function" && cb(res.data)
      },
      fail: (err) => {
        console.log(err)
      }
    })
  }
}

export {
  HTTP
}