var config       = require('../../config')
var gulp         = require('gulp')
var exec = require('gulp-exec');

var options;
// FIXED later
// TO correct options

var directoryTask = function() {
  return gulp.src('')
    .pipe(exec('sed -e \"s/\\/wp-blog-header.php/\\/' + config.root.public.replace('./', '') + '\\/wp-blog-header.php/g\" ' + config.root.public + '/index.php > ./index.php' , options))
    .pipe(exec('mkdir -p ' + config.root.public + '/wp-content/uploads' , options))
    .pipe(exec('chmod 757 ' + config.root.public + '/wp-content/uploads' , options))
    .pipe(exec('rm -rf ' + config.root.public + '/wp-content/themes/twenty*' , options))
    .on('end', function(){
      console.log('end');
    })
}

gulp.task('wp:directory', directoryTask)