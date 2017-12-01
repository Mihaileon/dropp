var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');

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

gulp.task('mincss', function () {
    return gulp.src('css/style.css')
        .pipe(cssmin())
        .pipe(gulp.dest('optimization/css'))    
});

var htmlmin = require('gulp-htmlmin');

gulp.task('minhtml', function () {
     return gulp.src('index.html')
    	.pipe(htmlmin({collapseWhitespace: true}))
   	 	.pipe(gulp.dest('optimization'));
});