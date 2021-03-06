var config  = require('../../config')
var changed = require('gulp-changed')
var gulp    = require('gulp')
var path    = require('path')

var paths = {
  src: path.join(config.root.src, config.tasks.html.src, config.tasks.data.dest, '**'),
  dest: path.join(config.root.dest, config.tasks.data.src)
}

var dataTask = function() {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest))
}

gulp.task('wp:data', dataTask)
module.exports = dataTask
