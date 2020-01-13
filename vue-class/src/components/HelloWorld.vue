<template>
  <div class="hello">
      <el-button type="primary">主要按钮</el-button>
    <div>{{total}}</div>

    <!-- 父组件传值给子组件 -->
    <v-test :msg="msg" @sendchild="getterChild"></v-test>

     <v-testBus></v-testBus>

<v-testVuex></v-testVuex>


  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch,Emit } from "vue-property-decorator";
import { Test,TestBus,TestVuex } from "@/components/module.ts";
//声明组件的语法
@Component({
  components: {
    "v-test": Test,
    'v-testBus':TestBus,
    'v-testVuex':TestVuex
  }
})
export default class HelloWorld extends Vue {
  //声明变量的语法
  private msg: string='我是msgmsg';
  private total: number = 9;

  //使用watch监听数据的方法
  @Watch('total', { immediate: true, deep: true })
  onTotalAdd(val: number, oldval: number):void {
  }

 //子组件传值给父组件的值
private getterChild(msg:string):void{
console.log('我接收到子组件传过来的值',msg)
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
