var config       = require('../../config')
var package = require('../../../package.json')

var options = {
  "download": {
    "locale": "ja",
    "path": config.root.public
  },
  "config": {
    "dbname": "wp_" + package.name,
    "dbuser": "root",
    "dbpass": "root",
    "dbhost": "localhost",
    "dbprefix": "nd_",
    "extra-php": [
      "define(\'WP_DEBUG\', true);",
      "define(\'WP_DEBUG_LOG\', true);",
      "define(\'WP_HOME\', \'http://local."+package.name+".com\');",
      "define(\'WP_SITEURL\',\'http://local."+package.name+".com/wp\');",
    ]
  },
  "install": {
    "url": "http://localhost:8888",
    "title": package.name,
    "admin_user": "master",
    "admin_password": 'aaaaaa',
    "admin_email": "nd.miyamoto+wp@gmail.com",
  },
  "media": {
    "thumbnail": {
      "w": 150,
      "h": 150
    },
    "medium": {
      "w": 640,
      "h": 640
    },
    "large":{
      "w": 1200,
      "h": 1200
    }
  }
}

module.exports = options;
