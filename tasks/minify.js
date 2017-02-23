var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minify', ['browserify'], function () {
    return gulp.src('build/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/resources/js/'));
});
