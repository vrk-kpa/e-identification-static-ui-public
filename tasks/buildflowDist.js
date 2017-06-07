/**
* This is the main sequence of gulp-tasks that run when building the
* 'app-distro' for production or production-like-test environments
* The resulting distro is stored in the dist folder of this project.
* This folder is then referred to in the Dockerfile, which is where the
* commands to send the app-distro to the static server are found.
* I.e. this build determines what the static server serves when users
* arrive to the disco-page and its related pages (the pages in this project).
*/

// Stuff from node we require, load the node_modules up:
var gulp = require('gulp');
var gutil = require('gulp-util');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var merge = require('merge-stream');
var sass = require('gulp-ruby-sass');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var sass = require('gulp-ruby-sass');
var cleanCSS = require('gulp-clean-css');

// filepath info for building the distro:
var filePath = {
    root: "",
    distPath: "dist",
    resourcesDir: "resources",
    pagesDir: "pages",
    stylesheetsDir: "stylesheets",
    notFoundDir: "404",
    internalErrorDir: "500",
    discopageDir: "discovery-page",
    infoDir: "info",
    feedbackDir: "feedback",
    feedbackResponseDir: "feedbackResponse",
    privacystatementDir: "privacystatement",
    timeoutDir: "timeout",
    localisedPagesDir: global.pagesDir
};

//----clean&init----:
// (clean, init)

// rimraf - probable etymology: "rm -rf" which is linuxspeak for:
// "forcibly remove stuff inc. from all child folders, recursively".
// i.e. we want an empty, clean place before we do our (re-)build:
gulp.task('dist:clean', function (cb) {
    rimraf(filePath.distPath, cb);
});

// mkdirp - probable etymology: "mkdir -p" i.e. "make the folder structure":
// [must happen after dev:clean, ensured by the calling task's runSequence]
gulp.task('dist:init', function () {
    // Create dist dir
    mkdirp.sync(filePath.distPath);
});
//----clean&init----}

//----main dist-build----:
// (sass, pages, resources, js)
// A main-task runs the 4 sub-tasks in sequence:
gulp.task('dist:build-dist-files', function() {
    filePath.root = filePath.distPath;
    return runSequence('dist:sass', 'dist:pages', 'dist:resources', 'dist:js');
});

function sassError(error) {
  gutil.log('sass ERROR: ' + error);
  process.exit(1);
}

// https://www.npmjs.com/package/gulp-clean-css
// "Minify css with clean-css.
// This is just a simple gulp plugin, which means it's nothing more than a thin wrapper around clean-css.
// npm install gulp-clean-css --save-dev   "
gulp.task('dist:sass', function () {
    var sassStream = sass('./sass/**/*.scss', { compass: true, emitCompileError: true })
        .on('error', sassError)
        //clean(i.e. minify) using the gulp-clean-css basic command:
        .pipe(cleanCSS())
        //note that the link above gives the option to just call cleanCSS() like this (no method chaining)
        //whereas the original API it wraps has the syntax cleanCSS().minify(source, function....).
        .pipe(gulp.dest(filePath.root + '/' +
            filePath.resourcesDir + '/' + filePath.stylesheetsDir));

    // May be not in use, but keep this cssStream available for future development:
    var cssStream = gulp.src('./css/*.scss')
        //again clean(i.e. minify):
        .pipe(cleanCSS())
        .pipe(gulp.dest(filePath.root + '/' + filePath.resourcesDir + '/' + filePath.stylesheetsDir));

    return merge(sassStream, cssStream);
});

gulp.task('dist:pages', function () {
    var pagesPath = filePath.root + '/' + filePath.pagesDir;

    // Create pages dir
    mkdirp.sync(pagesPath);

    var notFound = gulp.src('06_tunnistus_virhesivu.html', {base: '.'})
        .pipe(replace('{{ resource_path }}', '/resources/'))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(pagesPath + '/' + filePath.notFoundDir));
    var internalError = gulp.src('07_tunnistus_virhesivu2.html', {base: '.'})
        .pipe(replace('{{ resource_path }}', '/resources/'))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(pagesPath + '/' + filePath.internalErrorDir));
    var disco = gulp.src('03_tunnistus_valinta_vaihtoehto.html', {base: '.'})
        .pipe(replace('{{ resource_path }}', '/resources/'))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(pagesPath + '/' + filePath.discopageDir));
    var info = gulp.src('20_tunnistus_tietoapalvelusta.html', {base: '.'})
        .pipe(replace('{{ resource_path }}', '/resources/'))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(pagesPath + '/' + filePath.infoDir));
    var feedback = gulp.src('22_tunnistus_palaute.html', {base: '.'})
        .pipe(replace('{{ resource_path }}', '/resources/'))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(pagesPath + '/' + filePath.feedbackDir));
    var feedbackResponse = gulp.src('24_tunnistus_palaute_kiitos.html', {base: '.'})
        .pipe(replace('{{ resource_path }}', '/resources/'))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(pagesPath + '/' + filePath.feedbackResponseDir));
    var privacystatement = gulp.src('21_tunnistus_tietosuojaseloste.html', {base: '.'})
        .pipe(replace('{{ resource_path }}', '/resources/'))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(pagesPath + '/' + filePath.privacystatementDir));
    var timeout = gulp.src('25_tunnistus_istunto_vanhentunut.html', {base: '.'})
        .pipe(replace('{{ resource_path }}', '/resources/'))
        .pipe(rename('index.html'))
        .pipe(gulp.dest(pagesPath + '/' + filePath.timeoutDir));

    var localised = gulp.src('00_tunnistus_lokalisoitu.html', {base: '.'})
        .pipe(rename('index.html'))
        .pipe(gulp.dest(filePath.root + '/' + filePath.localisedPagesDir));

    return merge(notFound, internalError, disco, localised, info,
        feedback, feedbackResponse, privacystatement, timeout);
});

gulp.task('dist:resources', function () {
    var destPath = filePath.root;

    // Create resources dir
    mkdirp.sync(destPath + "/" + filePath.resourcesDir);

    return gulp.src([
            './font/**/*',
            './img/**/*',
            './images/**/*',
            './locale/**/*'
        ], {base: "."})
        .pipe(gulp.dest(destPath + "/" + filePath.resourcesDir));
});

// Note that this handles the legacy (non-ReactJS) javascripts from js-folder
// (i.e. what isn't in app.js sourced from src-folder by browserify.js):
gulp.task('dist:js', function () {
    var ourJsFiles = gulp.src('./js/*.js', {base: "."})
        .pipe(replace('{{ resource_path }}', '/resources/'))
        .pipe(gulp.dest(filePath.root + '/' + filePath.resourcesDir));

    var clean = gulp.src([
            './js/disruption_data/*',
            './js/scs/*',
            './js/vendor/*'
        ], {base: "."})
        .pipe(gulp.dest(filePath.root + '/' + filePath.resourcesDir));
    return merge(ourJsFiles, clean);
});
//----main dist-build----}
