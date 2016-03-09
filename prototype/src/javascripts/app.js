window.$ = window.jQuery = window.$ || require('jquery')
import routing from './util/routing'

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
    const Hamburger = require('./async/hamburger.js')
    const hamburger = new Hamburger()

    console.log('common scripts here !');
  }
}