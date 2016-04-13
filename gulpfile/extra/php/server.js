var config   = require('../../config')
var package = require('../../../package.json')
var gulp     = require('gulp')
var path     = require('path')
var browserSync = require('browser-sync')
var exec = require('gulp-exec')

var phpServerTask = function() {
  return gulp.src('')
    .pipe(exec(['cd', config.root.public, '&&', 'mamp add', package.name].join(' ') , config.tasks.exec))
    .pipe(exec(['mamp switch', package.name].join(' ') , config.tasks.exec))
    .pipe(exec.reporter())
    .on('end', function(){
      setTimeout(function(){
        browserSync({
          proxy: 'localhost:8888'
        });
      }, 1000)
    })
};

gulp.task('php:server', phpServerTask)
