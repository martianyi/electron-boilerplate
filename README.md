# Electron Seed

## 快速开始

clone本项目至本地,cd到项目目录,运行`npm install`安装依赖, 运行`npm start`查看

```bash
git clone git@git.learning-tech.cn:realtimecat/electron-seed.git
cd electron-seed
npm install
npm start
```

## 项目结构

本项目有两个`package.json`文件

`electron-seed/package.json`文件中声明devDependencies, 这些依赖不随应用发布.
`electron-seed/app/package.json`中声明dependencies, 打包应用时随应用发布.


## 构建应用

运行`npm run build`命令, 打包好的应用位于dist文件夹下

**Windows 构建警告** 需要一字不差地按照[本页](http://electron.atom.io/docs/v0.36.7/development/build-instructions-windows/)的说明进行构建。

## 已知问题 

1. electron无法使用chrome扩展且尚无支持计划,若需使用屏幕分享功能需要另行开发
Github issue地址:https://github.com/atom/electron/issues/1498
