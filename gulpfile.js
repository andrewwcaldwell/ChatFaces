var gulp = require('gulp');

var htmlhint    = require('gulp-htmlhint');
var htmlmin     = require('gulp-htmlmin');
var scsslint    = require('gulp-scss-lint');
var sass        = require('gulp-sass');
var gulpBrowser = require("gulp-browser");
var jslint      = require('gulp-jslint');
var uglify      = require('gulp-uglify');

// run 'default' gulp cmd to perform an array of tasks!
gulp.task('default', ['html', 'sass', 'js', 'img']);

gulp.task('html', function () {
    return gulp.src('./index.html')
        .pipe(htmlhint())
        .pipe(htmlhint.failReporter())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./public/'));
});

gulp.task('sass', function () {
    return gulp.src('./scss/style.scss')
        //.pipe(scsslint())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

// call exclusively to compile scss without full build
gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('js', function () {
    /*/ comment out this block - linter too strict ***************
    gulp.src('./js/tmStmp.js')
    .pipe(jslint({browser: true, sloppy: true, node: true}))
    gulp.src('./js/get.js')
    .pipe(jslint({browser: true, sloppy: true, node: true}))
    gulp.src('./js/send.js')
    .pipe(jslint({browser: true, sloppy: true, node: true}))
    //*********************************************************///   
    return gulp.src('./js/app.js')
        .pipe(gulpBrowser.browserify())
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('img', function () {
    return gulp.src('./resource/*')
        .pipe(gulp.dest('./public/resource/'));
});