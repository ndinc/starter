var config       = require('../../config')
var options       = require('./options')
var gulp         = require('gulp')
var exec = require('gulp-exec');


var getCreatingDabataseString = function(){
  var string = [
    '-u ' + options['config']['dbuser'],
    '-h ' + options['config']['dbhost'],
    '-p' + options['config']['dbpass'],
    '-Bse \"CREATE DATABASE '+ options["config"]["dbname"] + '\"'
  ];
  return string.join(' ');
}

var createDatabaseTask = function() {
  return gulp.src('')
    .pipe(exec(['mysql', getCreatingDabataseString()].join(' ') , config.tasks.exec))
    .on('end', function(){
      console.log('end');
    })
}

gulp.task('wp:db:create', createDatabaseTask)

var pushDatabaseStagingTask = function() {
  return gulp.src('')
    .pipe(exec(['mysql', getCreatingDabataseString()].join(' ') , config.tasks.exec))
    .on('end', function(){
      console.log('end');
    })
}

gulp.task('wp:db:push', pushDatabaseStagingTask)
gulp.task('wp:db:push:staging', pushDatabaseStagingTask)

// mysql -u root -proot -h localhost -Bse "CREATE DATABASE wp_test";