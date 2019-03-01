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
var log = require('fancy-log');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var merge = require('merge-stream');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var sass = require('gulp-ruby-sass');

// filepath info for building the dev-distro:
var filePath = {
    devPath: "dev",
    resourcesDir: "resources",
    pagesDir: "pages",
    stylesheetsDir: "stylesheets",
    localisedPagesDir: global.pagesDir
};

//----clean&init----:

// Remove 'dev' dir
gulp.task('dev:clean', function (cb) {
    rimraf(filePath.devPath, cb);
});

// Create 'dev' dir (must happen after dev:clean, ensured by the calling task's series)
gulp.task('dev:init', function (cb) {
    mkdirp(filePath.devPath, null, cb);
});

//----clean&init----}

//----main dev-build----:

function sassError(error) {
  log('sass ERROR: ' + error);
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

    var localised = gulp.src('00_tunnistus_lokalisoitu.html', {base: '.'})
        .pipe(rename('index.html'))
        .pipe(gulp.dest(filePath.devPath + '/' + filePath.localisedPagesDir));

    return merge(localised);   
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
        .pipe(replace('{{ mobile_identification_operator }}', 'elisa'))
        //.pipe(replace('{{ api_metadata_path }}', '/api/metadata/'))
        .pipe(replace('apiProvidersPath: "/api/metadata/?type=AUTHENTICATION_PROVIDER"', 'apiProvidersPath: "/api/metadata/providers.json"'))
        .pipe(replace('apiCountryPath: "/api/country/"', 'apiCountryPath: "/api/country.json"'))
        .pipe(gulp.dest(filePath.devPath + '/' + filePath.resourcesDir));

    var vendor = gulp.src([
            './js/disruption_data/*',
            './js/vendor/*'
        ], {base: "."})
        .pipe(gulp.dest(filePath.devPath + '/' + filePath.resourcesDir));
    return merge(ourJsFiles, vendor);
});

gulp.task('dev:copy-dev-files', function() {
    var fixture = gulp.src([
        'fixture/**/*'], {base: "fixture"})
            .pipe(gulp.dest(filePath.devPath));
    var defaultTranslations = gulp.src([
        'default_translations/*'], {base: "default_translations"})
            .pipe(gulp.dest(filePath.devPath + '/static/localisation'));
    var disruptionData = gulp.src([
        './js/disruption_data/*',], {base: "./js/disruption_data"})
            .pipe(gulp.dest(filePath.devPath + '/disruption/'));
    return merge(fixture, defaultTranslations, disruptionData);
});

gulp.task('dev:build-dev-files', gulp.series('dev:copy-dev-files', 'dev:sass', 'dev:pages', 'dev:fonts', 'dev:images', 'dev:js'));

//----main dev-build----}
