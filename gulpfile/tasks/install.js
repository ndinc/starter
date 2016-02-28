var config  = require('../config')
var gulp    = require('gulp')
var gulpSequence = require('gulp-sequence')
var exec = require('gulp-exec');
var package = require('../../package.json')
var path    = require('path')

var options = {
  continueOnError: false, // default = false, true means don't emit error event
  pipeStdout: false, // default = false, true means stdout is written to file.contents
  customTemplatingThing: "test" // content passed to gutil.template()
};
var reportOptions = {
  err: true, // default = true, false means don't write err
  stderr: true, // default = true, false means don't write stderr
  stdout: true // default = true, false means don't write stdout
}

var installTask = function(cb) {
  // gulpSequence('wp:install', cb)
  // return gulp.src('')
  //   .pipe(exec('chmod +x scripts/*.sh', options))
  //   .pipe(exec('scripts/test.sh 1', options))
  //   .pipe(exec(['mv', package.name, package.name].join(' ') , options))
  //   .pipe(exec.reporter(reportOptions))
  //   .on('end', function(){
  //     console.log('end');
  //   })
}
gulp.task('install', installTask)


// module.exports = installTask

// ource ~/.bash_profile;
// mkdir test;
// cd test;
// mkdir wp;
// cd wp;
// wp core download --locale=ja;
// wp core config --dbname=wp_test --dbuser=root --dbpass=root --dbhost=localhost --dbprefix=nd --extra-php <<PHP
// define('WP_DEBUG', true);
// define('WP_DEBUG_LOG', true);
// define('WP_HOME', 'http://local.test.com');
// define('WP_SITEURL','http://local.test.com/wp');
// PHP
// echo;
// mysql -u root -proot -h localhost -Bse "CREATE DATABASE wp_test";
// wp core install --url=http://localhost:8888 --title=test --admin_user=master --admin_password=H9lymPw --admin_email=nd.miyamoto+wp@gmail.com;
// sed -e "s/\/wp-blog-header.php/\/wp\/wp-blog-header.php/g" ./index.php > ../index.php;
// mkdir wp-content/uploads;
// chmod 757 wp-content/uploads;
// cd wp-content/themes;
// rm -rf twenty*;
// mkdir test;
// cd test;
// git clone --depth 1 git@github.com:ndinc/baseline.git .;
// sed  -e "s/#{project_name}/test/g" tmp/wp/style.css > style.css;
// mv .gitignore ../../../../.gitignore;
// mv tmp/wp/htaccess.txt ../../../../.htaccess;
// mv tmp/wp/screenshot.png screenshot.png;
// mv sitemap/ ../../../../sitemap;
// wp theme activate test;
// wp plugin activate wp-multibyte-patch;
// wp plugin install advanced-custom-fields --activate;
// wp plugin install http://data.ndv.me/wp-plugins/acf-gallery.zip --activate;
// wp plugin install http://data.ndv.me/wp-plugins/acf-repeater.zip --activate;
// wp plugin install http://data.ndv.me/wp-plugins/acf-options-page.zip --activate;
// wp plugin install admin-post-navigation --activate;
// wp plugin install wp-db-backup --activate;
// wp plugin install duplicate-post --activate;
// wp plugin install wordpress-importer --activate;
// wp plugin install regenerate-thumbnails --activate;
// wp plugin install intuitive-custom-post-order --activate;
// wp plugin uninstall hello;
// wp plugin uninstall akismet;
// wp plugin update --all;
// wp rewrite structure "/%postname%/";
// wp option update thumbnail_size_w 150;
// wp option update thumbnail_size_h 150;
// wp option update medium_size_w 660;
// wp option update medium_size_h 660;
// wp option update large_size_w 1024;
// wp option update large_size_h 1024;
// echo H9lymPw >> password.txt;
// sed -i".bak" -e "s/example.host/ssl73.heteml.jp/g" tmp/sftp-config.txt;
// sed -i".bak" -e "s/example.user/ndlab/g" tmp/sftp-config.txt;
// sed -i".bak" -e "s/example.password/n0xB2qkl/g" tmp/sftp-config.txt;
// sed -i".bak" -e "s/example.port/2222/g" tmp/sftp-config.txt;
// sed -i".bak" -e "s/example.remote_path/\/home\/sites\/heteml\/users73\/n\/d\/l\/ndlab\/web\/ndv\/#{project_name}/wp\/wp-content\/themes\/test/g" tmp/sftp-config.txt;
// sed -e "s/#{project_name}/test/g" tmp/sftp-config.txt > sftp-config.json;
// sed -e "s/#{project_name}/test/g" tmp/README.md > README.md;
// sed -e "s/#{project_name}/test/g" tmp/meta.php > data/meta.php;
// rm -fr .git;
// rm -fr tmp;
// npm install;
// grunt rewrite-json:name:test;
// grunt rewrite-bowerjson:name:test;
// grunt install;
// subl .;
// cd ../../../../;
// git init;
// git flow init -d;
// git remote add origin git@github.com:ndinc/test.git;
// git add .;
// git commit -am "Initial commit"
