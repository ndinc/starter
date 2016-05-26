try {
  var serverConfig = require('../../../server.config')
} catch (e){
  if(e.code = 'MODULE_NOT_FOUND') return
}

var config  = require('../../config')
var options       = require('./options')
var exec    = require('gulp-exec')
var gulp    = require('gulp')
var open    = require('open')
var package = require('../../../package.json')
var path    = require('path')

var wp_exclude_glob = [
  'wp-config.php',
  'wp-content/uploads/',
  'wp-content/plugins/',
  'wp-content/upgrade/'
];

var dirs = {
  'all': '.',
  'theme': options.install_path + '/wp-content/themes/' + package.name,
  'plugin': options.install_path + '/wp-content/plugins',
  'upload': options.install_path + '/wp-content/uploads'
}

var deployTask = function(d, e){
  var dir = dirs[d] || dirs['theme'];
  var server = serverConfig[e] || serverConfig['staging'];
  return function(){
    return gulp.src('')
      .pipe(exec([
        'lftp',
        '-u', server.user + ',' + server.password,
        '-p', server.port,
        server.type + '://' + server.host,
        '-e', '\"mirror -Rev',
        '-X', config.tasks.deploy.exclude_glob.concat(wp_exclude_glob).join(' -X '),
        path.join(config.root.public, dir),
        path.join(server.path, dir) + ';',
        'bye;\"'
      ].join(' '), config.tasks.exec))
      .pipe(exec.reporter())
      .on('end', function(){
        console.log('end');
        // open(settings.url)
      })
  }
}

gulp.task('wp:staging', ['wp:staging:theme'])
gulp.task('wp:staging:all', config.tasks.deploy.pretasks, deployTask('all', 'staging'))
gulp.task('wp:staging:plugin', config.tasks.deploy.pretasks, deployTask('plugin', 'staging'))
gulp.task('wp:staging:upload', config.tasks.deploy.pretasks, deployTask('upload', 'staging'))
gulp.task('wp:staging:theme', config.tasks.deploy.pretasks, deployTask('theme', 'staging'))

gulp.task('wp:publish', ['wp:publish:theme'])
gulp.task('wp:publish:all', config.tasks.deploy.pretasks, deployTask('all', 'production'))
gulp.task('wp:publish:plugin', config.tasks.deploy.pretasks, deployTask('plugin', 'production'))
gulp.task('wp:publish:upload', config.tasks.deploy.pretasks, deployTask('upload', 'production'))
gulp.task('wp:publish:theme', config.tasks.deploy.pretasks, deployTask('theme', 'production'))

module.exports = deployTask('theme')