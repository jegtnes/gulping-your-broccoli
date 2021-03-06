var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var runSequence = require('run-sequence');
var critical = require('critical');
var smoosher = require('gulp-smoosher');
var rename = require('gulp-rename');
var fs = require('fs');

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
  gulp.watch("js/**/*.js", ['js'])
    .on('change', browserSync.reload)
  gulp.watch("./*.html")
    .on('change', browserSync.reload);
});

gulp.task('criticalCSS', function(cb) {
  fs.writeFile('dist/css/inline.css', '');
  return critical.generate({
    base: './',
    src: './index.html',
    dest: 'dist/css/inline.css',
    minify: true,
    width: 1280,
    height: 800
  })
})

gulp.task('inlineCriticalCSS', function() {
  return gulp.src('./index.html')
    .pipe(rename({suffix: '-inline' }))
    .pipe(smoosher())
    .pipe(gulp.dest('./'));
});

gulp.task('inline', function(cb) {
  runSequence('criticalCSS', 'inlineCriticalCSS', cb);
});
