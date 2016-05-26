var config  = require('../config')
var gulp    = require('gulp')

gulp.task('deploy', config.tasks.deploy.pretasks.concat(config.tasks.deploy.staging_tasks))
gulp.task('deploy:staging', config.tasks.deploy.pretasks.concat(config.tasks.deploy.staging_tasks))
gulp.task('deploy:production', config.tasks.deploy.pretasks.concat(config.tasks.deploy.production_tasks))