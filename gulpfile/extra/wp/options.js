var config       = require('../../config')
var package = require('../../../package.json')
var randomstring = require('randomstring');

var wp_install_path = '/wp';

var options = {
  'install_path': wp_install_path,
  'download': {
    'locale': 'ja',
    'version': '4.4.2',
    'path': config.root.public + wp_install_path
  },
  'config': {
    'path': config.root.public + wp_install_path,
    'dbname': 'wp_' + package.name,
    'dbuser': 'root',
    'dbpass': 'root',
    'dbhost': 'localhost',
    'dbprefix': 'nd_',
    'extra-php': [
      'define(\'WP_DEBUG\', true);',
      'define(\'WP_DEBUG_LOG\', true);',
      'define(\'WP_HOME\', \'http://localhost:' + config.tasks.php.server.port + '\');',
      'define(\'WP_SITEURL\',\'http://localhost:' + config.tasks.php.server.port + wp_install_path + '\');',
    ]
  },
  'install': {
    'path': config.root.public + wp_install_path,
    'url': 'http://localhost:' + config.tasks.php.server.port,
    'title': package.name,
    'admin_user': 'master',
    'admin_password': randomstring.generate(12),
    'admin_email': 'nd.miyamoto+wp@gmail.com',
  },
  'media': {
    'thumbnail': {
      'w': 150,
      'h': 150
    },
    'medium': {
      'w': 640,
      'h': 640
    },
    'large':{
      'w': 1200,
      'h': 1200
    }
  }
}

module.exports = options;
