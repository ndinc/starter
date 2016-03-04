const $ = require('jquery')

export default class Hamburger {
  constructor(args) {
    // code
    this.$html = $('html')
    this.$el = $('[js-hamburger]')
    this.$content = this.$el.find('[js-hamburger_content]')
    this.initialize()
  }

  // methods
  initialize() {
    $('body').prepend( this.$el.html() )
    this.$el.find('.m-hamburger_content').removeClass( 'm-hamburger_content' )
    this.$el.find('[js-hamburger_btn]').remove()
    this.setClickEvent()
  }

  setClickEvent() {
    $('[js-hamburger_btn]').on('click', (e)=>{
      if(this.$html.hasClass('is-hamburger_animation')){
        return false;
      }
      this.$html.addClass('is-hamburger_animation');
      this.toggleHumburgerClass();
      return false;
    });
  }

  toggleHumburgerClass() {
    const isActiveHamburger = this.$html.hasClass('is-active_hamburger')

    if(isActiveHamburger){
      this.$html.removeClass('is-active_hamburger');
      this.$html.addClass('is-active_end');
    }else{
      this.$html.addClass('is-active_hamburger');
    }

    this.$html.one('transitionend', ()=>{
      if(isActiveHamburger){
        this.$html.removeClass('is-active_hamburger is-active_end')
      }
      this.$html.removeClass('is-hamburger_animation');
    });
  }

}