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

### MAC

构建Mac应用请在macOS/OSX系统下进行,运行`npm run build:mac`命令,将在`dist/mac/`下生成`.app`应用和`dmg`安装包.

### Windows

构建Windows应用请在Windows系统下进行。

开始前安装

1.按照[本页](http://electron.atom.io/docs/development/build-instructions-windows/)的Prerequisites要求安装依赖。

2.安装[NSIS 3.0](http://nsis.sourceforge.net/Download)，并将NSIS路径放入环境变量。命令如下：
`set PATH=%PATH%;C:\Program Files (x86)\NSIS`

之后运行`npm run build:win`命令,将在`dist/win/`下生成软件包以及安装包。

## 常见问题

1. 因为electron被墙无法安装问题

解决方法:
 ```
 export NPM_CONFIG_ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
 npm install electron --save-dev
 ```
详见[issue #76](https://github.com/electron-userland/electron-prebuilt/issues/76), [issue #66](https://github.com/electron-userland/electron-prebuilt/issues/66)

## 已知问题 

1. electron无法使用chrome扩展且尚无支持计划,若需使用屏幕分享功能需要另行开发。详见[issue #1498](https://github.com/atom/electron/issues/1498)
