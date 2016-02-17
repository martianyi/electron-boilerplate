# Electron Seed

## 调试

clone本项目至本地,cd到项目目录,运行`npm install`安装依赖, 运行`npm start`查看

## 打包应用

运行`npm run build`命令, 打包好的应用位于dist文件夹下

## 已知问题 

1. 目前在OSX系统下使用electron-packager打包Windows应用存在一定问题,需要在windows系统下进行打包测试
Github issue地址:https://github.com/maxogden/electron-packager/issues/218#issuecomment-184985574
2. electron无法使用chrome扩展且尚无支持计划,若需使用屏幕分享功能需要另行开发
Github issue地址:https://github.com/atom/electron/issues/1498
