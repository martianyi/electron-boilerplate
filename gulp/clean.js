var gulp = require('gulp');
var del = require('del');

gulp.task('clean:osx', function () {
  return del("./dist/osx/**/*");
});

gulp.task('clean:win', function () {
  return del("./dist/win/**/*");
});

gulp.task('clean', function(){
	return del('./dist/**/*')
})