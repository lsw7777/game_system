//      netstat -ano | findstr :8080
//      kill
//      node app.js

const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 8080;
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
  }));

// 创建MySQL数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  //port: "3306",
  user: "root",
  password: "1234",
  database: "test",
});

// 连接到MySQL数据库
connection.connect((error) => {
  if (error) throw error;

  console.log("Connected to MySQL database!");
})
//   // 创建users表
//   connection.query(
//     `CREATE TABLE IF NOT EXISTS users (
//             id INT PRIMARY KEY AUTO_INCREMENT,
//             username VARCHAR(20) NOT NULL,
//             password VARCHAR(50) NOT NULL
//         )`,
//     (error, results, fields) => {
//       if (error) throw error;
//       console.log("Users table created successfully!");

//       // 创建games表
//       connection.query(
//         `CREATE TABLE IF NOT EXISTS games (
//                     id INT AUTO_INCREMENT PRIMARY KEY,
//                     gamerank INT DEFAULT NULL,
//                     name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL UNIQUE,
//                     english_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//                     score FLOAT DEFAULT NULL,
//                     type VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
//                     release_date DATE DEFAULT NULL,
//                     popularity INT DEFAULT NULL,
//                     image_url VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
//                 )`,
//         (error, results, fields) => {
//           if (error) throw error;
//           console.log("Games table created successfully!");

//           // 读取txt文件中的排行榜数据，并插入到games表中
//           fs.readFile("./排行榜.txt", "utf-8", (err, data) => {
//             if (err) throw err;

//             const gameList = data.split("\n");

//             for (let i = 0; i < gameList.length; i++) {
//               const gameData = gameList[i].split(",");

//               const rank = parseInt(gameData[0], 10) || null; // 字段类型为 INT，默认值为 NULL

//               //const name = gameData[1];
//               //const name = gameData[1].replace(/"/g, "'");
//               //const name = gameData[1] ? gameData[1].replace(/"/g, "'") : '';
//               const name = gameData[1] ? gameData[1].replace(/"/g, "") : "";

//               //const englishName = gameData[2] || null; // 字段类型为 VARCHAR，默认值为 NULL
//               const englishName = gameData[2]
//                 ? gameData[2].replace(/"/g, "")
//                 : "";
//               const score = parseFloat(gameData[3]) || null; // 字段类型为 FLOAT，默认值为 NULL
//               const type = gameData[4] || null; // 字段类型为 VARCHAR，默认值为 NULL

//               let releaseDate = gameData[5] || null;

//               if (releaseDate === "未显示发布时间") {
//                 releaseDate = null;
//               } else if (releaseDate) {
//                 const dateRegex = /^(\d{4})-?(\d{2})-?(\d{2})$/;
//                 const matchResult = releaseDate.match(dateRegex);

//                 if (!matchResult) {
//                   releaseDate = null;
//                 } else {
//                   const year = matchResult[1];
//                   const month = matchResult[2].padStart(2, "0");
//                   const day = matchResult[3].padStart(2, "0");
//                   releaseDate = `${year}-${month}-${day}`;
//                 }
//               }

//               const popularity = parseInt(gameData[6], 10) || null; // 字段类型为 INT，默认值为 NULL
//               const imageUrl = gameData[7] || null; // 字段类型为 VARCHAR，默认值为 NULL

//               connection.query(
//                 `INSERT INTO games (gamerank, name, english_name, score, type, release_date, popularity, image_url) 
//                                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
//                 [
//                   rank,
//                   name,
//                   englishName,
//                   score,
//                   type,
//                   releaseDate,
//                   popularity,
//                   imageUrl,
//                 ],
//                 (error, results, fields) => {
//                   if (error) throw error;
//                 }
//               );
//             }

//             console.log("Game data inserted successfully!");
//           });
//         }
//       );
//     }
//   );
// });

// 使用body-parser解析请求体数据
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// 注册功能的接口
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  // 首先查询是否已存在相同用户名的用户
  connection.query(
    `SELECT * FROM users WHERE username='${username}'`,
    (error, results, fields) => {
      if (error) throw error;
      if (results && results.length > 0) {
        res.send({
          success: false,
          message: "该用户名已被占用，请重新输入！",
        });
      } else {
        // 如果不存在，则将新用户保存到数据库中
        connection.query(
          `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`,
          (error, results, fields) => {
            if (error) throw error;
            res.send({
              success: true,
              message: "注册成功！",
            });
          }
        );
      }
    }
  );
});



// 登录功能的接口
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // 查询是否存在对应的用户记录
  connection.query(
    `SELECT * FROM users WHERE username='${username}' AND password='${password}'`,
    (error, results, fields) => {
      if (error) throw error;
      if (results && results.length > 0) {
        res.send({
          success: true,
          message: "登录成功！",
        });
      } else {
        res.send({
          success: false,
          message: "用户名或密码错误，请重新输入！",
        });
      }
    }
  );
});

// 按游戏名称查询游戏信息的接口（POST请求）
app.post("/games/name", (req, res) => {
  const { name } = req.body;

  // 查询是否存在对应名称的游戏记录
  connection.query(
    `SELECT * FROM games WHERE name LIKE '%${name}%';`,
    (error, results, fields) => {
      if (error) throw error;
      if (results && results.length > 0) {
        res.send({
          success: true,
          message: "查询成功！",
          data: results.slice(0, 50),
        });
      } else {
        res.send({
          success: false,
          message: "不存在该游戏信息！",
        });
      }
    }
  );
});

// 按游戏类型查询游戏信息的接口（POST请求）
app.post("/games/type", (req, res) => {
  const { type } = req.body;

  // 查询是否存在对应类型的游戏记录
  connection.query(
    `SELECT * FROM games WHERE type='${type}'`,
    (error, results, fields) => {
      if (error) throw error;
      if (results && results.length > 0) {
        res.send({
          success: true,
          message: "查询成功！",
          data: results.slice(0, 200),
        });
      } else {
        res.send({
          success: false,
          message: "不存在该类型的游戏信息！",
        });
      }
    }
  );
});

// 按游戏排名查询游戏信息的接口（POST请求）
app.post("/games/rank", (req, res) => {
  const { minRank, maxRank } = req.body;

  // 查询排名在指定范围内的游戏记录
  connection.query(
    `SELECT * FROM games WHERE rank >= ${minRank} AND rank <= ${maxRank}`,
    (error, results, fields) => {
      if (error) throw error;
      if (results && results.length > 0) {
        res.send({
          success: true,
          message: "查询成功！",
          data: results,
        });
      } else {
        res.send({
          success: false,
          message: "不存在该排名区间的游戏信息！",
        });
      }
    }
  );
});

// 按游戏分数查询游戏信息的接口（POST请求）
app.post("/games/score", (req, res) => {
  const { minScore, maxScore } = req.body;

  // 查询分数在指定范围内的游戏记录
  connection.query(
    `SELECT * FROM games WHERE score >= ${minScore} AND score <= ${maxScore}`,
    (error, results, fields) => {
      if (error) throw error;
      if (results && results.length > 0) {
        res.send({
          success: true,
          message: "查询成功！",
          data: results,
        });
      } else {
        res.send({
          success: false,
          message: "不存在该分数区间的游戏信息！",
        });
      }
    }
  );
});

// 按游戏热度查询游戏信息的接口（POST请求）
app.post("/games/popularity", (req, res) => {
  const { minPopularity, maxPopularity } = req.body;

  // 查询热度在指定范围内的游戏记录
  connection.query(
    `SELECT * FROM games WHERE popularity >= ${minPopularity} AND popularity <= ${maxPopularity}`,
    (error, results, fields) => {
      if (error) throw error;
      if (results && results.length > 0) {
        res.send({
          success: true,
          message: "查询成功！",
          data: results,
        });
      } else {
        res.send({
          success: false,
          message: "不存在该热度区间的游戏信息！",
        });
      }
    }
  );
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
