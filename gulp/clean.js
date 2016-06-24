var gulp = require('gulp');
var del = require('del');
var conf = require('./conf');

gulp.task('clean:mac', function () {
  return del(conf.paths.mac);
});

gulp.task('clean:win', function () {
  return del(conf.paths.win32);
});