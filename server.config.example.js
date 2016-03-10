var config  = require('./gulpfile/config')

var server = {
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
      "name": "{{name}}}",
      "user": "root",
      "password": "root",
      "host": "localhost"
    }
  }
}


module.exports = server;