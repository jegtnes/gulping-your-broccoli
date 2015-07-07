var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('js', function() {
  return gulp.src(['js/vendor/jquery.js', 'js/vendor/jquery.cookie.js', 'js/vendor/modernizr.js', 'js/vendor/placeholder.js', 'js/vendor/foundation.js', 'js/vendor/**/*.js', 'js/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
})


gulp.task('sass', function () {
  gulp.src('./scss/**.*scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("dist/js/**.*.js", ['js'])
    .on('change', browserSync.reload)
  gulp.watch("./*.html")
    .on('change', browserSync.reload);
});
