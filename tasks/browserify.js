var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require("gulp-notify");
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var lint = require('gulp-eslint');


function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

// Note that this is the task that bundles the modern (reactJS) set of files
// into an app.js (using src/main.js as our entrypoint):
gulp.task('browserify', ['eslint'], function() {

    var props = {
        cache: {}, packageCache: {},
        // Specify the entry point of your app
        entries: ['./src/main.js'],
        // Add file extentions to make optional in your requires
        extensions: ['.js'],
        //fullPaths: true,
        debug: global.isWatching,
        plugin: global.isWatching ? [watchify] : []
    };

    var bundler = browserify(props);

    bundler = bundler.transform(babelify, {presets: ["es2015", "react"]});

    var bundle = function() {
        var stream = bundler.bundle();
        if (global.isWatching) {
            stream = stream.on('error', handleErrors);
        } else {
            stream = stream.on('error', function(err) {
                gutil.log(
                    gutil.colors.red('Browserify compile error:'),
                    err.message
                );
            });
        }
        return stream
            .pipe(source('app.js'))
            // Specify the output destination
            .pipe(gulp.dest('build/'))
            .pipe(gulp.dest('dev/resources/js/'));
    };

    // If watchify in use
    if (global.isWatching) {
        gutil.log("watchify enabled");
        // Rebundle with watchify on changes.
        bundler.on('update', function() {
            gutil.log("Rebundle");
            bundle();
            gutil.log("Ready!");
        });
    }

    return bundle();
});
