var config = require('../config')
if(!config.tasks.js) return

var config  = require('../lib/webpack-multi-config')('development')
var gulp    = require('gulp')
var logger  = require('../lib/compileLogger')
var webpack = require('webpack')

var webpackDevelopmentTask = function(callback) {
  webpack(config, function(err, stats) {
    logger(err, stats)
    callback()
  })
}

gulp.task('webpack:development', webpackDevelopmentTask)
module.exports = webpackDevelopmentTask
