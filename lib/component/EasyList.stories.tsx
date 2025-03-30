import { StarOutline } from '@mui/icons-material'
import { Chip } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MockShape, mockNodes } from '../utils/mock'
import { EasyId } from '../utils/types'
import { EasyList, EasyListProps } from './EasyList'

const meta = {
  title: 'component/EasyList',
  component: EasyList,
  args: {
    data: mockNodes,
    getNodeLabel: (node: MockShape) => node.name,
    search: '',
  },
  argTypes: {
    data: {
      table: {
        category: 'required',
      },
    },
    getNodeLabel: {
      table: {
        category: 'required',
      },
    },
    search: {
      table: {
        type: {
          summary: 'string | null',
        },
      },
      control: 'text',
    },
    selectedId: {
      table: {
        type: {
          summary: 'string | number | null',
        },
      },
      control: 'number',
    },
    onSelect: {
      table: {
        type: {
          summary: '(id: string | number | null) => void',
        },
      },
    },
  },
} satisfies Meta<EasyListProps<MockShape>>

export default meta

type Story = StoryObj<EasyListProps<MockShape>>

export const Defalut: Story = {}

export const Search: Story = {
  args: {
    search: '1',
  },
}

export const Adornment: Story = {
  args: {
    endAdornment: (node) => {
      if (!node.age) return null
      return (
        <Chip
          size="small"
          label={node.age}
        />
      )
    },
    startAdornment: (node) => {
      if (node.name !== 'parent-1') return null
      return <StarOutline color="error" />
    },
  },
}

export const Select: Story = {
  render: (args: Partial<EasyListProps<MockShape>>) => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(1)

    return (
      <EasyList<MockShape>
        data={args.data || mockNodes}
        getNodeLabel={(node) => node.name}
        selectedId={selectedId}
        onSelect={(id) => {
          setSelectedId(id)
        }}
      />
    )
  },
}
