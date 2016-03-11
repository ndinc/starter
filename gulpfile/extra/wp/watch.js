var config = require('../../config')
var gulp   = require('gulp')
var path   = require('path')
var browserSync  = require('browser-sync')
var watch  = require('gulp-watch')

var watchTask = function() {
  var watchableTasks = ['fonts', 'iconFont', 'images', 'svgSprite', 'css']

  watchableTasks.forEach(function(taskName) {
    var task = config.tasks[taskName]
    if(task) {
      var glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}')
      watch(glob, function() {
       require('../../tasks/' + taskName)()
      })
    }
    var wp_glob = path.join(config.root.public, '**/*.{html,php}')
    watch(wp_glob, function() {
      browserSync.reload()
    })
  })
}

gulp.task('wp:watch', ['server','php:server'], watchTask)
module.exports = watchTask
