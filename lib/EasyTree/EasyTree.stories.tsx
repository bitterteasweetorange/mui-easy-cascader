import { EditOutlined, StarOutline } from '@mui/icons-material'
import { Box, Chip, IconButton } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { isLeafNode } from '../utils'
import { type MockShape, mockNodes } from '../utils/mock'
import { EasyId } from '../utils/types'
import { EasyTree, EasyTreeProps } from './EasyTree'

const meta = {
  title: 'Tree/EasyTree',
  component: EasyTree,
  decorators: (Story) => (
    <Box
      sx={{
        width: 300,
      }}
    >
      {<Story />}
    </Box>
  ),
  args: {
    data: mockNodes,
    getNodeLabel: (node: MockShape) => node.name,
    selectMode: 'noSelect',
    search: '',
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
    expandedId: {
      table: {
        type: {
          summary: 'string[] | number[]',
        },
        defaultValue: {
          summary: '[]',
        },
      },
      control: false,
    },
    selectMode: {
      table: {
        type: {
          summary: 'leafOnly | noSelect | all',
        },
        defaultValue: {
          summary: 'noSelect',
        },
      },
    },
  },
} satisfies Meta<EasyTreeProps<MockShape>>

export default meta

type Story = StoryObj<EasyTreeProps<MockShape>>

export const Default: Story = {
  render: (args) => {
    const [expandedId, setExpandedId] = useState<EasyId[]>([0])
    return (
      <EasyTree<MockShape>
        {...args}
        expandedId={expandedId}
        setExpandedId={setExpandedId}
        endAdornment={(node, _) => {
          if (!node.age) return null
          if (!isLeafNode(node)) return null
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
    )
  },
}

export const SelectLeafOnly: Story = {
  args: {
    selectMode: 'leafOnly',
  },
  render: (args) => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(
      mockNodes[2].id,
    )

    const selectedNode = mockNodes.find((node) => node.id === selectedId)

    const [expandedId, setExpandedId] = useState<EasyId[]>([0])

    return (
      <>
        you select: {selectedNode?.name}
        <EasyTree<MockShape>
          {...args}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
          selectedId={selectedId}
          onSelect={(node) => {
            setSelectedId(node?.id ?? null)
          }}
        />
      </>
    )
  },
}
export const SelectAllNodes: Story = {
  args: {
    selectMode: 'all',
  },
  render: (args) => {
    const [selectedId, setSelectedId] = React.useState<EasyId | null>(
      mockNodes[2].id,
    )

    const selectedNode = mockNodes.find((node) => node.id === selectedId)

    const [expandedId, setExpandedId] = useState<EasyId[]>([0])

    return (
      <>
        you select: {selectedNode?.name}
        <EasyTree<MockShape>
          {...args}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
          selectedId={selectedId}
          onSelect={(node) => {
            setSelectedId(node?.id ?? null)
          }}
        />
      </>
    )
  },
}
export const ActionButtons: Story = {
  render: (args) => {
    const [expandedId, setExpandedId] = useState<EasyId[]>([0])

    return (
      <EasyTree<MockShape>
        {...args}
        expandedId={expandedId}
        setExpandedId={setExpandedId}
        actionButtons={() => (
          <IconButton
            size="small"
            color="error"
            onClick={(e) => {
              e.stopPropagation()
              alert('click action button')
            }}
          >
            <EditOutlined />
          </IconButton>
        )}
      />
    )
  },
}
export const Search: Story = {
  args: {
    search: '1',
  },
  render: (args) => {
    const [expandedId, setExpandedId] = useState<EasyId[]>([0])

    return (
      <EasyTree<MockShape>
        {...args}
        expandedId={expandedId}
        setExpandedId={setExpandedId}
      />
    )
  },
}
