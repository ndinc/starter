var config       = require('../../config')
var options       = require('./options')
// var package = require('../../../package.json')
var gulp         = require('gulp')
var exec = require('gulp-exec');


var getOptionString = function(task){
  var option = options[task]
  var optionString = [];
  for (var prop in option) {
    if (option.hasOwnProperty(prop)) {
      if(option[prop] instanceof Array){
        var valueString = ['--' + prop + ' <<PHP'];
        for (var i = 0; i < option[prop].length; i++) {
          valueString.push(option[prop][i]);
        }
        valueString.push("PHP");
        optionString.push('--' + prop + ' ' + valueString.join('\n'));
      }else{
        value = option[prop];
        optionString.push('--' + prop + '=' + value);
      }
    }
  }
  return optionString.join(' ')
}

var downloadTask = function() {
  return gulp.src('')
    .pipe(exec(['mkdir','-p', config.root.public].join(' ') , config.tasks.exec))
    .pipe(exec(['mkdir','-p', options.download.path].join(' ') , config.tasks.exec))
    .pipe(exec(['wp core download', getOptionString('download')].join(' ') , config.tasks.exec))
    .on('end', function(){
    })
}
gulp.task('wp:download', downloadTask)

var configTask = function() {
  return gulp.src('')
    .pipe(exec(['rm','-fr', options.config.path + '/wp-config.php'].join(' ') , config.tasks.exec))
    .pipe(exec(['wp core config', getOptionString('config')].join(' ') , config.tasks.exec))
    .on('end', function(){
    })
}
gulp.task('wp:config', configTask)

var installTask = function() {
  return gulp.src('')
    .pipe(exec(['wp core install', getOptionString('install')].join(' ') , config.tasks.exec))
    .pipe(exec(['echo', 'user: ', options.install.admin_user, '>> password.txt'].join(' ') , config.tasks.exec))
    .pipe(exec(['echo', 'pwd: ', options.install.admin_password, '>> password.txt'].join(' ') , config.tasks.exec))
    .on('end', function(){
      console.log('------- wordpress information ------\n');
      console.log('user: ' + options.install.admin_user);
      console.log('pwd: ' + options.install.admin_password + '\n');
      console.log('warning: Don\'t push password.txt' + '\n');
      console.log('------------------------------------');
    })
}
gulp.task('wp:install', installTask)

var optionTask = function() {
  return gulp.src('')
    .pipe(exec('wp rewrite structure \"/%postname%/\" --path=' + options.download.path, config.tasks.exec))
    .pipe(exec('wp option update thumbnail_size_w ' + options.media.thumbnail.w + ' --path=' + options.download.path, config.tasks.exec))
    .pipe(exec('wp option update thumbnail_size_h ' + options.media.thumbnail.h + ' --path=' + options.download.path, config.tasks.exec))
    .pipe(exec('wp option update medium_size_w ' + options.media.medium.w + ' --path=' + options.download.path, config.tasks.exec))
    .pipe(exec('wp option update medium_size_h ' + options.media.medium.h + ' --path=' + options.download.path, config.tasks.exec))
    .pipe(exec('wp option update large_size_w ' + options.media.large.w + ' --path=' + options.download.path, config.tasks.exec))
    .pipe(exec('wp option update large_size_h ' + options.media.large.h + ' --path=' + options.download.path, config.tasks.exec))
    .on('end', function(){
    })
}
gulp.task('wp:option', optionTask)