// const mysql = require('mysql2');
// const fs = require('fs');

// // 将游戏数据插入到 games 表中
// function insertGame() {
//     const connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '1234',
//         database: 'test'
//     });

//     // 创建 games 表
//     connection.query(`CREATE TABLE IF NOT EXISTS games (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         rank INT NOT NULL,
//         name VARCHAR(255) NOT NULL UNIQUE,
//         english_name VARCHAR(255) NOT NULL,
//         score FLOAT NOT NULL,
//         type VARCHAR(255) NOT NULL,
//         release_date DATE NOT NULL,
//         popularity INT NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//     );`, function(error, results, fields) {
//         if (error) throw error;
//         console.log('Games table created successfully');
//     });

//     // 读取排行榜.txt文件
//     fs.readFile('./排行榜.txt', 'utf8', function (err, data) {
//         if (err) throw err;

//         // 将游戏名称和英文名称的逗号替换成其他字符或空格
//         data = data.replace(/([^,]),([^,])/g, '$1 $2');

//         // 将数据按行分割成数组
//         const lines = data.split(/\r?\n/);

//         // 遍历每一行数据，插入到 games 表中
//         for (let i = 0; i < lines.length; i++) {
//             const fields = lines[i].split(',');
//             const rank = parseInt(fields[0]);
//             const name = fields[1];
//             const englishName = fields[2];
//             const score = parseFloat(fields[3]);
//             const type = fields[4];
//             const releaseDate = fields[5];
//             const popularity = parseInt(fields[6]);
//             const imageUrl = fields[7];

//             const sql = `
//                 INSERT INTO games (rank, name, english_name, score, type, release_date, popularity, image_url)
//                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//                 ON DUPLICATE KEY UPDATE
//                     rank = VALUES(rank),
//                     name = VALUES(name),
//                     english_name = VALUES(english_name),
//                     score = VALUES(score),
//                     type = VALUES(type),
//                     release_date = VALUES(release_date),
//                     popularity = VALUES(popularity),
//                     image_url = VALUES(image_url)
//             `;

//             const values = [rank, name, englishName, score, type, releaseDate, popularity, imageUrl];

//             connection.query(sql, values, function (error, results, fields) {
//                 //错误点
//                 if (error) throw error;
//                 console.log(`Game ${name} inserted successfully`);
//             });
//         }

//         // 关闭数据库连接
//         connection.end();
//     });
// }

// module.exports = { insertGame };



// const mysql = require('mysql2');
// const fs = require('fs');

// // 将游戏数据插入到 games 表中
// function insertGame() {
//     const connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '1234',
//         database: 'test'
//     });

//     // 创建 games 表
//     connection.query(`CREATE TABLE IF NOT EXISTS games (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         rank INT NOT NULL,
//         name VARCHAR(255) NOT NULL UNIQUE,
//         english_name VARCHAR(255) NOT NULL,
//         score FLOAT NOT NULL,
//         type VARCHAR(255) NOT NULL,
//         release_date DATE NOT NULL,
//         popularity INT NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//     );`, function(error, results, fields) {
//         if (error) throw error;
//         console.log('Games table created successfully');
//     });

//     // 读取排行榜.txt文件
//     fs.readFile('./排行榜.txt', 'utf8', function (err, data) {
//         if (err) throw err;

//         // 将游戏名称和英文名称的逗号替换成其他字符或空格
//         data = data.replace(/([^,]),([^,])/g, '$1 $2');

//         // 将数据按行分割成数组
//         const lines = data.split(/\r?\n/);

//         // 遍历每一行数据，插入到 games 表中
//         for (let i = 0; i < lines.length; i++) {
//             const fields = lines[i].split(',');
//             const rank = parseInt(fields[0]);
//             const name = fields[1];
//             const englishName = fields[2];
//             const score = parseFloat(fields[3]);
//             const type = fields[4];
//             const releaseDate = fields[5];
//             const popularity = parseInt(fields[6]);
//             const imageUrl = fields[7];

//             console.log(`Inserting game: ${rank} ${name} ${englishName} ${score} ${type} ${releaseDate} ${popularity} ${imageUrl}`);

//             const sql = `
//                 INSERT INTO games (rank, name, english_name, score, type, release_date, popularity, image_url)
//                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//                 ON DUPLICATE KEY UPDATE
//                     rank = VALUES(rank),
//                     name = VALUES(name),
//                     english_name = VALUES(english_name),
//                     score = VALUES(score),
//                     type = VALUES(type),
//                     release_date = VALUES(release_date),
//                     popularity = VALUES(popularity),
//                     image_url = VALUES(image_url)
//             `;

//             const values = [rank, name, englishName, score, type, releaseDate, popularity, imageUrl];

//             connection.query(sql, values, function (error, results, fields) {
//                 if (error) throw error;
//                 console.log(`Game ${name} inserted successfully`);
//             });
//         }

//         // 关闭数据库连接
//         connection.end();
//     });
// }

// module.exports = { insertGame };








// const mysql = require('mysql2');
// const fs = require('fs');

// // 将游戏数据插入到 games 表中
// function insertGame() {
//     const connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '1234',
//         database: 'test'
//     });

//     // 创建 games 表
//     connection.query(`CREATE TABLE IF NOT EXISTS games (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         rank INT NOT NULL,
//         name VARCHAR(255) NOT NULL UNIQUE,
//         english_name VARCHAR(255) NOT NULL,
//         score FLOAT NOT NULL,
//         type VARCHAR(255) NOT NULL,
//         release_date DATE NOT NULL,
//         popularity INT NOT NULL,
//         image_url VARCHAR(255) NOT NULL
//     );`, function(error, results, fields) {
//         if (error) throw error;
//         console.log('Games table created successfully');
//     });

//     // 读取排行榜.txt文件
//     fs.readFile('./排行榜.txt', 'utf8', function (err, data) {
//         if (err) throw err;

//         // 将数据按行分割成数组
//         const lines = data.split(/\r?\n/);

//         // 遍历每一行数据，插入到 games 表中
//         for (let i = 0; i < lines.length; i++) {
//             const fields = lines[i].split(',');
//             const rank = parseInt(fields[0]);
//             const name = fields[1];
//             const englishName = fields[2];
//             const score = parseFloat(fields[3]);
//             const type = fields[4];
//             const releaseDate = fields[5];
//             const popularity = parseInt(fields[6]);
//             const imageUrl = fields[7];

//             console.log(`Inserting game: ${rank} ${name} ${englishName} ${score} ${type} ${releaseDate} ${popularity} ${imageUrl}`);

//             const sql = `
//                 INSERT INTO games (rank, name, english_name, score, type, release_date, popularity, image_url)
//                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//                 ON DUPLICATE KEY UPDATE
//                     rank = VALUES(rank),
//                     name = VALUES(name),
//                     english_name = VALUES(english_name),
//                     score = VALUES(score),
//                     type = VALUES(type),
//                     release_date = VALUES(release_date),
//                     popularity = VALUES(popularity),
//                     image_url = VALUES(image_url)
//             `;

//             const values = [rank, name, englishName, score, type, releaseDate, popularity, imageUrl];

//             connection.query(sql, values, function (error, results, fields) {
//                 if (error) throw error;
//                 console.log(`Game ${name} inserted successfully`);
//             });
//         }

//         // 关闭数据库连接
//         connection.end();
//     });
// }

// module.exports = { insertGame };








// const mysql = require('mysql2');
// const fs = require('fs');

// // 将游戏数据插入到 games 表中
// function insertGame() {
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'test'
//   });

//   // 创建 games 表
//   connection.query(`CREATE TABLE IF NOT EXISTS games (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     rank INT NOT NULL,
//     name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL UNIQUE,
//     english_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
//     score FLOAT NOT NULL,
//     type VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
//     release_date DATE NOT NULL,
//     popularity INT NOT NULL,
//     image_url VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
//   );`, function(error, results, fields) {
//     if (error) throw error;
//     console.log('Games table created successfully');
//   });

//   // 读取排行榜.txt文件
//   fs.readFile('./排行榜.txt', 'utf8', function (err, data) {
//     if (err) throw err;

//     // 将数据按行分割成数组
//     const lines = data.split(/\r?\n/);

//     // 遍历每一行数据，插入到 games 表中
//     for (let i = 0; i < lines.length; i++) {
//       const fields = lines[i].split(',');
//       const rank = parseInt(fields[0]);
//       const name = fields[1];
//       const englishName = fields[2];
//       const score = parseFloat(fields[3]);
//       const type = fields[4];
//       const releaseDate = fields[5];
//       const popularity = parseInt(fields[6]);
//       const imageUrl = fields[7];

//       console.log(`Inserting game: ${rank} ${name} ${englishName} ${score} ${type} ${releaseDate} ${popularity} ${imageUrl}`);

//       const sql = `
//                 INSERT INTO games (rank, name, english_name, score, type, release_date, popularity, image_url)
//                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//                 ON DUPLICATE KEY UPDATE
//                     rank = VALUES(rank),
//                     name = VALUES(name),
//                     english_name = VALUES(english_name),
//                     score = VALUES(score),
//                     type = VALUES(type),
//                     release_date = VALUES(release_date),
//                     popularity = VALUES(popularity),
//                     image_url = VALUES(image_url)
//             `;

//       const values = [rank, name, englishName, score, type, releaseDate, popularity, imageUrl];

//       connection.query(sql, values, function (error, results, fields) {
//         if (error) throw error;
//         console.log(`Game ${name} inserted successfully`);
//       });
//     }

//     // 关闭数据库连接
//     connection.end();
//   });
// }

// module.exports = { insertGame };









// 

const mysql = require('mysql2');
const fs = require('fs');

// 将游戏数据插入到 games 表中
function insertGame() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
  });

  // 创建 games 表
  connection.query(`CREATE TABLE IF NOT EXISTS games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rank INT NOT NULL,
    name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL UNIQUE,
    english_name VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    score FLOAT DEFAULT NULL,
    type VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    release_date DATE DEFAULT NULL,
    popularity INT DEFAULT NULL,
    image_url VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
  );`, function(error, results, fields) {
    if (error) throw error;
    console.log('Games table created successfully');
  });

  // 读取排行榜.txt文件
  fs.readFile('./排行榜.txt', 'utf8', function (err, data) {
    if (err) throw err;

    // 将数据按行分割成数组
    const lines = data.split(/\r?\n/);

    // 遍历每一行数据，插入到 games 表中
    for (let i = 0; i < lines.length; i++) {
      const fields = lines[i].split(',');
      const rank = parseInt(fields[0]);
      const name = fields[1];
      const englishName = fields[2];
      const score = parseFloat(fields[3]) || null;
      const type = fields[4];
      const releaseDate = fields[5] ? new Date(fields[5]) : null;
      const popularity = parseInt(fields[6]) || null;
      const imageUrl = fields[7];

      console.log(`Inserting game: ${rank} ${name} ${englishName} ${score} ${type} ${releaseDate} ${popularity} ${imageUrl}`);

      const sql = `
                INSERT INTO games (rank, name, english_name, score, type, release_date, popularity, image_url)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                ON DUPLICATE KEY UPDATE
                    rank = VALUES(rank),
                    name = VALUES(name),
                    english_name = VALUES(english_name),
                    score = VALUES(score),
                    type = VALUES(type),
                    release_date = VALUES(release_date),
                    popularity = VALUES(popularity),
                    image_url = VALUES(image_url)
            `;

      const values = [rank, name, englishName, score, type, releaseDate, popularity, imageUrl];

      connection.query(sql, values, function (error, results, fields) {
        if (error) console.error(error.stack);
        console.log(`Game ${name} inserted successfully`);
      });
    }

    // 关闭数据库连接
    connection.end();
  });
}

module.exports = { insertGame };
