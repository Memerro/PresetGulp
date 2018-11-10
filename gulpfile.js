var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('app/sass/main.sass')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});