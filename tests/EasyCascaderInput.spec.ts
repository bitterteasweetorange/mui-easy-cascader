import { expect, test } from '@playwright/test'

const path = '/iframe.html?id=cascader-easycascaderinput--'

test('initial value', async ({ page }) => {
  await page.goto(path + 'default')

  const locator = page.locator('input')
  await expect(locator).toHaveValue('parent-0 / children-1')
})

test('initial select', async ({ page }) => {
  await page.goto(path + 'default')

  await page.locator('input').click()
  const locator = page.locator('role=menuitem')
  await expect(locator).toHaveCount(5)

  //select
  const selectedLocator = page.locator('.Mui-selected')
  await expect(selectedLocator).toHaveCount(2)
})

test('leaf select', async ({ page }) => {
  await page.goto(path + 'default')

  await page.locator('input').click()
  const locator = page.locator('role=menuitem')
  await expect(locator).toHaveCount(5)

  //select
  await page.getByText('children-0').click()
  await page.getByText('depth2').click()

  await expect(page.locator('input')).toHaveValue(
    'parent-0 / children-0 / depth2',
  )
})

test('clear value', async ({ page }) => {
  await page.goto(path + 'default')

  await page.locator('input').hover()
  await page.getByRole('button').click()

  await expect(page.locator('input')).toHaveValue('')
})

test('adornment', async ({ page }) => {
  await page.goto(path + 'adornment')

  await page.locator('input').click()
  const starIcon = page.getByTestId('StarOutlineIcon')
  await expect(starIcon).toHaveCount(3)
  const chip = page.locator('.MuiChip-label')
  await expect(chip).toHaveCount(1)
})

const hightlightBackgroundColor = 'rgb(253, 231, 155)'
const hightlightTextColor = 'rgb(250, 173, 20)'

test('search 0', async ({ page }) => {
  await page.goto(path + 'default')

  const input = page.locator('input')
  await input.click()
  await input.fill('0')

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
  await expect(hightlightText.nth(2)).toHaveCSS('color', hightlightTextColor)

  // select
  await page.getByText('depth2').click()

  await expect(page.locator('input')).toHaveValue(
    'parent-0 / children-0 / depth2',
  )
})
