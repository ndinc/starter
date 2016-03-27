try {
  var server = require('../../../server.config')
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

var argv = process.argv;
var env = argv.pop();

var server = server[env] || server['staging'];

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

var deployTask = function(d){
  var dir = dirs[d] || dirs['theme'];
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

gulp.task('wp:deploy', ['wp:deploy:theme'])
gulp.task('wp:deploy:all', config.tasks.deploy.pretasks, deployTask('all'))
gulp.task('wp:deploy:plugin', config.tasks.deploy.pretasks, deployTask('plugin'))
gulp.task('wp:deploy:upload', config.tasks.deploy.pretasks, deployTask('upload'))
gulp.task('wp:deploy:theme', config.tasks.deploy.pretasks, deployTask('theme'))

module.exports = deployTask('theme')