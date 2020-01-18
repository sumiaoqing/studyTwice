element-ui使用要点

---

1. el-scrollbar的使用

``` 
1.包裹在组件的外面 
2.定义一个类设置高度为100%
3.如果出现横向滚动条 使用  /deep/  .el-scrollbar__wrap{overflow-x:hidden;}
https://www.jianshu.com/p/6538698578f5
```

2. 后台管理系统的自动向左移动向右移动

``` 
 .el-menu {
        @extend %h100; 
      overflow: inherit;
      border-right: none;
      &::-webkit-scrollbar {---将滚动条隐藏
        display: none;
      }
      }
  .el-menu-vertical:not(.el-menu--collapse) {---设置nav-menu的宽度
      width: 200px;
      @extend %h100;
      overflow-y: scroll;
    }
    最为重要的一点---设置父元素的宽度为auto
  .nav-block__left {
  height: 100%;
  width: auto !important;
   background-color:#304156;
}
```

3. element-ui的nav-menu的多级菜单列表的渲染

``` 
https://blog.csdn.net/yujie0716006/article/details/83502693
**注意：**要在一个组件中，递归调用他自己需要在这个组件上面，要设置name名字。 在动态加载导航时，若一个标题是一个三级标题，那么他的path路径（是绝对路径）的组成是由：/（根路径）/一级标题路径/二级标题路径/三级标题路径组成。多级标题的path都是绝对路径，并且是路由出口
```

