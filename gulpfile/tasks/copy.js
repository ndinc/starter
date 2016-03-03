var config       = require('../config')
var package = require('../../package.json')
var browserSync = require('browser-sync')
var changed     = require('gulp-changed')
var gulp        = require('gulp')
var path        = require('path')


var paths = {
  src: [path.join(config.root.dest, '/**')],
  dest: config.root.public
}

var copyTask = function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('copy', copyTask)
module.exports = copyTask
