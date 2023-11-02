// import { expect, test } from '@playwright/test'
//
// const path = '/iframe.html?id=cascaderinput--defalut&viewMode=story'
// test('default value', async ({ page }) => {
//   await page.goto(path)
//
//   const input = page.locator('input')
//   await expect(input).toHaveValue('children-1')
// })
//
// test('use value as placeholder when focused', async ({ page }) => {
//   await page.goto(path)
//
//   const input = page.locator('input')
//   await input.focus()
//
//   await expect(input).toHaveValue('')
//   await expect(input).toHaveAttribute('placeholder', 'children-1')
//
//   page.click('body')
//   await expect(input).toHaveValue('children-1')
// })
//
// test('select leaf', async ({ page }) => {
//   await page.goto(path)
//
//   const input = page.locator('input')
//
//   await input.click()
//
//   const item = page.locator('//span[text()="parent-1"]')
//   await item.click()
//
//   await expect(input).toHaveValue('parent-1')
// })
//
// test('render node', async ({ page }) => {
//   await page.goto(path)
//
//   const input = page.locator('input')
//
//   await input.click()
//
//   const li = page.locator('.MuiChip-label')
//
//   await expect(li.first()).toHaveText('100')
//   await expect(li.nth(1)).toHaveText('10')
// })
