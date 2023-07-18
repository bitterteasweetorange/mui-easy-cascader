import { Box, Chip, TextField } from '@mui/material'
import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { createCascaderNodes } from 'src/utils/createCascaderNodes'
import { Cascader } from '.'
import { MockObject, mockObjectNodes } from '../mock'

const meta = {
  title: 'Cascader',
  component: Cascader,
} satisfies Meta<typeof Cascader>

export default meta

export const Defalut = () => {
  const [select, setSelected] = useState<string | null>('0-0')
  const mockNodes = createCascaderNodes(3)
  return (
    <Cascader<string>
      nodes={mockNodes}
      selected={select}
      onSelect={setSelected}
    />
  )
}

export const Search = () => {
  const [select, setSelected] = useState<string | null>('1')
  const [search, setSearch] = useState<string>('')
  const mockNodes = createCascaderNodes(2)
  return (
    <>
      <TextField
        label="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <Cascader<string>
        nodes={mockNodes}
        selected={select}
        onSelect={setSelected}
        search={search}
      />
    </>
  )
}

export const ObjectNode = () => {
  const [select, setSelected] = useState<MockObject | null>({
    id: 2,
    label: 'children-1',
    age: 10,
  })
  return (
    <Cascader<MockObject>
      nodes={mockObjectNodes}
      selected={select}
      onSelect={setSelected}
      isEqual={(a, b) => a.id === b.id}
    />
  )
}

export const GetNodeLabel = () => {
  const [select, setSelected] = useState<MockObject | null>(null)
  const [search, setSearch] = useState<string>('')
  return (
    <>
      <TextField
        label="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <Cascader<MockObject>
        search={search}
        nodes={mockObjectNodes}
        selected={select}
        onSelect={setSelected}
        isEqual={(a, b) => a.id === b.id}
        getNodeLabel={(node) =>
          `${node.label}${node.age ? '(' + node.age + ')' : ''}`
        }
      />
    </>
  )
}

export const RenderNode = () => {
  const [select, setSelected] = useState<MockObject | null>(null)
  return (
    <Cascader<MockObject>
      nodes={mockObjectNodes}
      selected={select}
      onSelect={setSelected}
      isEqual={(a, b) => a.id === b.id}
      renderNode={(Label, { value }) => (
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            gap: 1,
          }}
        >
          {Label}
          {value.age && (
            <Chip
              variant="outlined"
              size="small"
              label={value.age}
              color={value.age > 18 ? 'success' : 'error'}
            />
          )}
        </Box>
      )}
    />
  )
}
