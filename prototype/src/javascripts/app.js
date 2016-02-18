import routing from './util/routing'

const $ = require('jquery')

$(function(){
  const app = new App();
})

class App {
  constructor(el) {
    this.el = el
    this.$el = $(el)
    this.initialize()
  }

  initialize() {
    var _this = this;
    // routing.js load後
    require.ensure([], ()=> {
      routing()
      this.common_scripts()
    })

  }

  common_scripts(){
    // common scripts
    console.log('common scripts here !');
  }
}