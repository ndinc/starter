var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')

var wordpressTask = function(cb) {
  gulpSequence(
    'wp:download',
    'wp:config',
    'wp:db:create',
    'wp:install',
    'wp:directory',
    'wp:plugin',
    'wp:theme',
    'wp:option',
  cb);
}

gulp.task('wordpress', wordpressTask)
module.exports = wordpressTask
