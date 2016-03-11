var config   = require('../../config')
var gulp     = require('gulp')
var path     = require('path')
var connect = require('gulp-connect-php')
var browserSync = require('browser-sync')
var open = require('open')

var phpServerTask = function() {
  connect.server(config.tasks.php.server, function (){
    browserSync({
      proxy: 'localhost:' + config.tasks.php.server.port
    });
  });
};

gulp.task('php:server', phpServerTask)
