// const mysql = require('mysql2');

// function getTopRankGame() {
//   const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'test'
//   });

//   return new Promise((resolve, reject) => {
//     connection.query(`
//       SELECT *
//       FROM games
//       ORDER BY rank ASC
//       LIMIT 1;
//     `, (error, results, fields) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results[0]);
//       }
//     });
//   }).finally(() => {
//     connection.end();
//   });
// }

// module.exports = { getTopRankGame };



const mysql = require('mysql2');

function getTopRankGame() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
  });

  return new Promise((resolve, reject) => {
    let topGame;

    // 开始事务
    connection.beginTransaction(function (error) {
      if (error) {
        reject(error);
        return;
      }

      // 查询 rank 值最小的游戏
      connection.query(`
        SELECT *
        FROM games
        ORDER BY rank ASC
        LIMIT 1;
      `, function (error, results, fields) {
        if (error) {
          return connection.rollback(function () {
            reject(error);
          });
        }

        topGame = results[0];

        // 删除查询结果行
        connection.query(`DELETE FROM games WHERE id = ?;`, [topGame.id], function (error, results, fields) {
          if (error) {
            return connection.rollback(function () {
              reject(error);
            });
          }

          // 提交事务
          connection.commit(function (error) {
            if (error) {
              return connection.rollback(function () {
                reject(error);
              });
            }
            resolve(topGame);
          });
        });
      });
    });
  }).finally(() => {
    connection.end();
  });
}

module.exports = { getTopRankGame };

