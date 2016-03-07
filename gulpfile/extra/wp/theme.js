var config       = require('../../config')
var options       = require('./options')
var gulp         = require('gulp')
var exec = require('gulp-exec');
var package = require('../../../package.json')

var themeTask = function() {
  return gulp.src('')
    .pipe(exec('rm -rf ' + options.download.path + '/wp-content/themes/twenty*' , options))
    .pipe(exec('rm -rf ' + options.download.path + '/wp-content/themes/' + package.name , options))
    .pipe(exec('cp -rf ./gulpfile/extra/wp/starter-theme ' + options.download.path + '/wp-content/themes', options))
    .pipe(exec('mv -f ' + options.download.path + '/wp-content/themes/starter-theme ' + options.download.path + '/wp-content/themes/' + package.name , options))
    .pipe(exec('wp theme activate ' + package.name + ' --path=' + options.download.path, options))
    .on('end', function(){
      console.log('end');
    })
}

gulp.task('wp:theme', themeTask)