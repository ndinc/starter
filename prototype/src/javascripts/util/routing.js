export default () => {
  const body = document.getElementsByTagName('body')
  const pageId = body[0].getAttribute('data-page-id');
  const Module = require(`../pages/${pageId}`)
  new Module(pageId)
}
