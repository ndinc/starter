var package = require('../../../package.json')
var del     = require('del')
var gulp    = require('gulp')
var replace = require('gulp-replace')
var rename  = require('gulp-rename')


var paths = {
  src: './server.config.example.js',
  dest: '.'
}

var setupServerConfigTask = function() {
  return gulp.src(paths.src)
    .pipe(rename('server.config.js'))
    .pipe(replace(/{{name}}/g, package.name))
    .pipe(gulp.dest(paths.dest))
    .on('end', function(){
      del([paths.src]).then(function (paths) {
      })
    })
}

gulp.task('setupServerConfig', setupServerConfigTask)
module.exports = setupServerConfigTask