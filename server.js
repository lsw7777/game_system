// server.js

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test'
});

connection.connect(function(err){
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log("Connected to MySQL database");
    
    // 创建users表
    connection.query(`CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );`, function(error, results, fields) {
        if (error) {
            console.error(error);
            return;
        }
        console.log('Users table created successfully');
    });
});


// function register(username, password) {
//     let query = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;

//     connection.query(query, function(error, results, fields) {
//         if (error) {
//             console.error(error);
//             return false;
//         }
//         console.log("User registered successfully");
//         return true;
//     });
// }


// function login(username, password) {
//     let query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

//     connection.query(query, function(error, results, fields) {
//         if (error) {
//             console.error(error);
//             return false;
//         }
//         if (results.length > 0) {
//             console.log("User found");
//             return true;
//         }
//         console.log("User not found");
//         return false;
//     });
// }

// function register(username, password) {
//     let query = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;

//     return new Promise(function(resolve, reject) {
//         connection.query(query, function(error, results, fields) {
//             if (error) {
//                 console.error(error);
//                 reject(false);
//             } else {
//                 console.log("User registered successfully");
//                 resolve(true);
//             }
//         });
//     });
// }


function register(username, password) {
    let queryCheck = `SELECT * FROM users WHERE username = '${username}'`;
    let queryInsert = `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`;

    return new Promise(function(resolve, reject) {
        connection.query(queryCheck, function(error, results, fields) {
            if (error) {
                console.error(error);
                reject(false);
            } else if (results.length > 0) {
                console.log("User already exists");
                resolve(false);
            } else {
                connection.query(queryInsert, function(error, results, fields) {
                    if (error) {
                        console.error(error);
                        reject(false);
                    } else {
                        console.log("User registered successfully");
                        resolve(true);
                    }
                });
            }
        });
    });
}








function login(username, password) {
    let query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    return new Promise(function(resolve, reject) {
        connection.query(query, function(error, results, fields) {
            if (error) {
                console.error(error);
                reject(false);
            } else if (results.length > 0) {
                console.log("User found");
                resolve(true);
            } else {
                console.log("User not found");
                resolve(false);
            }
        });
    });
}







module.exports = {
    register,
    login
};