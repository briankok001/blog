# 使用cnpm搭建私有npm仓库

### 环境准备  
+ linux
+ nodejs
+ mysql

### 一、安装mysql  
安装方法参考网上  

### 二、下载，安装cnpm  
#### 下载  
git clone https://github.com/cnpm/cnpmjs.org.git  

#### 安装cnpm依赖 
npm i  

### 三、创建数据库、表  
登录mysql  
mysql -u root -p

创建数据库  
create database npm;  

创建数据库表  
在cnpmjs.org目录下执行    
source docs/db.sql;

### 配置  
配置文件 config/index.js

数据库配置  



    database: {
      db: 'npm',
      username: 'root',
      password: '123456',

      // the sql dialect of the database
      // - currently supported: 'mysql', 'sqlite', 'postgres', 'mariadb'
      dialect: 'mysql',

      // custom host; default: 127.0.0.1
      host: '127.0.0.1',

      // custom port; default: 3306
      port: 3306,

      // use pooling in order to reduce db connection overload and to increase speed
      // currently only for mysql and postgresql (since v1.5.0)
      pool: {
        maxConnections: 10,
        minConnections: 0,
        maxIdleTime: 30000
      },

      dialectOptions: {
        // if your server run on full cpu load, please set trace to false
        trace: true,
      },

      // the storage engine for 'sqlite'
      // default store into ~/.cnpmjs.org/data.sqlite
      storage: path.join(dataDir, 'data.sqlite'),

      logging: !!process.env.SQL_DEBUG,
    },

配置 npm 安装源   
ip为服务器ip,端口为7001  
registryHost: '182.22.2.128:7001', 

