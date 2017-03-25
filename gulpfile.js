var gulp = require('gulp');
var sass = require('gulp-sass');

var sassDir = './app/assets/sass';
var src = [
  sassDir+"/**/*.scss",
  sassDir+"/common/**/*.scss",
  sassDir+"/components/**/*.scss",
  sassDir+"/config/**/*.scss"
];

gulp.task('sass', function() {
  gulp.src(src)
    .pipe(sass({
      outputStyle: 'compressed'
    })).on('error', sass.logError)
    .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('watch', ['sass'], function () {
  gulp.watch(src, ['sass']);
});
