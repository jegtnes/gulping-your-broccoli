var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
  rename: {
    'gulp-ruby-sass': 'sass'
  }
});

gulp.task('sass', function () {
  return plugins.sass('scss')
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src(['js/vendor/jquery.js', 'js/vendor/foundation.js', 'js/vendor/**/*.js', 'js/**/*.js'])
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
})
