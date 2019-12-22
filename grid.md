### display:grid

---

#### 作用在grid容器上的css属性

##### 1. grid-template-columns和grid-template-rows

###### 按块来表示

``` 
.container {
    grid-template-columns: 80px auto 100px;
    grid-template-rows: 25% 100px auto 60px;
}
```

![基本尺寸划分示意图](https://image.zhangxinxu.com/image/blog/201811/2018-11-04_210143.png)



###### 按网格线来表示

```
.container {
    grid-template-columns: [第一根纵线] 80px [纵线2] auto [纵线3] 100px [最后的结束线];
    grid-template-rows: [第一行开始] 25% [第一行结束] 100px [行3] auto [行4] 60px [行末];
}
```

##### `fr`是单词fraction的缩写，表示分数

```
.container {
    grid-template-columns:200px 1fr 1fr 1fr;
}---列三等分
```

##### 2.grid-template-areas

```
grid-template-areas: 
    "<grid-area-name> | . | none | ..."
    "...";
 grid-area-name---对应网格区域的名称
 .---表示空的网格单元格
 none---没有定义的网格区域
```



