##### 深入理解ts

1. tsconfig.json---compilerOptions(指定编译选项)
2. 声明空间

```
类型声明空间例:
interface Bar{} let bar:Bar
变量声明空间例：
class Foo{} const someVar=Foo
```

3. Es模块语法

```
export导出变量或者类型
export a=123 或 const a=123 export {a}
import引入模块
import {a} from xxx
重写类型的动态查找---通过declare module来声明一个全局模块的方法，用来解决查找模块路径问题
例： declare module test {export let bar:number}
接着： import * as from 'foo'
!!!---global.d.ts用来定义一些接口或者类型
```

4. vue的ts装饰器中，使用！来声明一些未赋值的变量

``` 
例：@Prop() private msg!:string;(声明是string类型)
```

5. vue的自定义指令https://juejin.im/post/5a3933756fb9a045167d52b1   

   Vue.directive( id, [definition] )

6. 子组件向父组件传递

``` 
子组件：1.声明要传递的值
private child:string='子组件的值'
2.定义@emit函数
@Emit('sendchild')
sendChild(child:string):void{ console.log('我已经把值传给父组件')}
3.触发函数
this.sendChild(this.child)
父组件：
1.监听方法
 <v-test :msg="msg" @sendchild="getterChild"></v-test>
2.打印出监听的值
 //子组件传值给父组件的值
private getterChild(msg:string):void{
console.log('我接收到子组件传过来的值',msg)
}
```

7. 父组件向子组件传值

``` 
父组件：<v-test :msg="msg"></v-test>
子组件： @Prop({
    type:String,
    required:false,
    default:''---// 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
  }) msg!:string
```

8. 非父子组件传值

``` 
https://www.npmjs.com/package/vue-bus
使用总线bus 安装vue-bus
全局挂载import VueBus from 'vue-bus'
Vue.use(VueBus)
testbus是监听事件的页面
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
test是触发事件的页面
<div @click="emitBus">哈哈哈</div>
private emitBus():void
{
  console.log('-----触发了总线bus')
 //触发总线bus
   this.$bus.emit('testbus','触发了总线bus')
}
```

9. vuex的使用---vuex-class装饰器

```
https://juejin.im/post/5c6774156fb9a049eb3c778f
使用vuex中的module
例:创建一个test模块
const test=
{
namespaced: true,//开启模块模式
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {

  }
}
在store.js中暴露对象
const store=new Vuex.Store({
  modules:
  {
    testModule
  }
})

export default store
全局挂载后
使用namespace的两种方式---state状态
1.@Component
class MyComponent extends Vue{
    @namespace(' testModule').State testData!: string;
}
2.const  testModule = namespace(" testModule")
@Component
class MyComponent extends Vue{
    @TestModule.State testData!: string;
}
getters---在vue-class中的使用
 getters:
  {
    changeTest:(state:any)=>
    {
      return state.testData+state.testHa
    }
  }
  @namespace('testModule').Getter changeTest!:string
action---mountain---类似如下语法
@namespace('testModule').Mutation SAY_NUMBER!:any
 SAY_NUMBER(state:any,val:number)
    {
      state.number+=val
       console.log(state.number)
    }
    this.SAY_NUMBER(1)
```

10. vue+ts中使用element

``` 
https://juejin.im/post/5c9dc965e51d4512967dd74c
npm包的安装
1.改变babal.comfig.js文件
2.main.ts文件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```

11. router的劫持

```

```

