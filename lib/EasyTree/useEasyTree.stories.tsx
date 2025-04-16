import {
  AddOutlined,
  DeleteForeverOutlined,
  EditOutlined,
} from '@mui/icons-material'
import { Box, IconButton, TextField } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import React, { useEffect, useState } from 'react'
import { type MockShape, mockNodes } from '../utils/mock'
import { EasyTree, EasyTreeProps } from './EasyTree'
import { useEasyTree, UseEasyTreeProps } from './useEasyTree'

const meta = {
  title: 'Tree/useEasyTree',
  decorators: (Story) => (
    <Box
      sx={{
        width: 400,
      }}
    >
      {<Story />}
    </Box>
  ),
  argTypes: {
    defaultExpandedIds: {
      description: '',
      table: {
        type: {
          summary: 'string[] | number[]',
        },
      },
    },
    defaultSelectedId: {
      table: {
        type: {
          summary: 'string | number | null',
        },
      },
    },
  },
} satisfies Meta<UseEasyTreeProps>

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
      setData,
      createNode,
      updateNode,
      deleteNode,
    } = useEasyTree<MockShape>({
      defaultSelectedId: 5,
      defaultExpandedIds: [0],
    })

    useEffect(() => {
      setData(mockNodes)
    }, [])

    const selectedNode = data.find((node) => node.id === selectedId)
    const [search, setSearch] = useState('')
    return (
      <>
        you select: {selectedNode?.name}
        <br />
        <TextField
          value={search}
          onChange={(e) => {
            setSearch(e.target.value || '')
          }}
        />
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
