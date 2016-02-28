var config       = require('../../config')
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


var themeTask = function() {
  return gulp.src('')
    .pipe(exec('wp plugin activate wp-multibyte-patch' , options))
    .pipe(exec('mkdir -p ' + config.root.public + '/wp-content/uploads' , options))
    .pipe(exec('chmod 757 ' + config.root.public + '/wp-content/uploads' , options))
    .pipe(exec('rm -rf ' + config.root.public + '/wp-content/themes/twenty*' , options))
    .on('end', function(){
      console.log('end');
    })
}

gulp.task('wp:theme', themeTask)

// command.push "wp plugin activate wp-multibyte-patch"
// $config["plugins"]["activate"].each do |plugin|
//  command.push "wp plugin install "+plugin+" --activate"
// end
// # $config["plugins"]["install"].each do |plugin|
// #  command.push "wp plugin install "+plugin
// # end
// ["hello","akismet"].each do |plugin|
//   command.push "wp plugin uninstall "+plugin
// end
// command.push "wp plugin update --all"
