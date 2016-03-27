var options       = require('./options')
var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')
var exec = require('child_process').exec;
var fs = require('fs')

var wordpressTask = function(cb) {
  try {
    var wp = fs.readFileSync(options.download.path + '/wp-load.php', 'utf8')
    if (wp) {
      gulpSequence(
        'db:create',
        'db:import',
        'wp:config',
        'wp:option',
        'wp:production',
      cb);
    }
  } catch (e){
    if(e.code = 'ENOENT'){
      gulpSequence(
        'wp:download',
        'wp:config',
        'db:create',
        'wp:directory',
        'wp:install',
        'db:dump',
        'wp:plugin',
        'wp:theme',
        'wp:option',
        'wp:production',
      cb);
    }
  }
}

gulp.task('wp:setup', wordpressTask)
module.exports = wordpressTask