"use strict";

var gulp = require('gulp');
var requireDir = require('require-dir');

/**
 *  This will load all js files in the gulp directory
 *  in order to load all gulp tasks
 */
requireDir('./gulp', {
    recurse: true
});

gulp.task('default', ['electron-start']);