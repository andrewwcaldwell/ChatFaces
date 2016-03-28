# gulp-browser
browserify and other goodies for gulp

### Build Status/Dependencies
[![Build Status](https://travis-ci.org/pushrocks/gulp-browser.svg?branch=master)](https://travis-ci.org/pushrocks/gulp-browser)
[![Dependency Status](https://david-dm.org/pushrocks/gulp-browser.svg)](https://david-dm.org/pushrocks/gulp-browser)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/gulp-browser/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/gulp-browser/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/gulp-browser/badges/code.svg)](https://www.bithound.io/github/pushrocks/gulp-browser)
[![Coverage Status](https://coveralls.io/repos/github/pushrocks/gulp-browser/badge.svg?branch=master)](https://coveralls.io/github/pushrocks/gulp-browser?branch=master)

### Usage
gulp-browser is meant to be easy:

#### Browserify:
```javascript
    var gulp = require("gulp");
    var gulpBrowser = require("gulp-browser");
    
    gulp.task('gulpBrowserTest',function() {
        var stream = gulp.src('./test/*.js')
            .pipe(gulpBrowser.browserify())
            .pipe(gulp.dest("./test/browserifiedJS/"));
        return stream;
    });
```

> **Note:** Be aware of how gulp.src creates values of file.base and file.path since that is important to the require statements.

### Dev Information:
[![devDependency Status](https://david-dm.org/pushrocks/gulp-browser/dev-status.svg)](https://david-dm.org/pushrocks/gulp-browser#info=devDependencies)
[![bitHound Dev Dependencies](https://www.bithound.io/github/pushrocks/gulp-browser/badges/devDependencies.svg)](https://www.bithound.io/github/pushrocks/gulp-browser/master/dependencies/npm)

### About the authors:
[![Project Phase](https://mediaserve.lossless.digital/lossless.com/img/createdby_github.svg)](https://lossless.com/)

[![Gitter](https://img.shields.io/badge/Support%20us-PayPal-blue.svg)](https://paypal.me/lossless)