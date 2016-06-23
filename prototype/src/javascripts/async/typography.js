const $ = require('jquery')
const imagesLoaded = require('imagesloaded')

export default class Typography {
  constructor(args) {
    // code
    this.$html = $('html')
    this.$container = $('.typeset')
    this.$el = this.$container.find('p:has(img), .wp-caption')
    this.initialize()
  }

  // methods
  initialize() {
    imagesLoaded('#main', ()=>{
      this.setImageHeight()
    })

    $(window).on('resize', ()=>{
      this.setImageHeight()
    });
  }

  setImageHeight() {
    const fontsize = parseInt( this.$html.css('font-size') );
    this.$el.find('img').css('height', 'auto');
    this.$el.each( (i, el)=>{
      const $el = $(el);
      const height = $el.outerHeight(true);
      $el.find('img').css('height', Math.floor(height / fontsize)+'rem');
    })
  }
}