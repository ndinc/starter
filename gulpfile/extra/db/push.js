try {
  var server = require('../../../server.config')
} catch (e){
  if(e.code = 'MODULE_NOT_FOUND') return
}

var config  = require('../../config')
var exec    = require('gulp-exec')
var gulp    = require('gulp')

var dbPushTask = function() {
  var localServer = server['local'];
  var destServer = server['staging']

  return gulp.src('')
    .pipe(exec([
      'mysqldump',
        '-h', localServer.db.host,
        '-u', localServer.db.user,
        '-p' + localServer.db.password,
        localServer.db.name ,
      '| ssh',
      destServer.user + '@' + destServer.host, '-p', destServer.port,
      '\"mysql',
        '-h', destServer.db.host,
        '-u', destServer.db.user,
        '-p' + destServer.db.password,
        destServer.db.name,
      '\"'
    ].join(' '), config.tasks.exec))
    .pipe(exec.reporter())
}

module.exports = dbPushTask

gulp.task('db:push', dbPushTask)