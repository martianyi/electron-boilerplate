"use strict";

var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');

//Loading all gulp plugins
var $ = require('gulp-load-plugins')();

var electron = require('electron-connect').server.create();

gulp.task('electron-start', function () {

    // Start browser process
    electron.start();

    // Restart browser process
    gulp.watch('app.js', electron.restart);

    // Reload renderer process
    gulp.watch([path.join(conf.paths.controllers, '**/*.js'), path.join(conf.paths.views, '**/*.html')], electron.reload);
});