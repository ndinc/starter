var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')

var wordpressTask = function(cb) {
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
}

gulp.task('wordpress', wordpressTask)
module.exports = wordpressTask