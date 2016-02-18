// ページごとに読み込まれるファイル
// Must use "const" or "var"

export default class Index {
  constructor(id) {
    this.id = id
    this.initialize()
    // code
  }

  initialize() {
    const message = require('../async/message.js')
    console.log(message(`${this.id}.js loaded`));
  }
  // methods
}