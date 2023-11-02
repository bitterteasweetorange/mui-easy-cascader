import { Meta, StoryObj } from '@storybook/react'
import { Highlight, HighlightProps } from '.'

const meta = {
  title: 'component/Highlight',
  component: Highlight,
} satisfies Meta<typeof Highlight>

export default meta

type Story = StoryObj<HighlightProps>

export const Default: Story = {
  args: {
    search: 'ab',
    text: 'abcdabcd',
  },
}

export const Focus: Story = {
  args: {
    search: 'ab',
    text: 'abcdabcd',
    focused: true,
  },
}
