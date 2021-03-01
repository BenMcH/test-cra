const {foo} = require('./foo');

describe('foo', () => {
  it('equals bar', () => {
    expect(foo()).toStrictEqual('bar')
  })
})
