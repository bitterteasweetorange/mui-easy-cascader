import type { Meta, StoryObj } from '@storybook/react'
import { Button } from 'src/components'

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['auto'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'btn',
  },
}

export const Secondary: Story = {
  args: {
    children: 'btn',
    variant: 'secondary',
  },
}
