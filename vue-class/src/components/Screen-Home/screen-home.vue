<template>
  <div class="main-block__content">
    <div class="left-block__content">
      <el-scrollbar class="el-scroll">
        <el-menu
         :default-active="$route.name"
          :collapse="isCollapse"
          class="el-menu-vertical"
          background-color="#03152A"
          text-color="rgba(255,255,255,.7)"
          active-text-color="#ffffff"
          :collapse-transition="true"
          :router="true"
        >
        
          <template v-for="item in mockData">
            <el-submenu v-if="item.children&&item.children.length>0" :index="item.index">
              <template slot="title">
                <span slot="title">{{item.name}}</span>
              </template>

              <menu-tree :menuData="item.children"></menu-tree>
            </el-submenu>

            <el-submenu v-else>
              <span slot="title">{{item.name}}</span>
            </el-submenu>
          </template>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="right-block__content">

      <div class="right-block__header">
<div @click="changeIsCollapse">展开</div>
    </div>
    <div class="right-block__article">
      <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
const MenuTree = () => import("@/components/Screen-Home/menu-tree.vue");
@Component({
  components: {
    "menuTree": MenuTree
  }
})
export default class ScreenHome extends Vue {
  private isCollapse: boolean = false;
  private mockData: any = [
    {
     name:'法师英雄',
     index:'/fashi',
     children:[{name:'诡术妖姬',index:'yaoji'},{name:'发条魔灵',index:'moling'}]
    },
    {
    name:'战士英雄',
    index:'zhanshi',
    children:[{name:'疾风剑豪',index:'/jianhao'},{name:'洛克萨斯',index:'/luoke'}]
    }
  ]

private changeIsCollapse():void
{
  this.isCollapse=!this.isCollapse
}



}
</script>

<style lang="scss" scoped>
.main-block__content {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}
.left-block__content {
  width: auto !important;
  height: 100%;
  background-color: #03152a;
}
.right-block__content {
  flex: 1;
  height: 100%;
  background-color: blue;
  display: flex;
  flex-direction: column;
}

.right-block__article
{
  flex: 1;
 width: 100%;
}

.right-block__header
{
height: 100px;
width: 100%;
background-color: yellow;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  overflow-y: scroll;
}

.el-menu {
  height: 100%;
  overflow: inherit;
  border-right: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
/deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}
.el-scroll {
  height: 100%;
}
</style>