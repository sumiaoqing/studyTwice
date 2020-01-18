<template>
  <div class="testbus">
   <div>我的值是{{testBusData}}</div>
  </div>
</template>

<script lang="ts">
import {  Vue,Component } from "vue-property-decorator";

@Component
export default class TestBus extends Vue
{

private testBusData:string=''


private mounted():void
{
  //监听事件---on后面跟着的应该是事件名,清除事件off
  this.$bus.on('testbus',this.getterBus)
}

private getterBus(data:any):void
{
  console.log(data,'----接受到的对象')
  this.testBusData=data
}

}

</script>