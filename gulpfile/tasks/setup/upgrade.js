var gutil        = require("gulp-util")
var del = require('del')
var exec = require('gulp-exec')
var gulp = require('gulp')
var gulpSequence = require('gulp-sequence')
var rename  = require('gulp-rename')
var config  = require('../../config')
var path = require('path')
var fs = require('fs')



var upgradeFolders = [
  './gulpfile',
  './LICENSE'
]

var upgradeDir = './upgrade'


var upgradeDownloadTask = function() {
    return gulp.src('')
      .pipe(exec(['rm', '-rf', upgradeDir].join(' ') , config.tasks.exec))
      .pipe(exec(['git clone --depth 1 git@github.com:ndinc/starter.git', upgradeDir].join(' ') , config.tasks.exec))
      .pipe(exec.reporter())
}
gulp.task('upgradeDownloadTask', upgradeDownloadTask)

var upgradePackageTask = function(db) {
    var starterJson = JSON.parse(fs.readFileSync(path.join(upgradeDir ,'./package.json'), 'utf8'))
    var currentJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'))
    var is_update = false;
    for (var prop in starterJson.devDependencies) {
      if (starterJson.devDependencies.hasOwnProperty(prop)) {
        if(currentJson.devDependencies[prop] != starterJson.devDependencies[prop]){
          currentJson.devDependencies[prop] = starterJson.devDependencies[prop];
          is_update = true;
        }
      }
    }
    if(is_update){
      gutil.log(gutil.colors['green']('Updated package.json'))
      gutil.log(gutil.colors['yellow']('You should command \'$sudo npm install\''))
    }
    fs.writeFile('./package.json', JSON.stringify(currentJson, null, '  '))

    db()
}
gulp.task('upgradePackageTask', upgradePackageTask)

var upgradeReplaceTask = function() {
    var cmd = []
    for (var i = 0; i < upgradeFolders.length; i++) {
      cmd.push(['rm -rf', path.join(upgradeFolders[i])].join(' '))
      cmd.push(['mv', path.join(upgradeDir, upgradeFolders[i]), path.join(upgradeFolders[i])].join(' '))
    }

    return gulp.src('')
      .pipe(exec(cmd.join(' && '), config.tasks.exec))
      .pipe(exec.reporter())
}
gulp.task('upgradeReplaceTask', upgradeReplaceTask)

var upgradeTask = function(cb) {
  gulpSequence('upgradeDownloadTask', 'upgradePackageTask', 'upgradeReplaceTask', function(){
    del(upgradeDir).then(function (paths) {
      cb()
    })
  })
}

gulp.task('upgrade', upgradeTask)
module.exports = upgradeTask