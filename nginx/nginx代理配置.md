

### nginx代理配置

    location ^~ /api/ {
        proxy_pass http://192.168.0.199:8000/;
    }