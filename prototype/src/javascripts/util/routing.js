export default () => {
  const body = document.getElementsByTagName('body')
  const pageId = body[0].getAttribute('data-page-id');
  if (pageId) {
    const Module = require(`../pages/${pageId}`)
    new Module(pageId)
  }
}
