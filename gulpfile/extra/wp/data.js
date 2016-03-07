var config  = require('../../config')
var changed = require('gulp-changed')
var gulp    = require('gulp')
var path    = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.html.src, 'data/**'),
  dest: path.join(config.root.dest, config.tasks.static.dest, 'data')
}

var staticTask = function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
}

gulp.task('wp:data', staticTask)
module.exports = staticTask
