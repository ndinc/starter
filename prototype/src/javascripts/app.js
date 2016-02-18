import './asyncModules'
import exclaimify from './exclaimify'

const $ = require('jquery')

class App {
  constructor(el) {
    this.el = el
    this.$el = $(el)
    this.initialize()
  }

  initialize() {
    console.log(`
      asset references like this one:
      images/gulp.png
      get updated in js too!
    `)

    const button = document.getElementById('button')
    button.addEventListener('click', function() {
      // CommonJS async syntax webpack magic
      require.ensure([], function() {
        const message = require("./asyncMessage")
        alert(exclaimify(message))
      })
    })
  }
}


$(function(){
  const app = new App();
})