
### 版本
|  版本    | 日期  |
| -----   | ----  |
http 0.9  | 1991
http 1.0  | 1996
http 1.1  | 1997
http SPDY | 2010
http 2.0  | 2015
http 3.0  | 2019


#### http 0.9  
只支持 get  
不支持请求头  

#### http 1.0  
请求中增加了协议版本号  
支持请求和响应头  
增加了状态码  
支持content-type  

#### http 1.1  
可以设置keepalive重用TCP连接  
支持pipeline网络传输  
增加了cache control缓存机制  
增加了host请求头  
增加options 方法  

#### http SPDY  
支持在一个TCP连接中并发多个http请求，多路复用    
请求头压缩  

#### http 2  
http 2 是http SPDY 的复刻  

#### http 3  
基于UDP  