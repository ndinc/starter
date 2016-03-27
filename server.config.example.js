var config  = require('./gulpfile/config')

var server = {
  "local": {
    "db": {
      "name": "wp_{{name}}",
      "user": "root",
      "password": "root",
      "host": "localhost"
    }
  },
  "staging": {
    "type": "sftp",
    "host": "{{host}}",
    "user": "{{user}}",
    "password": "{{password}}",
    "port": "22",
    "path": "{{path/to}}",
    "db": {
      "name": "{{name}}}",
      "user": "root",
      "password": "root",
      "host": "localhost"
    }
  },
  "production": {
    "type": "sftp",
    "host": "{{host}}",
    "user": "{{user}}",
    "password": "{{password}}",
    "port": "22",
    "path": "{{path/to}}",
    "db": {
      "name": "{{name}}",
      "user": "root",
      "password": "root",
      "host": "localhost"
    }
  }
}


module.exports = server;