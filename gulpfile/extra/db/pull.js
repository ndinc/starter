try {
  var server = require('../../../server.config')
} catch (e){
  if(e.code = 'MODULE_NOT_FOUND') return
}

var config  = require('../../config')
var exec    = require('gulp-exec')
var gulp    = require('gulp')

var dbPullTask = function(env){
  return function() {
    var localServer = server['local'];
    var destServer = server[env] || server['staging'];

    return gulp.src('')
      .pipe(exec([
        'ssh',
        destServer.user + '@' + destServer.host, '-p', destServer.port,
        '\"mysqldump',
          '-h', destServer.db.host,
          '-u', destServer.db.user,
          '-p' + destServer.db.password,
          destServer.db.name ,
        '\" | mysql',
          '-u', localServer.db.host,
          '-u', localServer.db.user,
          '-p' + localServer.db.password,
          localServer.db.name
      ].join(' '), config.tasks.exec))
      .pipe(exec.reporter())
  }
}

module.exports = dbPullTask

gulp.task('db:pull', dbPullTask('staging'))
gulp.task('db:pull:production', dbPullTask('production'))