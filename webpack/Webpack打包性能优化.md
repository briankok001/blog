
# Webpack打包性能优化  

### 性能检测  
检查loader, plugin的耗时：  
speed-measure-webpack-plugin   

可视化包检查：
webpack-bundle-analyzer  


### 优化项  
#### 优化extensions   
优化extensions配置，缩小extensions范围，调整优先级  


#### ts-loader  
1.安装：  
fork-ts-checker-webpack-plugin   
@typescript-eslint/parser   
@typescript-eslint/eslint-plugin  

2.添加transpileOnly: true,

    {
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            appendTsSuffixTo: [/.vue$/]
          }
        }
      ],
      exclude: /node_modules/
    },

3.配置ForkTsCheckerWebpackPlugin插件

    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: _resolve('../tsconfig.json'),
      },
      eslint: {
        files: '../src/**/*.{ts,js}'
      }
    }),

#### 缓存  
开发模式下开启缓存  

    cache: {
      type: 'memory',
    },

#### modules  
配置modules加快查找  
  
    resolve: {
      modules: [_resolve('../node_modules')],
    }