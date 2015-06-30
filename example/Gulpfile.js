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
    .pipe(gulp.dest('css'));
});
