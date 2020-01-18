<template>
  <div class="id">
    <div>我是test</div>
    <div>{{msg}}</div>
    <div @click="emitBus">哈哈哈</div>
  </div>
</template>

<script lang="ts">
import {  Vue,Component,Prop,Emit } from "vue-property-decorator";

@Component
export default class Test extends Vue
{
private child:string='子组件的值'

  @Prop({
    type:String,
    required:false,
    default:''
  }) msg!:string

  private mounted():void
  {
    this.sendChild(this.child)
  }

private emitBus():void
{
  console.log('-----触发了总线bus')
 //触发总线bus
   this.$bus.emit('testbus','触发了总线bus')
}

//子组件向父组件传值
@Emit('sendchild')
sendChild(child:string):void{ console.log('我已经把值传给父组件')}



}

</script>