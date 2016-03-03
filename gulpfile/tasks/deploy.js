var config  = require('../config')
var gulp    = require('gulp')

gulp.task('deploy', config.tasks.deploy.pretasks.concat(config.tasks.deploy.tasks))