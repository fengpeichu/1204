var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('SASS', function() {
    return gulp.src('./src/sass/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', function() {
    gulp.watch('./src/sass/index.scss', gulp.series('SASS'));
})