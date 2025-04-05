import { expect, test } from '@playwright/test'

const path = '/iframe.html?id=component-easyflatlist--'

test('default', async ({ page }) => {
  await page.goto(path + 'default')

  const locator = page.locator('role=menuitem')
  await expect(locator).toHaveCount(4)
  await expect(locator.nth(0)).toHaveText('parent-0/children-1')
  await expect(locator.nth(1)).toHaveText('parent-0/children-2')
  await expect(locator.nth(2)).toHaveText('parent-0/children-0/depth2')
  await expect(locator.nth(3)).toHaveText('parent-1')
})

test('search 0', async ({ page }) => {
  await page.goto(path + 'search')

  // filter
  const locator = page.locator('role=menuitem')
  await expect(locator).toHaveCount(3)
  await expect(locator.nth(0)).toHaveText('parent-0/children-0/depth2')
  await expect(locator.nth(1)).toHaveText('parent-0/children-1')
  await expect(locator.nth(2)).toHaveText('parent-0/children-2')

  // highlight
  const hightlightText = page.getByText('0')
  await expect(hightlightText).toHaveCount(4)
  await expect(hightlightText.first()).toHaveCSS(
    'background-color',
    hightlightBackgroundColor,
  )
})

test('adornment', async ({ page }) => {
  await page.goto(path + 'adornment')
  const starIcon = page.getByTestId('StarOutlineIcon')
  await expect(starIcon).toHaveCount(3)
  const chip = page.locator('.MuiChip-label')
  await expect(chip).toHaveCount(1)
})

const hightlightBackgroundColor = 'rgb(253, 231, 155)'
const hightlightTextColor = 'rgb(250, 173, 20)'

test('select', async ({ page }) => {
  await page.goto(path + 'select')

  // filter
  const locator = page.locator('role=menuitem')
  await expect(locator).toHaveCount(3)
  await expect(locator.nth(0)).toHaveText('parent-0/children-0/depth2')
  await expect(locator.nth(1)).toHaveText('parent-0/children-1')
  await expect(locator.nth(2)).toHaveText('parent-0/children-2')

  // highlight
  const hightlightText = page.getByText('0')
  await expect(hightlightText).toHaveCount(4)
  await expect(hightlightText.first()).toHaveCSS(
    'background-color',
    hightlightBackgroundColor,
  )

  // highlight selected
  await expect(hightlightText.nth(3)).toHaveCSS('color', hightlightTextColor)

  // keyboard event
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('Enter')
  await expect(hightlightText.nth(0)).toHaveCSS('color', hightlightTextColor)
})
