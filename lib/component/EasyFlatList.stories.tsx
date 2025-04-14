import { StarOutline } from '@mui/icons-material'
import { Chip } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { isLeafNode } from '../utils'
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
    autoFocusItem: false,
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
      control: 'radio',
      options: mockNodes.map((node) => node.id),
    },
    onSelect: {
      table: {
        type: {
          summary: '(node: T | null) => void',
        },
      },
    },
  },
} satisfies Meta<EasyFlatListProps<MockShape>>

export default meta

type Story = StoryObj<EasyFlatListProps<MockShape>>

export const Default: Story = {}

export const Search: Story = {
  args: {
    search: '0',
  },
}

export const Adornment: Story = {
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

export const Select: Story = {
  render: (args: Partial<EasyFlatListProps<MockShape>>) => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(3)
    const selectedNode = args.data?.find((node) => node.id === selectedId)

    return (
      <>
        you select: {selectedNode?.name}
        <EasyFlatList<MockShape>
          search="0"
          data={args.data || mockNodes}
          getNodeLabel={(node) => node.name}
          selectedId={selectedId}
          onSelect={(node) => {
            setSelectedId(node?.id ?? null)
          }}
          autoFocusItem
        />
      </>
    )
  },
}
