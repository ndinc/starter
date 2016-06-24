var options       = require('./options')
var package = require('../../../package.json')
var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')
var exec = require('child_process').exec;
var fs = require('fs')
var path = require('path')

var wordpressTask = function(cb) {
  if(package.name){
    try {
      var wp = fs.readFileSync(path.join(options.download.path, 'wp-load.php'), 'utf8')
      if (wp) {
        gulpSequence(
          'mamp:start',
          'db:create',
          'db:import',
          'wp:config',
          'wp:production',
        cb);
      }
    } catch (e){
      if(e.code = 'ENOENT'){
        gulpSequence(
          'mamp:start',
          'wp:download',
          'wp:config',
          'wp:directory',
          'db:create',
          'wp:install',
          'wp:plugin',
          'wp:theme',
          'wp:option',
          'wp:production',
          'db:dump',
        cb);
      }
    }
  }
}

gulp.task('wp:setup', wordpressTask)
module.exports = wordpressTask