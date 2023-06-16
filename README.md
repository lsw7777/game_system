# game_system

/*

#0612：边震和刘苏文提交

#目前只支持在本地开启mysql服务后的注册、登录、游戏插入、游戏提取。

#排行榜.txt是李扬的爬虫结果（10000条游戏数据）

#边震的server.js被刘苏文修改，有register函数用于注册（将用户名、密码插入users表），有login函数用于登录（在users表中查询输入的用户名和密码）

#game_input.js有insertGame函数将爬虫部分结果（5000多条）插入games表

#games_output.js有getTopRankGame函数取得排名最高的游戏记录后并将该游戏记录从games表中删除

#test.js有main函数，用于测试以上三个模块



0614：刘苏文提交
# 重写了后端接口，只需要app.js和user.js，终端输入node app.js运行

# 修正了排行榜.txt中几行的格式


0616
# 前端同学修改了后端接口，前后端能正常同时运行了

# 运行方法

# 在vscode打开前后端的文件夹，前端终端输入npm start，后端终端输入node app.js，此时前端自动开启edge浏览器的端口号为3000的网站首页。

# 使用本地数据库


*/
