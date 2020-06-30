const Assert = require('assert')

describe(`Action test [AT]`, () => {
  it(`Should pass if this is CI`, () => {
    const { CI } = process.env
    Assert.strictEqual(CI, 'true')
  })
})