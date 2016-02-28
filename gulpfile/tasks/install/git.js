var config       = require('../../config')
var gulp         = require('gulp')
var package = require('../../../package.json')
var exec = require('gulp-exec');



var gitInitTask = function() {
  return gulp.src('')
    .pipe(exec('rm -rf .git', options))
    .pipe(exec('git flow init -d', options))
    .pipe(exec('git remote add origin git@github.com:ndinc/' + package.name + '.git', options))
    .pipe(exec('git add --all', options))
    .pipe(exec('git commit -am "Initial commit"', options))
    .on('end', function(){
      console.log('end');
    })
}

gulp.task('git:init', gitInitTask)

var gitPushTask = function() {
  return gulp.src('')
    .pipe(exec('rm -rf .git', options))
    .pipe(exec('git flow init -d', options))
    .pipe(exec('git remote add origin git@github.com:ndinc/' + package.name + '.git', options))
    .pipe(exec('git add --all', options))
    .pipe(exec('git commit -am "Initial commit"', options))
    .on('end', function(){
      console.log('end');
    })
}

gulp.task('git:push', gitPushTask)