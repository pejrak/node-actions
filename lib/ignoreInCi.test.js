const Assert = require('assert')

describe(`Ignore action test [AT]`, () => {
  beforeEach(function() {
    const { CI } = process.env
    if (CI === 'true') {
      this.skip()
    }
  })

  it(`Should be skipped in CI`, () => {
    Assert.strictEqual(true, false)
  })
})
