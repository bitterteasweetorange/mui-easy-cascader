import { expect, test } from '@playwright/experimental-ct-react'
import { EasyHighlight } from '.'

test.use({ viewport: { width: 501, height: 500 } })

test('single', async ({ mount }) => {
  const component = await mount(
    <EasyHighlight
      search="a"
      text="aba"
    ></EasyHighlight>,
  )
  await expect(component).toContainText('aba')
  const marks = component.locator('mark')

  const mark = marks.nth(2)
  await expect(mark).toHaveText('a')
  await expect(mark).toHaveCSS('background-color', 'rgb(254, 231, 155)')
})

test('double', async ({ mount }) => {
  const component = await mount(
    <EasyHighlight
      search="ab"
      text="aba"
    ></EasyHighlight>,
  )
  await expect(component).toContainText('aba')
  const mark = component.locator('mark')
  await expect(mark).toHaveText('ab')
  await expect(mark).toHaveCSS('background-color', 'rgb(254, 231, 155)')
})

test('focus', async ({ mount }) => {
  const component = await mount(
    <EasyHighlight
      search="ab"
      focused
      text="aba"
    ></EasyHighlight>,
  )
  await expect(component).toContainText('aba')
  const mark = component.locator('mark')
  await expect(mark).toHaveText('ab')
  await expect(mark).toHaveCSS('background-color', 'rgb(254, 231, 155)')
  await expect(mark).toHaveCSS('color', 'rgb(251, 173, 20)')
})
