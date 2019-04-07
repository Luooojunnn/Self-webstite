# Self-webstite
这里存放个人网站的一些代码


# agents-monitor

## 什么是 agents-monitor

现代敏捷软件开发实践中，有一种开发实践叫“持续集成(CI)”，它要求任何时间，任何地点都可⽣成⼀一个可部署的版本。通常在实际开发中，开发⼈员向代码库推送了了代码，会⾃自动触发⼀系列动作，包括代码检查，编译，运⾏测试，打包。这些步骤通过自动化的脚本交给⼀群服务器来运行，我们希望创建 CRUISE 这样⼀个产品，可以⽅便的管理这些服务器 (Agents)，监控或设置它们的状态。

## 如何运行它

现代前端项目基本基于 node 环境进行开发，要运行本项目，首先请确保您本地安装了 [node](https://nodejs.org/en/) ，然后按照以下步骤即可将项目运行起来：

1.

```
  # 进入文件夹
  cd agents-monitor

  # 安装依赖
  npm install

  # 开启本地服务器localhost:8080
   npm run serve
```

2.

```
  # 进入文件夹
  cd mock-serve

  # 安装依赖
  npm install/yarn install

  # 开启本地服务器localhost:3001
   npm start
```
。
