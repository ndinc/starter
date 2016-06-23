import routing from './util/routing'

window.$ = window.jQuery = window.$ || require('jquery')
const devicejs = require('device.js')
const imagesLoaded = require('imagesloaded')

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

    const Typography = require('./async/typography.js')
    const typography = new Typography()

    console.log('common scripts here !');
  }
}