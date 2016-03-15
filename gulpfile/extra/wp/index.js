var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')
var exec = require('child_process').exec;

var wordpressTask = function(cb) {
  exec('source ~/.bash_profile', function(err, stdout, stderr){
    gulpSequence(
      'wp:download',
      'wp:config',
      'wp:db:create',
      'wp:directory',
      'wp:install',
      'wp:plugin',
      'wp:theme',
      'wp:option',
      'wp:production',
    cb);
  });
}

gulp.task('wordpress', wordpressTask)
module.exports = wordpressTask