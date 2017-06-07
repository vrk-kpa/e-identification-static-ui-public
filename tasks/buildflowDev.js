/**
* This is the main sequence of gulp-tasks that run when building the
* 'app-distro' for testing localhostly.
* The main differences in comparison to a non-development build-flow:
*   - we do not want to minify anything (i.e. make it easier to debug).
*   - the resulting dev-distro is located in a different part of the project tree
*     (so we can run a localhost version off of the dev-distro).
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

// filepath info for building the dev-distro:
var filePath = {
    devPath: "dev",
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
gulp.task('dev:clean', function (cb) {
    rimraf(filePath.devPath, cb);
});

// mkdirp - probable etymology: "mkdir -p" i.e. "make the folder structure":
// [must happen after dev:clean, ensured using the declaration in square-brackets]
gulp.task('dev:init', ['dev:clean'], function (cb) {
    // Create dev dir
    mkdirp.sync(filePath.devPath);
    cb();
});
//----clean&init----}

//----main dev-build----:
// (local test files, then sass, pages, resources, js)
// A main-task runs the 4 sub-tasks in sequence:
gulp.task('dev:build-dev-files', function () {
    var fixture = gulp.src([
        'fixture/**/*'], {base: "fixture"})
            .pipe(gulp.dest(filePath.devPath));
    var defaultTranslations = gulp.src([
        'default_translations/*'], {base: "default_translations"})
            .pipe(gulp.dest(filePath.devPath + '/static/localisation'));
    var disruptionData = gulp.src([
        './js/disruption_data/*',], {base: "./js/disruption_data"})
            .pipe(gulp.dest(filePath.devPath + '/disruption/'));

    return runSequence('dev:sass', 'dev:pages', 'dev:fonts', 'dev:images', 'dev:js');
});

function sassError(error) {
  gutil.log('sass ERROR: ' + error);
  process.exit(1);
}

gulp.task('dev:sass', function () {
    var sassStream = sass('./sass/**/*.scss', { compass: true, emitCompileError: true })
        .on('error', sassError)
        .pipe(gulp.dest(filePath.devPath + '/' +
          filePath.resourcesDir + '/' + filePath.stylesheetsDir));

    // May be not in use, but keep this cssStream available for future development:
    var cssStream = gulp.src('./css/*.scss')
        .pipe(gulp.dest(filePath.devPath + '/' + filePath.resourcesDir + '/' + filePath.stylesheetsDir));

    return merge(sassStream, cssStream);
});

gulp.task('dev:pages', function () {
    var pagesPath = filePath.devPath + '/' + filePath.pagesDir;

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
        .pipe(gulp.dest(filePath.devPath + '/' + filePath.localisedPagesDir));

    return merge(notFound, internalError, disco, localised, info,
        feedback, feedbackResponse, privacystatement, timeout);
});

gulp.task('dev:fonts', function () {
    var destPath = filePath.devPath + "/" + filePath.resourcesDir;
    return gulp.src([
            './font/**/*',
        ], {base: "."})
        .pipe(gulp.dest(destPath));
});

gulp.task('dev:images', function () {
    var destPath = filePath.devPath + "/" + filePath.resourcesDir;
    return gulp.src([
            './img/**/*',
            './images/**/*'
        ], {base: "."})
        .pipe(gulp.dest(destPath));
});


// Note that this handles the legacy (non-ReactJS) javascripts from js-folder
// (i.e. what isn't in app.js sourced from src-folder by browserify.js):
gulp.task('dev:js', function () {
    var ourJsFiles = gulp.src('./js/*.js', {base: "."})
        .pipe(replace('{{ resource_path }}', '/resources/'))
        .pipe(replace('{{ discovery_page_timeout }}', 29500))
        .pipe(gulp.dest(filePath.devPath + '/' + filePath.resourcesDir));

    var vendor = gulp.src([
            './js/disruption_data/*',
            './js/scs/*',
            './js/vendor/*'
        ], {base: "."})
        .pipe(gulp.dest(filePath.devPath + '/' + filePath.resourcesDir));
    return merge(ourJsFiles, vendor);
});
//----main dev-build----}
