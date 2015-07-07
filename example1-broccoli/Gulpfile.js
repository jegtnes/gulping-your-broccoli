var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

gulp.task('sass', function () {
  return plugins.sass('scss')
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest('dist/css'));
});
})
