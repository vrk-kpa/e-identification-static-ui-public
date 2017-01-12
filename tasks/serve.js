var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('serve', function() {
  connect.server({
      root: ['dev/' + global.pagesDir, 'dev/'],
      port: 8080,
      livereload: false,
      fallback: 'dev/' + global.pagesDir + '/index.html',
      directoryListing: false,
      open: false
    });
});

