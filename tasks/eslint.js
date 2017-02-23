var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('eslint', function() {
    var lint = gulp.src([
        'src/**/*.js'
    ]).pipe(eslint()).pipe(eslint.format());
    if (!global.isWatching) {
        lint = lint.pipe(eslint.failAfterError());
    }
    return lint;
});
