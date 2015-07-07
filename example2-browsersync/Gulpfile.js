var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

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
  gulp.watch("app/*.html")
    .on('change', browserSync.reload);
});
