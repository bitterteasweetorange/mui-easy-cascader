import { AddOutlined } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React, { useEffect } from 'react'
import { type MockShape, mockNodes } from '../utils/mock'
import { EasyTree, EasyTreeProps } from './EasyTree'
import { EasyTreeProvider, useEasyTreeContext } from './EasyTreeProvider'
import { useEasyTree } from './useEasyTree'

const meta = {
  title: 'Tree/EasyTreeProvider',
  decorators: (Story) => (
    <Box
      sx={{
        width: 400,
      }}
    >
      {<Story />}
    </Box>
  ),
} satisfies Meta

export default meta

type Story = StoryObj<EasyTreeProps<MockShape>>

export const Default: Story = {
  render: () => {
    const methods = useEasyTree<MockShape>()
    const {
      expandedId,
      setExpandedId,
      selectedId,
      setSelectedId,
      data,
      setData,
    } = methods

    useEffect(() => {
      setData(mockNodes)
    }, [])

    const selectedNode = data.find((node) => node.id === selectedId)
    return (
      <EasyTreeProvider {...methods}>
        you select: {selectedNode?.name}
        <br />
        <EasyTree<MockShape>
          data={data}
          getNodeLabel={(node) => node.name}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
          selectedId={selectedId}
          onSelect={(node) => {
            setSelectedId(node?.id ?? null)
          }}
          selectMode="all"
          actionButtons={(node) => <CreateTreeNode node={node} />}
        />
      </EasyTreeProvider>
    )
  },
}

function CreateTreeNode({ node }: { node: MockShape }) {
  const { createNode } = useEasyTreeContext<MockShape>()
  return (
    <IconButton
      color="success"
      onClick={() => {
        const parentId = node.id
        createNode(parentId, {
          id: new Date().getTime(),
          name: new Date().getTime() + '',
        })
      }}
    >
      <AddOutlined />
    </IconButton>
  )
}
