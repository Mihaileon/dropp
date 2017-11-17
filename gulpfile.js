var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
  gulp.src('css/*less')
      .pipe(less())
      .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
      }))
      .pipe(gulp.dest('css'))
});

gulp.task('less:watch', function() {
    gulp.watch('css/*less',['less']);
    gulp.watch('css/blocks/*less',['less']);
});    