import { expect, test } from '@playwright/test'

const path = '/iframe.html?id=easycascaderinput--display-path&viewMode=story'

test('display path of default value', async ({ page }) => {
  await page.goto(path)

  const input = page.locator('input')
  await expect(input).toHaveValue('parent-0 / children-0')
})
