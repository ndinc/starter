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
    .pipe(exec(['mkdir','-p', config.root.public].join(' ') , options))
    .pipe(exec(['rm','-fr', config.root.public + '/wp-config.php'].join(' ') , options))
    .pipe(exec(['wp core download', getOptionString('download')].join(' ') , options))
    .on('end', function(){
      console.log('end');
    })
}
gulp.task('wp:download', downloadTask)

var configTask = function() {
  return gulp.src('')
    .pipe(exec(['rm','-fr', config.root.public + '/wp-config.php'].join(' ') , options))
    .pipe(exec(['wp core config', getOptionString('config')].join(' ') , options))
    .on('end', function(){
      console.log('end');
    })
}
gulp.task('wp:config', configTask)

var installTask = function() {
  return gulp.src('')
    .pipe(exec(['wp core install', getOptionString('install')].join(' ') , options))
    .pipe(exec(['echo', options['install']['admin_password'], '>> password.txt'].join(' ') , options))
    .on('end', function(){
      console.log('end');
    })
}
gulp.task('wp:install', installTask)

var optionTask = function() {
  return gulp.src('')
    .pipe(exec('wp rewrite structure \"/%postname%/\"', options))
    .pipe(exec('wp option update thumbnail_size_w ' + options['media']['thumbnail']['w'], options))
    .pipe(exec('wp option update thumbnail_size_h ' + options['media']['thumbnail']['h'], options))
    .pipe(exec('wp option update medium_size_w ' + options['media']['medium']['w'], options))
    .pipe(exec('wp option update medium_size_h ' + options['media']['medium']['h'], options))
    .pipe(exec('wp option update large_size_w ' + options['media']['large']['w'], options))
    .pipe(exec('wp option update large_size_h ' + options['media']['large']['h'], options))
    .on('end', function(){
      console.log('end');
    })
}
gulp.task('wp:option', optionTask)