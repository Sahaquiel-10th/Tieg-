# Web 函数版统计接口

腾讯云函数配置选 Web 函数时使用这个包。

## 创建函数怎么填

- 函数类型：Web 函数
- 函数名称：`tiego`
- 地域：上海
- 运行环境：Nodejs 20.19
- 时区：UTC 或 Asia/Shanghai 都可以
- 提交方法：本地上传 zip 包
- 函数代码：上传 `analytics-web-function.zip`
- 启动命令：留空或填下面完整脚本

```bash
#!/bin/bash

export PORT=9000

/var/lang/node20/bin/node server.js
```

## 资源配置建议

- 资源类型：CPU
- 内存：128MB 或 512MB 都可以
- 临时存储：0.5GB
- 初始化超时时间：65 秒可保留
- 执行超时时间：3 秒足够
- 日志投递：启用，默认投递
- 触发器：函数 URL

函数创建后复制函数 URL，填到项目 `script.js` 顶部：

```js
const ANALYTICS_ENDPOINT = "你的函数URL";
```
