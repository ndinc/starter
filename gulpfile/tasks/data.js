var config  = require('../config')
var data    = require('gulp-data')
var replace = require('gulp-replace')
var changed = require('gulp-changed')
var gulp    = require('gulp')
var path    = require('path')
var through = require('through2')
var gutil    = require('gulp-util')
var fs           = require('fs')


var paths = {
  src: path.join(config.root.src, config.tasks.data.src, '**/*.json'),
  dest: path.join(config.root.src, config.tasks.html.src, config.tasks.data.dest)
}

var pattern = /{{([\w\.\|\-]+)}}/g

var getJsonValue = function(text, $, line, file){
  var data, props;
  var parseString = $.split('|')
  if (parseString.length > 1) {
    if(parseString[0] == 'db'){
      return text
    }
    var dataPath = path.resolve(config.root.src, config.tasks.data.src, parseString[0])
    data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
    props = parseString[1].split('.');
  }else{
    data = JSON.parse(file)
    props = parseString[0].split('.')
  }
  var value = {}
  for (var i = 0; i < props.length; i++) {
    value = value[ props[i] ] || data[ props[i] ]
  }
  return value
}

var changeRegExp = function(text, $, line, file){
  var is_database_template = null;
  value = getJsonValue(text, $, line, file)
  if(!value) return text
  if(value == text) is_database_template = true;
  while(value.match(pattern) && !is_database_template){
    value = value.replace(pattern, function(t, $$, l){
      var v = getJsonValue(t, $$, l, file);
      if (v == t) {
        is_database_template = true
        return t
      }else{
        return v
      }
    })
  }
  return value
}

var concatJson = function(option){
  var outputValue = {}

  /*
    transform関数：ファイル毎に呼び出される
  */
  function transform(file, encoding, callback) {
    if (file.isNull()) {
      // 次のプラグインに処理を渡すためにthis.push(file)しておく
      this.push(file);
      // callback()は必ず実行
      return callback();
    }
    var name = path.basename(file.path).replace('.json', '')
    outputValue[name] = JSON.parse(file.contents)
    callback();
  }

  /*
    flush関数：flush前に呼ばれる
  */
  function flush(callback) {

    // 出力ファイルを生成（新規ファイル生成にはgulp-utilのFileを利用する）
    var output = new gutil.File({
      path: 'global.json'
    });

    // // ファイルのコンテンツにはnode.jsのBufferを使う
    output.contents = new Buffer(JSON.stringify(outputValue, null, '  '));

    // // ファイルを出力ストリームに流す
    this.push(output);

    // callback()は必ず実行
    callback();
  }

  return through.obj(transform, flush);
}

var dataTask = function() {
  return gulp.src(paths.src)
    .pipe(replace(pattern, changeRegExp))
    .pipe(concatJson())
    .pipe(gulp.dest(paths.dest))
}

gulp.task('data', dataTask)
module.exports = dataTask


