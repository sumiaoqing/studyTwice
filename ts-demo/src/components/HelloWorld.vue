<template>
  <div class="hello">
   <v-test></v-test>
  </div>
</template>

<script lang="ts">

import {Vue,Component} from 'vue-property-decorator';
import  Test  from "@/components/Test.vue";

//引用组件的写法@Component
@Component({
    components:
    {
      'v-test':Test
    }
})
//父子组件之间值的传递@Prop
 class HelloWorld extends Vue{
    mounted() {
  console.log('000')
}

}
export default HelloWorld
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
