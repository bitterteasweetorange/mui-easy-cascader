import StarOutline from '@mui/icons-material/StarOutline'
import { Box, Chip } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { EasyTreeInput, EasyTreeInputProps } from '../EasyTree/EasyTreeInput'
import { isLeafNode } from '../utils'
import { MockShape, mockNodes } from '../utils/mock'

const meta = {
  title: 'Tree/EasyTreeInput',
  component: EasyTreeInput,
  decorators: [
    (StoryBase) => (
      <Box
        sx={{
          display: 'grid',
          width: 400,
          height: 300,
        }}
      >
        <StoryBase />
      </Box>
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
    autoFocus: false,
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
} satisfies Meta<EasyTreeInputProps<MockShape>>

export default meta

type Story = StoryObj<EasyTreeInputProps<MockShape>>

const Template = (args: EasyTreeInputProps<MockShape>) => {
  const [value, onChange] = React.useState<MockShape | null>(mockNodes[2])

  return (
    <EasyTreeInput<MockShape>
      {...args}
      value={value}
      onChange={onChange}
    />
  )
}

export const Default: Story = {
  render: (args) => <Template {...args} />,
}

export const Adornment: Story = {
  render: (args) => <Template {...args} />,
  args: {
    endAdornment: (node, _) => {
      if (!node.age) return null
      if (!isLeafNode(node)) return null
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
