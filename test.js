










// //1. 以下是测试server.js的注册和登录的main
// const { register, login } = require('./server');

// async function main() {
//     try {
//         const regResult1 = await register('testuser', 'testpassword');
//         if (regResult1) {
//             console.log("Test case 1: Registration successful");
//         } else {
//             console.log("Test case 1: Registration failed");
//         }

//         const loginResult1 = await login('testuser', 'testpassword');
//         if (loginResult1) {
//             console.log("Test case 1: Login successful");
//         } else {
//             console.log("Test case 1: Login failed");
//         }

//         const regResult2a = await register('testuser', 'testpassword');
//         if (regResult2a) {
//             console.log("Test case 2: Registration successful");
//         } else {
//             console.log("Test case 2: Registration failed");
//         }

//         const regResult2b = await register('testuser', 'anotherpassword');
//         if (regResult2b) {
//             console.log("Test case 2: Registration successful");
//         } else {
//             console.log("Test case 2: Registration failed");
//         }

//         const loginResult3 = await login('testuser', 'wrongpassword');
//         if (loginResult3) {
//             console.log("Test case 3: Login successful");
//         } else {
//             console.log("Test case 3: Login failed");
//         }

//         const loginResult4 = await login('nonexistentuser', 'testpassword');
//         if (loginResult4) {
//             console.log("Test case 4: Login successful");
//         } else {
//             console.log("Test case 4: Login failed");
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }





// //2. 以下是测试game_input.js的爬虫->后端数据库的main。李扬的爬虫10000条数据中有5000多条能被插入表games，其他的有格式问题
// const { insertGame } = require('./game_input');

// function main() {
//     insertGame();
// }






// //3. 以下是测试game_output.js的后端数据库->前端的main
// const { getTopRankGame } = require('./game_output');

// async function main() {
    
//     //测试game_output.js的后端数据库->前端
//     const iterations = 30;
//     let count = 0;
    
//     //输出排名前30的游戏的所有数据和图片链接
//     while (count < iterations) {
//       try {
//         const topGame = await getTopRankGame();
  
//         // 将每个字段存储在变量中
//         const { id, rank, name, english_name, score, type, release_date, popularity, image_url } = topGame;
  
//         console.log('Iteration', count + 1, ':');
//         console.log('ID:', id);
//         console.log('Rank:', rank);
//         console.log('Name:', name);
//         console.log('English Name:', english_name);
//         console.log('Score:', score);
//         console.log('Type:', type);
//         console.log('Release Date:', release_date);
//         console.log('Popularity:', popularity);
//         console.log('Image URL:', image_url);
//         console.log("\n"); // 输出一个换行符（也等同于输出一个空行）
  
//         count++;
//       } catch (error) {
//         console.error(error);
//         break;
//       }
//     }
//   }
  




//执行main函数
main();


//              node test.js            启动测试代码
//              select * from games;    检查games表
//              drop table games;       删除games表
