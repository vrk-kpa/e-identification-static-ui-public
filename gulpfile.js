/**
* This acts as the controller for the two buildflows (dev and dist).
* - dev-builds are mainly for testing stuff using localhost.
* - dist-builds are for when you want to put stuff to the static server
*   (what ends up in the dist-folder, goes to static via the Dockerfile commands),
*   so the dist-build is appropriate for all scenarios (deploy local, dev, test, qa, prod etc)
*   other than localhost testing.
*
* So your command-line options are:
* gulp dist-build
* gulp dev-build
* gulp watch
*
* gulp watch is just a wrapper that enables you to serve the files from localhost
*/

var gulp = require('gulp');
var requireDir = require('require-dir');
var log = require('fancy-log');

// globals
global.root = "dev";
global.isWatching = false;
global.pagesDir = 'sivut';

// Require all tasks in gulp/tasks
requireDir('./tasks', { recurse: true });


//----dist-build-stuff----:
// Makes sense to run this task after the other dist-build tasks;
// handled by the calling task ('dist-build') in its runSequence.
gulp.task('js-lint-n-min', gulp.series('eslint', 'minify'));

// (Keeping the eslint + minify up here in gulpfile. For now that is ok)
const distBuildSeries = gulp.series('dist:clean', 'dist:init','dist:build-dist-files','js-lint-n-min');
gulp.task('dist-build', (done) => { distBuildSeries(done) });
//----dist-build-stuff----}


//----dev-build-stuff----:
gulp.task('setWatch', function () {
    global.isWatching = true;
});

gulp.task('dev-build', gulp.series('dev:init', 'eslint', 'browserify','dev:build-dev-files'));

gulp.task('watch-all', function() { 
    gulp.watch([
    './*.html',
    './font/**/*',
    './img/**/*',
    './images/**/*',
    './locale/**/*',
    './sass/**/*.scss',
    './css/**/*.css',
    './fixture/**/*',
    './src/**/*.js',
    './js/**/*.js'], gulp.series('dev:init', 'eslint', 'browserify', 'dev:build-dev-files'))
});

gulp.task('watch', gulp.series('dev-build', gulp.parallel('serve', 'watch-all')));

//----dev-build-stuff----}
