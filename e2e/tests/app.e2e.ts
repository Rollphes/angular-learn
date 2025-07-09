import { getBrowserState, setupBrowserHooks } from '@e2e/tests/utils'

describe('App test', function () {
  setupBrowserHooks()
  it('is running', async function () {
    const { page } = getBrowserState()
    const element = await page.locator('::-p-text(angular-learn)').wait()

    expect(element).not.toBeNull()
  })
})
