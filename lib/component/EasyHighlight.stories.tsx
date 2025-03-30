import { Meta, StoryObj } from '@storybook/react'
import { EasyHighlight, EasyHighlightProps } from '.'

const meta = {
  title: 'Component/EasyHighlight',
  component: EasyHighlight,
  args: {
    focused: false,
    search: 'orange',
    text: 'sweet orange',
  },
  argTypes: {
    focused: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof EasyHighlight>

export default meta

type Story = StoryObj<EasyHighlightProps>

export const Default: Story = {}

export const Focus: Story = {
  args: {
    focused: true,
  },
}
