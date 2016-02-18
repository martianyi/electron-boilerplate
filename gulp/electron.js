"use strict";

var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');

//Loading all gulp plugins
var $ = require('gulp-load-plugins')();

//Livereload tool for Electron https://www.npmjs.com/package/electron-connect
var electron = require('electron-connect').server.create({path: './app/', verbose: true});

gulp.task('electron-start', function () {

    // Start browser process
    electron.start();

    // Restart browser process
    gulp.watch('./app/app.js', electron.restart);

    // Reload renderer process
    gulp.watch([path.join(conf.paths.controllers, '**/*.js'), path.join(conf.paths.views, '**/*.html')], electron.reload);
});