import { expect, test } from '@playwright/test'

const path = '/iframe.html?id=cascader-easycascader--'

test('default', async ({ page }) => {
  await page.goto(path + 'default')

  const locator = page.locator('role=menuitem')
  await expect(locator).toHaveCount(5)

  //select
  const selectedLocator = page.locator('.Mui-selected')
  await expect(selectedLocator).toHaveCount(2)
})

test('adornment', async ({ page }) => {
  await page.goto(path + 'default')

  const starIcon = page.getByTestId('StarOutlineIcon')
  await expect(starIcon).toHaveCount(3)
  const chip = page.locator('.MuiChip-label')
  await expect(chip).toHaveCount(1)
})

test('keyboard event, leaf select', async ({ page }) => {
  await page.goto(path + 'default')

  const locator = page.locator('role=menuitem')
  await expect(locator).toHaveCount(5)

  await page.keyboard.press('ArrowUp')
  await page.keyboard.press('Enter')
  await page.keyboard.press('Enter')

  await expect(locator).toHaveCount(6)

  //select
  const selectedLocator = page.locator('.Mui-selected')
  await expect(selectedLocator).toHaveCount(3)
  await expect(selectedLocator.nth(2)).toHaveText('depth2')
})

test('keyboard event, no select', async ({ page }) => {
  await page.goto(path + 'keyboard-event')

  const locator = page.locator('role=menuitem')
  await expect(locator).toHaveCount(2)

  await page.keyboard.press('Enter')
  await page.keyboard.press('Enter')
  await page.keyboard.press('Enter')

  await expect(locator).toHaveCount(6)

  //select
  const selectedLocator = page.locator('.Mui-selected')
  await expect(selectedLocator).toHaveCount(3)
  await expect(selectedLocator.nth(2)).toHaveText('depth2')
})
