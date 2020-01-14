import {
  config
} from '../config.js'

class PRO{
  constructor() {
    this.baseUrl = config.api_blink_url
  }
  request(type, api_router, data) {
    let that = this
    let promise=new Promise((resolve,reject)=>
    {

      wx.request({
        url: `${that.baseUrl}${api_router}`,
        data: data,
        method: type,
        // 'application/x-www-form-urlencoded'
        header: {
          'content-type': 'application/json;charset=UTF-8'
        },
        dataType: 'json',
        success: (res) => {
           resolve(res)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
    return promise
  }
}

export {
  PRO
}