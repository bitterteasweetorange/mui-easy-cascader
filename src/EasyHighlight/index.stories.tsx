import { Meta, StoryObj } from '@storybook/react'
import { EasyHighlight, EasyHighlightProps } from '.'

const meta = {
  title: 'component/EasyHighlight',
  component: EasyHighlight,
} satisfies Meta<typeof EasyHighlight>

export default meta

type Story = StoryObj<EasyHighlightProps>

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
