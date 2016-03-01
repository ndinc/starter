// ページごとに読み込まれるファイル
// Must use "const" or "var"
const imagesLoaded = require('imagesLoaded')
const $ = require('jquery')

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
  }

  sample_imagesloaded(){
    imagesLoaded('#main', ()=>{
      console.log('loaded');
    });
  }

  sample_message(){
    const message = require('../async/message.js')
    console.log(message(`${this.id}.js loaded`));
  }
  // methods
}