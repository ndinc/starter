// ページごとに読み込まれるファイル
// Must use "const" or "var"
const imagesLoaded = require('imagesloaded')
const velocity = require('velocity-animate')

export default class Index {
  constructor(id) {
    this.id = id
    require.ensure(['jquery','imagesloaded'], ()=> {
      this.initialize()
    });
  }

  initialize() {
    this.sample_imagesloaded()
    this.sample_message()
    this.sample_velocity()
  }

  // methods
  sample_imagesloaded(){
    imagesLoaded('#main', ()=>{
      console.log('loaded');
    });
  }

  sample_message(){
    const message = require('../async/message.js')
    console.log(message(`${this.id}.js loaded`));
  }

  sample_velocity(){
    const $article = $('.m-list-article')
    $article.on('mouseenter', (e)=> {
      const $el = $(e.currentTarget).find('img')
      $el.velocity({
        // 'scale': 1.1
      }, {
        easing: 'easeOutQuart',
        duration: 500
      })
    })
    $article.on('mouseleave', (e)=> {
      const $el = $(e.currentTarget).find('img')
      $el.velocity({
        'scale': 1
      }, {
        easing: 'easeOutQuart',
        duration: 500
      })
    })
  }

}