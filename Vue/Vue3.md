# Vue3.0  

## 新功能  
### Composition API  
将同一个逻辑关注点相关代码组合在一起
基于组合API的函数   
ref  
onBeforeCreate  
onMounted  
onBeforeUpdate  
onUpdated  
onBeforeUnmount  
onUnmounted  
watch  
computed  
provide  
inject  
nextTick  
### Teleport  
### Fragments  
Vue3支持一个组件内多根结点

## 功能变更  

### 全局API变更  
#### 新增  
新增createApp，替换new Vue

#### 修改  
Vue.config -> app.config  
Vue.config.ignoredElements -> app.config.isCustomElement
Vue.component -> app.component  
Vue.directive -> app.directive  
Vue.mixin -> app.mixin   
Vue.use -> app.use  
Vue.prototype ->  app.config.globalProperties  

#### 移除  
Vue.config.productionTip  
移除了filters过滤器，使用时不生效不报错  
函数组件在SFC的template function属性已经移除， 函数组件选项已经移除{ functional: true }  
移除了$listeners  
slot里移除了this.$scopedSlots

### 选项变更
data
  在Vue2里根实例的data选项为object对象，其它的为函数；在Vue3里全部为函数

### 指令变更  
v-model  
  1.移除了.sync  
  2.支持同一组件多v-model  
v-if与v-for优先级  
  vue2 v-for高于v-if,vue3 v-if 高于 v-for  
v-bind  
  v-bind的绑定顺序会影响渲染结果  
  在同一元素上使用了v-bind="对象"和单独的属性时：
  1.在vue2 里单独的同名属性会覆盖对象里的同名属性  
  2.在vue3 里可以通过调整顺序来决定覆盖，写在后面的会覆盖前面的  
v-on  
  移除了.native修饰符  
v-for  
  在v-for中使用ref  
  在vue2中ref属性会用数组填充在$ref上，在vue3里可以绑定到一个函数上由函数决定是存储一个数据还是对象等  
过滤指令
v-enter改为v-enter-from
v-leave改为v-leave-from

### 注  
在Vue2里单文件组件里支持多script; 在vue3里不支持多script标签  
在Vue2里只支持单结点根元素，在Vue3里支持多根结点元素  
