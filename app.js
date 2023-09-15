const express = require('express');

// 创建 Express 应用程序
const app = express();
const port = process.env.PORT || 3000; // 设置端口号，可以使用环境变量或默认端口3000

// 中间件：处理 HTTP 请求
app.use(express.json()); // 解析 JSON 请求体

// 路由处理程序
app.get('/', (req, res) => {
  res.send('欢迎访问 Express 应用程序！');
});

app.get('/about', (req, res) => {
  res.send('关于我们页面');
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器正在运行在 http://localhost:${port}`);
});
