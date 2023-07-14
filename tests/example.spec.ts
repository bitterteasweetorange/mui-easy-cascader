import { expect, test } from '@playwright/test'

const prefixUrl = 'example-button--'

test('primary button', async ({ page, baseURL }) => {
  await page.goto(baseURL + prefixUrl + 'primary')

  await expect(page.getByRole('button')).toHaveText('btn-primary')
})

test('secondary button', async ({ page, baseURL }) => {
  await page.goto(baseURL + prefixUrl + 'secondary')

  await expect(page.getByRole('button')).toHaveText('btn-secondary')
})
