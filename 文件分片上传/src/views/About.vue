<template>
  <div class="about">
    <h1 @touchstart.prevent="touchStart">This is an about page</h1>
    <div id="qrcode"></div>

    <uploader
      :options="options"
      :autoStart="false"
      class="uploader-example"
    
      @file-success="onFileSuccess"
      @file-progress="onFileProgress"
      @file-error="onFileError"
    >
      <uploader-unsupport></uploader-unsupport>
      <uploader-drop>
        <p>请选择方式上传</p>
        <uploader-btn>select files</uploader-btn>
        <uploader-btn :attrs="attrs">select images</uploader-btn>
        <uploader-btn :directory="true">select folder</uploader-btn>
      </uploader-drop>
      <uploader-list></uploader-list>
    </uploader>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  private touchStart(): void {
    console.log("666");
  }

  private QRCode: any;
  public attrs: any = { accept: "image/*" };
  public options: any = {
    target: "/sysMatter/upload", //目标上传的url
    chunkSize: "2048000", //分块的大小
    fileParameterName: "file", //上传文件时文件的参数名，默认file
    maxChunkRetries: 3, //最大自动失败重试上传次数
    testChunks: true, //是否开启服务器分片校验
    // 服务器分片校验函数，秒传及断点续传基础
    // checkChunkUploadedByResponse: function(chunk: any, message: any) {
    //   let objMessage = JSON.parse(message);
    //   if (objMessage.skipUpload) {
    //     return true;
    //   }
    //   return (objMessage.uploaded || []).indexOf(chunk.offset + 1) >= 0;
    // },
    headers: {
      // 在header中添加的验证
      Authorization: "Bearer " + "affa2840-6378-4c70-8666-089ad935eb37"
    }
  };

  //文件上传成功
 private onFileSuccess(rootFile:any, file:any, response:any, chunk:any):void
 {
  console.log('上传成功')
 }


  //文件进度的回调
  private onFileProgress(rootFile: any, file: any, chunk: any): void {
    console.log(
      `上传中 ${file.name}，chunk：${chunk.startByte /
        1024 /
        1024} ~ ${chunk.endByte / 1024 / 1024}`
    );
  }

  //文件失败的回调
  private onFileError(rootFile: any, file: any, response: any, chunk: any) {
    console.log("error");
  }

  mounted() {
    //生成二维码
    this.qrCode("http://www.baidu.com");
  }

  private qrCode(url: any): void {
    let qrcode = new this.QRCode("qrcode", {
      width: 100, //图像宽度
      height: 100, //图像高度
      colorDark: "#000000", //前景色
      colorLight: "#ffffff", //背景色
      typeNumber: 4,
      correctLevel: this.QRCode.CorrectLevel.H //容错级别 容错级别有：（1）QRCode.CorrectLevel.L （2）QRCode.CorrectLevel.M （3）QRCode.CorrectLevel.Q （4）QRCode.CorrectLevel.H
    });
    qrcode.clear(); //清除二维码
    qrcode.makeCode(url); //生成另一个新的二维码
  }
}
</script>

<style lang="scss" scoped>
.about {
  background-color: red;
}
</style>


