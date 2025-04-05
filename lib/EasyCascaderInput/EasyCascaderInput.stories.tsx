import StarOutline from '@mui/icons-material/StarOutline'
import { Chip } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MockShape, mockNodes } from '../utils/mock'
import { EasyCascaderInput, EasyCascaderInputProps } from './EasyCascaderInput'

const meta = {
  title: 'EasyCascaderInput',
  component: EasyCascaderInput,
  decorators: [
    (StoryBase) => (
      <div style={{ height: 200 }}>
        <StoryBase />
      </div>
    ),
  ],
  args: {
    data: mockNodes,
    getNodeLabel: (node: MockShape) => node.name,
    error: false,
    required: false,
    disabled: false,
    helperText: '',
    label: '',
  },
  argTypes: {
    data: {
      table: {
        category: 'common props',
      },
    },
    getNodeLabel: {
      table: {
        category: 'common props',
      },
    },
    endAdornment: {
      table: {
        category: 'common props',
      },
    },
    startAdornment: {
      table: {
        category: 'common props',
      },
    },
    error: {
      table: {
        category: 'for input',
      },
    },
    label: {
      type: 'string',
      table: {
        category: 'for input',
      },
    },
    required: {
      table: {
        category: 'for input',
      },
    },
    disabled: {
      table: {
        category: 'for input',
      },
    },
    helperText: {
      type: 'string',
      table: {
        category: 'for input',
      },
    },
    sx: {
      control: false,
      table: {
        category: 'for input',
      },
    },
    value: {
      control: false,
      table: {
        type: {
          summary: 'T | null',
        },
      },
    },
  },
} satisfies Meta<EasyCascaderInputProps<MockShape>>

export default meta

type Story = StoryObj<EasyCascaderInputProps<MockShape>>

const Template = (args: EasyCascaderInputProps<MockShape>) => {
  const [value, onChange] = React.useState<MockShape | null>(mockNodes[2])

  return (
    <EasyCascaderInput<MockShape>
      {...args}
      value={value}
      onChange={onChange}
      sx={{
        width: 400,
      }}
    />
  )
}

export const Default: Story = {
  render: (args) => <Template {...args} />,
}

export const Adornment: Story = {
  render: (args) => <Template {...args} />,
  args: {
    endAdornment: (node, _, isLeaf) => {
      if (!node.age) return null
      if (!isLeaf) return null
      return (
        <Chip
          color="success"
          size="small"
          label={node.age}
        />
      )
    },
    startAdornment: (_, depth) => {
      if (depth === 1) return <StarOutline color="error" />
      return null
    },
  },
}
