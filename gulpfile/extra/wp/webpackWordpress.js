var config       = require('../../config')
var package = require('../../../package.json')
var options       = require('./options')
var path            = require('path')

if(!config.tasks.js) return

var config  = require('../../lib/webpack-multi-config')('production', {
  publicPath: options.install_path + '/wp-content/themes/' + package.name + '/assets/' + config.tasks.js.dest + '/'
});
var gulp    = require('gulp')
var logger  = require('../../lib/compileLogger')
var webpack = require('webpack')

var webpackProductionTask = function(callback) {
  webpack(config, function(err, stats) {
    logger(err, stats)
    callback()
  })
}

gulp.task('webpack:wordpress', webpackProductionTask)
module.exports = webpackProductionTask
