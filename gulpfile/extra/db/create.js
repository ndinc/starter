var gutil   = require("gulp-util")

try {
  var server = require('../../../server.config')
} catch (e){
  console.log(gutil.colors['red']('Create server.config.js'));
  if(e.code = 'MODULE_NOT_FOUND') return
}
var config       = require('../../config')
var gulp         = require('gulp')
var exec = require('gulp-exec');

var createTask = function() {
  var localServer = server['local'];
  return gulp.src('')
    .pipe(exec([
      'mysql',
      '-h', localServer.db.host,
      '-u', localServer.db.user,
      '-p' + localServer.db.password,
      '-Bse \"CREATE DATABASE IF NOT EXISTS ' + localServer.db.name + '\"'
    ].join(' ') , config.tasks.exec))
    .pipe(exec.reporter())
    .on('end', function(){
      console.log('end');
    })
}

module.exports = createTask;

gulp.task('db:create', createTask)