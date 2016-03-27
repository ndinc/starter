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
var gutil   = require("gulp-util")

var dbImportTask = function() {
  var localServer = server['local'];
  return gulp.src('')
    .pipe(exec([
      'test -e', path.join('sql', package.name + '.sql'),
      '&&',
        'mysql',
        '-h', localServer.db.host,
        '-u', localServer.db.user,
        '-p' + localServer.db.password,
        localServer.db.name,
        '<', path.join('sql', package.name + '.sql'),
      '||',
        'echo \"'+ gutil.colors['yellow']('no such file or directory \'sql/' + package.name + '.sql\'') + '\"',
    ].join(' '), config.tasks.exec))
    .pipe(exec.reporter())
}

module.exports = dbImportTask

gulp.task('db:import', dbImportTask)