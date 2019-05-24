### 简介

这是一个包含增删查功能的 demo，用于学习练手。效果如下：
![Screen Shot 2019-05-24 at 10.43.20.png](https://i.loli.net/2019/05/24/5ce75a912d8c493588.png)

### 技术栈

##### 前端： bootstrap + react + redux + react-redux + redux-thunk + axios

##### 后端： express + mongoDB

### 安装

###### ps:默认已经安装了 nodejs

- `git clone https://github.com/dengffg/post-react-redux.git`
- `yarn add`

### 运行

- 前端： `yarn start`
- 后端： `nodemon server/server.js`
- 数据库： `mongod`

### 可能遇到的问题

- 启动数据库的时候，报如下错误：
  ![Screen Shot 2019-05-24 at 11.00.54.png](https://i.loli.net/2019/05/24/5ce75e8017a3555485.png)
  解决办法：`sudo mkdir -p data/db`

### 详细参见：https://appdividend.com/2018/06/15/react-redux-axios-tutorial-example/
