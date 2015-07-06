var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
  rename: {
    'gulp-ruby-sass': 'rubysass'
  }
});

gulp.task('rubysass', function() {
  return plugins.rubysass('scss/app.scss')
    .on('error', function(err) {
      console.error('Error!', err.message);
    })
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('libsass', function() {
  gulp.src('scss/app.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .on('error', function(err) {
      console.error('Error!', err.message);
    })
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src(['js/vendor/jquery.js', 'js/vendor/jquery.cookie.js', 'js/vendor/modernizr.js', 'js/vendor/placeholder.js', 'js/vendor/foundation.js', 'js/vendor/**/*.js', 'js/**/*.js'])
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
})
