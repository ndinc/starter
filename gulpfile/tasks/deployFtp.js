try {
  var server = require('../../server.config')
} catch (e){
  if(e.code = 'MODULE_NOT_FOUND') return
}

var config  = require('../config')
var exec    = require('gulp-exec')
var gulp    = require('gulp')
var open    = require('open')
var package = require('../../package.json')

var argv = process.argv;
var env = argv.pop();

var server = server[env] || server['staging'];


var deployFtpTask = function(){
  return gulp.src('')
    .pipe(exec([
      'lftp',
      '-u', server.user + ',' + server.password,
      '-p', server.port,
      server.type + '://' + server.host,
      '-e', '\"mirror -Rev',
      '-X', config.tasks.deploy.exclude_glob.join(' -X '),
      config.root.public,
      server.path + ';',
      'bye;\"'
    ].join(' ') ))
    .pipe(exec.reporter())
    .on('end', function(){
      console.log('end');
      // open(settings.url)
    })
}

gulp.task('deploy:ftp', config.tasks.deploy.pretasks, deployFtpTask)
module.exports = deployFtpTask
