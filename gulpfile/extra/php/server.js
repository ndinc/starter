var config   = require('../../config')
var gulp     = require('gulp')
var path     = require('path')
var connect = require('gulp-connect-php')
var browserSync = require('browser-sync')
var open = require('open')

var phpServerTask = function() {
  connect.server({
    port: 8001,
    base: config.root.public,
  }, function (){
    open('http://localhost:8001')
    // browserSync({
    //   proxy: 'localhost:8000'
    // });
  });
};

gulp.task('php:server', phpServerTask)
