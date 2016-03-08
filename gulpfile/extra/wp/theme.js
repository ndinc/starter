var config       = require('../../config')
var options       = require('./options')
var gulp         = require('gulp')
var exec = require('gulp-exec');
var package = require('../../../package.json')
var gulpSequence = require('gulp-sequence')

var themeTask = function() {
  return gulp.src('')
    .pipe(exec('rm -rf ' + options.download.path + '/wp-content/themes/twenty*' , config.tasks.exec))
    .pipe(exec('rm -rf ' + options.download.path + '/wp-content/themes/' + package.name , config.tasks.exec))
    .pipe(exec('cp -rf ./gulpfile/extra/wp/starter-theme ' + options.download.path + '/wp-content/themes', config.tasks.exec))
    .pipe(exec('mv -f ' + options.download.path + '/wp-content/themes/starter-theme ' + options.download.path + '/wp-content/themes/' + package.name , config.tasks.exec))
    .pipe(exec('wp theme activate ' + package.name + ' --path=' + options.download.path, config.tasks.exec))
    .on('end', function(){
      console.log('end');
    })
}
gulp.task('wp:theme', themeTask)


var starterTask = function(cb) {
  gulpSequence('wp:theme','wp:production','develop', cb)
}
gulp.task('wp:starter', starterTask)


module.exports = themeTask