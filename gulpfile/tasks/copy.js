var config      = require('../config')

var browserSync = require('browser-sync')
var changed     = require('gulp-changed')
var gulp        = require('gulp')
var path        = require('path')

var paths = {
  src: [path.join(config.root.dest, '/**'), '!' + path.join(config.root.dest, '/**/*.+(html)')],
  dest: config.root.assets
}

var copyTask = function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('copy', copyTask)
module.exports = copyTask
