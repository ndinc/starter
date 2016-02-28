var config       = require('../../config')
var gulp         = require('gulp')
var exec = require('gulp-exec');

var pluginTask = function() {
  return gulp.src('')
    .pipe(exec('sed -e \"s/\\/wp-blog-header.php/\\/wp\\/wp-blog-header.php/g\" ./index.php > ../index.php' , options))
    .pipe(exec('mkdir -p ' + config.root.public + '/wp-content/uploads' , options))
    .pipe(exec('chmod 757 ' + config.root.public + '/wp-content/uploads' , options))
    .pipe(exec('rm -rf ' + config.root.public + '/wp-content/plugin/twenty*' , options))
    .on('end', function(){
      console.log('end');
    })
}

gulp.task('wp:plugin', pluginTask)