const yargs = require('../src/yargs')

describe('checks the only function in yargs.js', () => {
  it('should have a function called init', () => {
    expect(yargs.init).toBeTruthy()
  })
})
