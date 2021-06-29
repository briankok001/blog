

# Vue3目录结构及主要文件  

```

├──packages
├────compiler-core (编译的核心目录，与平台无关，提供模板编译)
├──────src
├────────index.ts (编译的统一入口文件，提供方法的导出入口)
├────────compile.ts (baseCompile编译函数，通过baseParse编译模板返回ast; 通过transform对ast进行转换处理)
├────────parse.ts (编译的核心文件，核心编译方法parseChildren，循环解析模板字符串返回编译后的Node对象树)
├────────transform.ts (主要提供包装上下文创建转换，transform对ast进行处理创建一个上下文把components,directives,imports,hoists,temps,cached挂载到ast上)
├────────ast.ts (提供AST(抽象语法树)基础模型的创建)
├────────codegen.ts (对ast转成渲染函数字符串)
├────────runtimeHelpers.ts
├────────transforms
├──────────vBind.ts
├──────────vFor.ts
├──────────vIf.ts
├──────────vShow.ts
├──────────vModel.ts
├──────────vOnce.ts
├──────────vSlot.ts
├──────────transformElement.ts
├──────────transformExpression.ts
├──────────noopDirectiveTransform.ts
├──────────transformSlotOutlet.ts
├──────────transformText.ts
├────compiler-dom
├──────src
├────────index.ts (模板编译入口文件，核心方法compile，通过对baseCompile进行编译返回渲染函数)
├────────parseOptions.ts
├────────decodeHtml.ts
├────────decodeHtmlBrowser.ts
├────────transforms
├──────────vHtml.ts
├──────────vModel.ts
├──────────vOn.ts
├──────────vShow.ts
├──────────vText.ts
├────compiler-sfc
├────compiler-ssr (服务端渲染)
├────reactivity (Vue的响应式系统)
├──────src
├────────index.ts (提供API的导出)
├────────reactive.ts (对象响应式处理)
├────────ref.ts (值类型响应式处理,ref也可以应用对象不过最终还是会使用reactive.ts进行响应式处理)
├────────baseHandlers.ts
├────────computed.ts
├────────effect.ts
├────runtime-core
├──────src
├────────index.ts (入口文件提供runtime-core API的导出)
├────────renderer.ts (渲染核心文件， 核心方法baseCreateRenderer, patch是核心的核心)
├────────h.ts
├────────hydration.ts
├────────vnode.ts (创建VNode)
├────────apiCreateApp.ts (提供了创建createApp的API方法createAppAPI，以闭包的方式返回createApp方法)
├────────apiComputed.ts
├────────apiDefineComponent.ts
├────────apiLifeCycle.ts
├────────apiWatch.ts
├────────componentEmits.ts
├────────componentOptions.ts
├────────componentProps.ts
├────────componentPublicInstance.ts
├────────componentRenderContext.ts
├────────componentSlots.ts
├────runtime-dom
├──────src
├────────index.ts (对外暴露createApp方法进行实例化Vue)
├────────nodeOps.ts (提供了操作原生DOM的API，DOM的创建，删除，赋值，插入)
├────────patchProp.ts (提供了操作原生DOM属性的API，DOM属性赋值如class,style属性，原生事件的添加)
├────────components
├────────directives
├──────────vModel.ts
├──────────vOn.ts
├──────────vShow.ts
├────────helopers
├────────modules
├──────────attrs.ts
├──────────class.ts
├──────────events.ts
├──────────props.ts
├──────────style.ts
├────runtime-test
├────server-renderer
├────sfc-playground
├────shared
├────size-check
├────template-explorer
├────vue
├──────src
├────────index.ts (应用的初始入口文件，当应用加载初始化时通过registerRuntimeCompiler 方法把compileToFunction注入到runtime-core/component)
├────────runtime.ts
├────vue-compat
├────global.d.ts

```