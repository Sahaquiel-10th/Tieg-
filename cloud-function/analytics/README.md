# 铁狗咖啡活动统计函数

这是最小统计版：前端把事件发到腾讯云函数，函数写入运行日志。

## 记录的事件

- `page_view`: 打开页面
- `finish_test`: 完成测试，包含 `result` 和 `result_title`
- `save_poster`: 点击保存海报

## 腾讯云函数设置

1. 进入腾讯云函数 SCF 控制台，创建或打开现有函数。
2. 运行环境选择 Node.js。
3. 把 `index.js` 的内容复制到函数入口文件。
4. 函数入口保持 `index.main`。
5. 开启函数 URL 或 HTTP 触发访问。
6. 复制公网 URL。
7. 回到项目 `script.js`，把顶部的 `ANALYTICS_ENDPOINT` 改成这个 URL。

```js
const ANALYTICS_ENDPOINT = "https://你的函数URL";
```

## 查看数据

在函数运行日志里搜索：

```text
IRON_DOG_EVENT
```

再按事件名筛选，例如：

```text
"event":"finish_test"
```

按结果统计：

```text
"result":"A"
"result":"B"
"result":"C"
"result":"D"
```

## 性能

前端优先用 `navigator.sendBeacon` 上报，不等待响应，不阻塞页面跳转或渲染。
