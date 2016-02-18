import message from '../async/message'

describe('message.js', () => {

  it('should make strings exciting!', () => {
    message('test').should.equal('test!')
  })
})
