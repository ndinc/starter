var config  = require('../../config')
var gulp    = require('gulp')
var gutil        = require("gulp-util")
var gulpSequence = require('gulp-sequence')
var package = require('../../../package.json')
var path    = require('path')

var initializeTask = function(cb) {
  if(package.name && package.name != 'starter' ){
    gulpSequence(
      'initPackage',
      'git:init',
      'setupServerConfig'
    , cb)
  }else{
    console.log(gutil.colors['red']('Change name at package.js'));
    return false
  }
}
gulp.task('setup', initializeTask)