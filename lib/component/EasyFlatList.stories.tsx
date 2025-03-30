import { StarOutline } from '@mui/icons-material'
import { Chip } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MockShape, mockNodes } from '../utils/mock'
import { EasyId } from '../utils/types'
import { EasyFlatList, EasyFlatListProps } from './EasyFlatList'

const meta = {
  title: 'component/EasyFlatList',
  component: EasyFlatList,
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
} satisfies Meta<EasyFlatListProps<MockShape>>

export default meta

type Story = StoryObj<EasyFlatListProps<MockShape>>

export const Defalut: Story = {}

export const Search: Story = {
  args: {
    search: '0',
  },
}

export const Adornment: Story = {
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

export const Select: Story = {
  render: (args: Partial<EasyFlatListProps<MockShape>>) => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(2)
    const selectedNode = args.data?.find((node) => node.id === selectedId)

    return (
      <>
        you select: {selectedNode?.name}
        <EasyFlatList<MockShape>
          data={args.data || mockNodes}
          getNodeLabel={(node) => node.name}
          selectedId={selectedId}
          onSelect={(id) => {
            setSelectedId(id)
          }}
        />
      </>
    )
  },
}
