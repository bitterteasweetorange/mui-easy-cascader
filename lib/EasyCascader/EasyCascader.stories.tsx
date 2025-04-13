import { StarOutline } from '@mui/icons-material'
import { Chip } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { type MockShape, mockNodes } from '../utils/mock'
import { EasyId } from '../utils/types'
import { EasyCascader, EasyCascaderProps } from './EasyCascader'

const meta = {
  title: 'Cascader/EasyCascader',
  component: EasyCascader,
  args: {
    data: mockNodes,
    getNodeLabel: (node: MockShape) => node.name,
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
} satisfies Meta<EasyCascaderProps<MockShape>>

export default meta

type Story = StoryObj<EasyCascaderProps<MockShape>>

export const Default: Story = {
  render: (args) => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(
      mockNodes[2].id,
    )

    const selectedNode = mockNodes.find((node) => node.id === selectedId)

    return (
      <>
        you select: {selectedNode?.name}
        <EasyCascader<MockShape>
          {...args}
          data={mockNodes}
          selectedId={args.selectedId ?? selectedId}
          onSelect={(node) => {
            setSelectedId(node?.id ?? null)
          }}
          autoFocusItem
          endAdornment={(node, _, isLeaf) => {
            if (!node.age) return null
            if (!isLeaf) return null
            return (
              <Chip
                color="success"
                size="small"
                label={node.age}
              />
            )
          }}
          startAdornment={(_, depth) => {
            if (depth === 1) return <StarOutline color="error" />
            return null
          }}
        />
      </>
    )
  },
}
export const KeyboardEvent: Story = {
  render: (args) => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(null)

    const selectedNode = mockNodes.find((node) => node.id === selectedId)

    return (
      <>
        you select: {selectedNode?.name}
        <EasyCascader<MockShape>
          {...args}
          data={mockNodes}
          selectedId={args.selectedId ?? selectedId}
          onSelect={(node) => {
            setSelectedId(node?.id ?? null)
          }}
          autoFocusItem
        />
      </>
    )
  },
}
