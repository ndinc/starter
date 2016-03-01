var config       = require('../../config')
var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')
var getEnabledTasks = require('../../lib/getEnabledTasks')

var productionTask = function(cb) {
  var tasks = getEnabledTasks('wordpress')
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'rev', 'static', 'wp:copy', cb)
}

gulp.task('wp:production', productionTask)
module.exports = productionTask