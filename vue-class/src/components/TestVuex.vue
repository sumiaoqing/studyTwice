<template>
  <div class="testVuex">
    <div @click="testDataAdd">{{testData}}</div>
    <div>{{sayhi}}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'

@Component
export default class TestVuex extends Vue {

private sayhi:string='sayhi'

  //直接使用state--->this.testData就是值
 @namespace('testModule').State testData!:string

//使用getters来改变状态--->this.changeTest就是值
@namespace('testModule').Getter changeTest!:string

//使用mutation来改变状态
@namespace('testModule').Mutation SAY_NUMBER!:any

//使用getters来改变状态
private testDataAdd():void
{
  //  this.sayhi=this.changeTest
  this.SAY_NUMBER(1)
}
}
</script>