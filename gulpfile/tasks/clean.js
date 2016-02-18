var gulp   = require('gulp')
var del    = require('del')
var config = require('../config')

var cleanTask = function (cb) {
  del([config.root.dest, config.root.build]).then(function (paths) {
    cb()
  })
}

gulp.task('clean', cleanTask)
module.exports = cleanTask
