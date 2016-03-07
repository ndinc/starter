var config       = require('../../config')
var options       = require('./options')
var gulp         = require('gulp')
var exec = require('gulp-exec');

var plugins = {
  'activate': [
    'advanced-custom-fields',
    'http://data.ndv.me/wp-plugins/acf-gallery.zip',
    'http://data.ndv.me/wp-plugins/acf-repeater.zip',
    'http://data.ndv.me/wp-plugins/acf-options-page.zip',
    'admin-post-navigation',
    'wp-db-backup',
    'duplicate-post',
    'wordpress-importer',
    'regenerate-thumbnails',
    'intuitive-custom-post-order',
  ],
  'install': [
    'http://data.ndv.me/wp-plugins/acf-google-maps.zip',
    'tinymce-advanced',
    'contact-form-7',
    'wp-super-cache',
    'crayon-syntax-highlighter',
  ]
}


var pluginTask = function() {
  return gulp.src('')
    .pipe(exec('wp plugin activate wp-multibyte-patch --path=' + options.download.path, config.tasks.exec))
    .pipe(exec('wp plugin install ' + plugins.activate.join(' ') + ' --activate --path=' + options.download.path, config.tasks.exec))
    .pipe(exec('wp plugin install ' + plugins.install.join(' ') + ' --path=' + options.download.path, config.tasks.exec))
    .pipe(exec('wp plugin uninstall hello --path=' + options.download.path, config.tasks.exec))
    .pipe(exec('wp plugin update --all --path=' + options.download.path, config.tasks.exec))
    .on('end', function(){
    })
}

gulp.task('wp:plugin', pluginTask)