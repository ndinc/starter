var gulp            = require('gulp')
var gulpSequence    = require('gulp-sequence')
var getEnabledTasks = require('../lib/getEnabledTasks')

var developTask = function(cb) {
  var tasks = getEnabledTasks('development')
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'static', cb)
}

gulp.task('develop', developTask)
module.exports = developTask
