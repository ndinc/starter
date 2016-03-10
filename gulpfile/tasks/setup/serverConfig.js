var del     = require('del')
var gulp    = require('gulp')
var rename  = require('gulp-rename')


var paths = {
  src: './server.config.example.js',
  dest: '.'
}

var setupServerConfigTask = function() {
  return gulp.src(paths.src)
    .pipe(rename('server.config.js'))
    .pipe(gulp.dest(paths.dest))
    .on('end', function(){
      del([paths.src]).then(function (paths) {
      })
    })
}

gulp.task('setupServerConfig', setupServerConfigTask)
module.exports = setupServerConfigTask