import { Chip } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EasyCascaderInput, EasyCascaderInputProps } from '.'
import { MockObject, mockObjectNodes } from '../mock'

const meta = {
  title: 'EasyCascaderInput',
  component: EasyCascaderInput,
  argTypes: {
    helperText: {
      type: 'string',
    },
    value: {
      control: false,
    },
  },
} satisfies Meta<typeof EasyCascaderInput>

export default meta

type Story = StoryObj<EasyCascaderInputProps<MockObject>>

const Template = (args: EasyCascaderInputProps<MockObject>) => {
  const [value, onChange] = useState<MockObject | null>(mockObjectNodes[2])

  return (
    <EasyCascaderInput<MockObject>
      {...args}
      value={value}
      onChange={onChange}
    />
  )
}

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    label: 'label',
    data: mockObjectNodes,
    getNodeLabel: (node) => node.name,
  },
}

export const DisplayPath: Story = {
  render: (args) => <Template {...args} />,
  args: {
    displayPath: true,
    data: mockObjectNodes,
    getNodeLabel: (node) => node.name,
  },
}
export const Adornment: Story = {
  render: (args) => <Template {...args} />,
  args: {
    data: mockObjectNodes,
    getNodeLabel: (node) => node.name,
    endAdornment: (node) => node.age && <Chip label={node.age} />,
    startAdornment: (node) => node.age && <Chip label={node.age} />,
  },
}
