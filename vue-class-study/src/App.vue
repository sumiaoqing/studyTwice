<template>
  <div id="app">
    <!-- <HelloWorld /> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    // HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,body,#app
{
  width: 100%;
  height: 100%;
  margin: 0px;
}
</style>
