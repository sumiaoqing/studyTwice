<template>
  <div id="app">
<!-- <v-helloworld></v-helloworld> -->
<router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue,Prop } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue';

//ts中使用@Component来载入子组件
@Component({
  components:{
    // 'v-helloworld':HelloWorld
  }
})
export default class App extends Vue {
  //ts使用@prop来实现父子传值
    // @Prop(String)
    // propA:string;
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
