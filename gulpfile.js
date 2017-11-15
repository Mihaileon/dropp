var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
  gulp.src('css/*less')
      .pipe(less())
      .pipe(gulp.dest('css'))
});

gulp.task('autoprefixer', function() {
	gulp.src('css/style.css')
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
    }))
        .pipe(gulp.dest('css'));
});