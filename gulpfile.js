var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./app/assets/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })).on('error', sass.logError)
    .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('watch', ['sass'], function () {
  gulp.watch('./app/assets/sass/**/*.scss', ['sass']);
});
