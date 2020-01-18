<template>
  <div>
    <template v-for="child in menuData">
      <el-submenu v-if="child.children&&child.children.length>0">
        <template slot="title">
          <span slot="title">{{child.name}}</span>
        </template>
       <menu-tree :menuData="child.children"></menu-tree>
      </el-submenu>


   <el-menu-item v-else :index="child.index">
    {{child.name}}
    </el-menu-item>

    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component(
    {
        name:'menuTree'
    }
)
export default class MenuTree extends Vue {
  @Prop({
    type: Array,
    required: true
  })
  menuData!: Array<any>;
}
</script>