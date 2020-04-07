<template>
  <div class="hello">
    <div @click="firstGo">0000</div>
    <div @click="goToWXScore">{{giveAuth}}</div>
  </div>
</template>

<script>
// import wx from "weixin-js-sdk";
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg1: "",
      giveAuth: "给予授权",
      data: {},
      timestamp: "",
      nonceStr: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    compareVersion(v1, v2) {
      v1 = v1.split(".");
      v2 = v2.split(".");
      const len = Math.max(v1.length, v2.length);

      while (v1.length < len) {
        v1.push("0");
      }
      while (v2.length < len) {
        v2.push("0");
      }

      for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i]);
        const num2 = parseInt(v2[i]);

        if (num1 > num2) {
          return 1;
        } else if (num1 < num2) {
          return -1;
        }
      }
      return 0;
    },

    firstGo() {

      console.log(wx)
      //判断是否微信浏览器
      // eslint-disable-next-line no-useless-escape
      let wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i);
      let wechatVersion = wechatInfo[1];
      if (this.compareVersion(wechatVersion, "7.0.5") < 0) {
        // 提示用户升级微信客户端版本
        window.href =
          "https://support.weixin.qq.com/cgi-bin/readtemplate?t=page/common_page__upgrade&text=text005&btn_text=btn_text_0";
      }
      let signUrl = window.location.href.split("#")[0];
      axios
        .get(
          `http://114.80.222.219:8088/noConfirmation/getSignature?url=${signUrl}`
        )
        .then(res => {
          alert(JSON.stringify(res));
          console.log(res);
          this.timestamp = res.data.timestamp;
          this.nonceStr = res.data.nonceStr;
          wx.config({
            debug: true,
            appId: res.data.appId,
            timestamp: res.data.timestamp,
            nonceStr: res.data.nonceStr,
            signature: res.data.signature,
            jsApiList: ["openBusinessView"]
          });
        })
        .catch(err => console.log(err));
    },

    goToWXScore() {
      axios
        .get(
          `http://114.80.222.219:8088/noConfirmation/user-service-auth?nonceStr=${this.nonceStr}&timestamp=${this.timestamp}`
        )
        .then(res => {
          this.data = res.data.data;
          let that=this
          wx.checkJsApi({
            jsApiList: ["openBusinessView"], // 需要检测的JS接口列表
            success: function(res) {
              // 以键值对的形式返回，可用的api值true，不可用为false
              // 如：{"checkResult":{"openBusinessView":true},"errMsg":"checkJsApi:ok"}

              alert('9999')
              alert(JSON.stringify(res))
              if (res.checkResult.openBusinessView==true) {    
                alert('0000')
                alert(that.data.mch_id)  
                alert(that.data.service_id)     
                alert(that.data.out_request_no)
                alert(that.data.timestamp)
                alert(that.data.nonce_str)
                alert(that.data.sign_type)
                alert(that.data.sign)
                wx.invoke(
                  "openBusinessView",
                  {
                    businessType: "wxpayScoreEnable",
                    queryString: `mch_id=${that.data.mch_id}&service_id=${that.data.service_id}&out_request_no=${that.data.out_request_no}&timestamp=${that.data.timestamp}&nonce_str=${that.data.nonce_str}&sign_type=${that.data.sign_type}&sign=${that.data.sign}`
                  },
                 function(res) {
                  alert(JSON.stringify(res))
                    // 从微信侧小程序返回时会执行这个回调函数
                    if (parseInt(res.err_code) === 0) {
                      // 返回成功
                      alert("返回成功");
                    } else {
                      // 返回失败
                      alert("返回失败");
                    }
                  }
                )
              }
            },
            fail:function(err)
            {
              alert(JSON.stringify(err))
            }
          });
        })
        .catch(err => alert(JSON.stringify(err)));
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
