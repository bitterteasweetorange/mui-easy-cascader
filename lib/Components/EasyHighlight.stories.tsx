import { Meta, StoryObj } from '@storybook/react'
import { EasyHighlight, EasyHighlightProps } from '.'

const meta = {
  title: 'Components/EasyHighlight',
  component: EasyHighlight,
} satisfies Meta<typeof EasyHighlight>

export default meta

type Story = StoryObj<EasyHighlightProps>

export const Default: Story = {
  args: {
    search: 'orange',
    text: 'sweet orange',
  },
}

export const Focus: Story = {
  args: {
    search: 'orange',
    text: 'sweet orange',
    focused: true,
  },
}
