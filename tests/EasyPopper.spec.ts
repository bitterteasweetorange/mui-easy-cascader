import { expect, test } from '@playwright/test'

const path = '/iframe.html?id=components-easypopper--defalut'

test('show popper', async ({ page }) => {
  await page.goto(path)

  await page.getByRole('button').click()

  await expect(page.getByText('content')).toBeVisible()
})

test('close popper', async ({ page }) => {
  await page.goto(path)

  // open
  await page.getByRole('button').click()
  await expect(page.getByText('content')).toBeVisible()

  //close
  await page.mouse.click(150, 150)

  await expect(page.getByText('content')).toBeHidden()
})
