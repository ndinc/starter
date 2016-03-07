var config       = require('../../config')
var gulp         = require('gulp')
var package = require('../../../package.json')
var exec = require('gulp-exec');



var gitInitTask = function() {
  return gulp.src('')
    .pipe(exec('rm -rf .git', config.tasks.exec))
    .pipe(exec('git flow init -d', config.tasks.exec))
    .pipe(exec('git remote add origin git@github.com:ndinc/' + package.name + '.git', config.tasks.exec))
    .pipe(exec('git add --all', config.tasks.exec))
    .pipe(exec('git commit -am "Initial commit"', config.tasks.exec))
    .on('end', function(){
      console.log('end');
    })
}

gulp.task('git:init', gitInitTask)

var gitPushTask = function() {
  return gulp.src('')
    .pipe(exec('rm -rf .git', config.tasks.exec))
    .pipe(exec('git flow init -d', config.tasks.exec))
    .pipe(exec('git remote add origin git@github.com:ndinc/' + package.name + '.git', config.tasks.exec))
    .pipe(exec('git add --all', config.tasks.exec))
    .pipe(exec('git commit -am "Initial commit"', config.tasks.exec))
    .on('end', function(){
      console.log('end');
    })
}

gulp.task('git:push', gitPushTask)