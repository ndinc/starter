var config       = require('../../config')
var options       = require('./options')
var gulp         = require('gulp')
var exec = require('gulp-exec');

// FIXED later
// TO correct options

var directoryTask = function() {
  return gulp.src('')
    .pipe(exec('sed -e \"s/\\/wp-blog-header.php/\\' + options.install_path +'\\/wp-blog-header.php/g\" ' + options.download.path + '/index.php > ' + config.root.public + '/index.php' , options))
    .pipe(exec('mkdir -p ' + options.download.path + '/wp-content/uploads' , options))
    .pipe(exec('chmod 757 ' + options.download.path + '/wp-content/uploads' , options))
    .on('end', function(){
      console.log('end');
    })
}

gulp.task('wp:directory', directoryTask)