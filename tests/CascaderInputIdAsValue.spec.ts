import { expect, test } from '@playwright/test'

const path = '/iframe.html?id=easycascaderinput--id-as-value&viewMode=story'

test('default value', async ({ page }) => {
  await page.goto(path)

  const input = page.locator('input')
  await expect(input).toHaveValue('children-1')
})

test('select leaf', async ({ page }) => {
  await page.goto(path)

  const input = page.locator('input')

  await input.click()

  const item = page.locator('//span[text()="parent-1"]')
  await item.click()

  await expect(input).toHaveValue('parent-1')
})
