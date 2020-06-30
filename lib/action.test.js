const Assert = require('assert')

describe(`Action test [AT]`, () => {
  const { CI } = process.env

  it(`Should pass if this is CI`, () => {
    Assert.strictEqual(CI, 'true')
  })
})
