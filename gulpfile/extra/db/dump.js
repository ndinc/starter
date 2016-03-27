try {
  var server = require('../../../server.config')
} catch (e){
  if(e.code = 'MODULE_NOT_FOUND') return
}
var config  = require('../../config')
var package = require('../../../package.json')
var exec    = require('gulp-exec')
var gulp    = require('gulp')
var path    = require('path')

var dbDumpTask = function() {
  var localServer = server['local'];
  return gulp.src('')
    .pipe(exec('mkdir -p sql', config.tasks.exec))
    .pipe(exec([
      'mysqldump',
      '-h', localServer.db.host,
      '-u', localServer.db.user,
      '-p' + localServer.db.password,
      localServer.db.name,
      '>', path.join('sql', package.name + '.sql')
    ].join(' '), config.tasks.exec))
    .pipe(exec('git add ' + path.join('sql', package.name + '.sql'), config.tasks.exec))
    .pipe(exec('git commit -am \'Dump SQL\'', config.tasks.exec))
    .pipe(exec.reporter())
}

module.exports = dbDumpTask

gulp.task('db:dump', dbDumpTask)