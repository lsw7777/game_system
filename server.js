const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// 创建与数据库的连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'a1156416877',
  database: 'javaweb',
  waitForConnections: true,
  connectionLimit: 10,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 处理登录请求的路由
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // 从连接池获取连接
  pool.getConnection((err, connection) => {
    if (err) {
      throw err;
    }

    // 查询数据库中是否存在匹配的账户
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    connection.query(query, (err, results) => {
      // 释放连接回连接池
      connection.release();

      if (err) {
        console.log('数据库连接失败');
        throw err;
      }

      // 检查结果是否存在匹配的账户
      if (results.length > 0) {
        res.json({ success: true, message: '登录成功' });
      } else {
        res.json({ success: false, message: '用户名或密码错误' });
      }
    });
  });
});

// 启动服务器
app.listen(3000, () => {
  console.log('服务器已启动，监听端口 3000');
});