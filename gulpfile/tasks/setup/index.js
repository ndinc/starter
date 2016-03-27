var config  = require('../../config')
var gulp    = require('gulp')
var gulpSequence = require('gulp-sequence')
var package = require('../../../package.json')
var path    = require('path')

var initializeTask = function(cb) {
  gulpSequence(
    'initPackage',
    'setupServerConfig',
    'git:init'
  , cb)
}
gulp.task('setup', initializeTask)