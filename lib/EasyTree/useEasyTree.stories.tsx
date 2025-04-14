import {
  AddOutlined,
  DeleteForeverOutlined,
  EditOutlined,
} from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React, { useEffect } from 'react'
import { type MockShape, mockNodes } from '../utils/mock'
import { EasyTree, EasyTreeProps } from './EasyTree'
import { useEasyTree, UseEasyTreeProps } from './useEasyTree'

const meta = {
  title: 'Tree/useEasyTree',
  decorators: (Story) => (
    <Box
      sx={{
        width: 500,
      }}
    >
      {<Story />}
    </Box>
  ),
} satisfies Meta<UseEasyTreeProps<MockShape>>

export default meta

type Story = StoryObj<EasyTreeProps<MockShape>>

export const Default: Story = {
  render: () => {
    const {
      expandedId,
      setExpandedId,
      selectedId,
      setSelectedId,
      data,
      getNodeLabel,
      setFullData,
      search,
      createNode,
      updateNode,
      deleteNode,
      fullData,
    } = useEasyTree<MockShape>({
      getNodeLabel(node) {
        return node.name
      },
      defaultSelectedId: 5,
      defaultExpandedIds: [0],
    })

    useEffect(() => {
      setFullData(mockNodes)
    }, [])

    const selectedNode = fullData.find((node) => node.id === selectedId)
    return (
      <>
        you select: {selectedNode?.name}
        <EasyTree<MockShape>
          data={data}
          getNodeLabel={getNodeLabel}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
          selectedId={selectedId}
          setSelectedId={(id) => {
            setSelectedId(id)
          }}
          selectMode="leafOnly"
          search={search}
          actionButtons={(node) => (
            <Box>
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
              <IconButton
                color="warning"
                onClick={() => {
                  updateNode(node.id, {
                    ...node,
                    name: 'new name',
                  })
                }}
              >
                <EditOutlined />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => {
                  deleteNode(node.id)
                }}
              >
                <DeleteForeverOutlined />
              </IconButton>
            </Box>
          )}
        />
      </>
    )
  },
}
