import { expect, test } from '@playwright/test'

const path = '/iframe.html?id=components-easyhighlight--'

test('highlight keyword', async ({ page }) => {
  await page.goto(path + 'default')

  const locator = page.getByText('orange')

  await expect(locator).toHaveCSS('background-color', 'rgb(253, 231, 155)')
})

test('highlight keyword when focused', async ({ page }) => {
  await page.goto(path + 'focus')

  const locator = page.getByText('orange')

  await expect(locator).toHaveCSS('background-color', 'rgb(253, 231, 155)')
  await expect(locator).toHaveCSS('color', 'rgb(250, 173, 20)')
})
