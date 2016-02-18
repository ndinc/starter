var config    = require('../../config')
var gulp      = require('gulp')
var path      = require('path')
var rev       = require('gulp-rev')
var revNapkin = require('gulp-rev-napkin');

// 1) Add md5 hashes to assets referenced by CSS and JS files
gulp.task('rev-assets', function() {
  // Ignore files that may reference assets. We'll rev them next.
  var ignoreDirs = ['fonts','images']
  var extentions = []
  for (var i = 0; i < ignoreDirs.length; i++) {
    taskName = ignoreDirs[i]
    extentions = extentions.concat(config.tasks[taskName].extensions)
  }
  var ignoreThese = '!' + path.join(config.root.dest,'/**/*+('+extentions.join('|')+'|css|js|json|html)')

  return gulp.src([path.join(config.root.dest,'/**/*'), ignoreThese])
    .pipe(rev())
    .pipe(gulp.dest(config.root.dest))
    .pipe(revNapkin({verbose: false}))
    .pipe(rev.manifest(path.join(config.root.dest, 'rev-manifest.json'), {merge: true}))
    .pipe(gulp.dest(''))
})
