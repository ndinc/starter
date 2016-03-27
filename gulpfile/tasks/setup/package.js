var gulp    = require('gulp')
var path    = require('path')
var gutil    = require('gulp-util')
var fs           = require('fs')

var initPackageTask = function(cb) {
  package = JSON.parse(fs.readFileSync('package.json', 'utf8'))
  if(package.name == 'starter'){
    package.name = '';
  }
  if(package.description == 'A full featured configurable gulp asset pipeline and static site builder'){
    package.description = '';
  }
  if(package.homepage == 'http://ndinc.github.io/starter/'){
    package.homepage = '';
  }
  if(package.repository.url == 'git://github.com/ndinc/starter.git'){
    package.repository.url = '';
  }
  package.version = '0.0.1';
  fs.writeFileSync(
    path.join(process.cwd(), '.', 'package.json'),
    JSON.stringify(package, null, '  ')
  )
  cb()
}

gulp.task('initPackage', initPackageTask)