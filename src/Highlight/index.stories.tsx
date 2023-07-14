import { Meta, StoryObj } from '@storybook/react'
import { Highlight, HighlightProps } from '.'

const meta = {
  title: 'Highlight',
  component: Highlight,
} satisfies Meta<typeof Highlight>

export default meta

type Story = StoryObj<HighlightProps>

export const Default: Story = {
  args: {
    search: 'ab',
    children: 'abcdabcd',
  },
}
