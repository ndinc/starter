var config       = require('../../config')
var package = require('../../../package.json')
var options       = require('./options')
var browserSync = require('browser-sync')
var changed     = require('gulp-changed')
var gulp        = require('gulp')
var path        = require('path')


var paths = {
  src: [path.join(config.root.dest, '/**'), '!' + path.join(config.root.dest, '/**/*.+(html)')],
  dest: options.download.path + '/wp-content/themes/' + package.name + '/assets'
}

var copyTask = function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream())
}

gulp.task('wp:copy', copyTask)
module.exports = copyTask
