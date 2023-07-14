import { Box, Chip, TextField } from '@mui/material'
import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { Cascader } from '.'
import { mockNodes } from '../mock'

const meta = {
  title: 'Cascader',
  component: Cascader,
} satisfies Meta<typeof Cascader>

export default meta

export const Defalut = () => {
  const [select, setSelected] = useState<string | null>('0-0')
  return (
    <Cascader<string>
      nodes={mockNodes}
      select={select}
      onSelect={setSelected}
    />
  )
}

export const Search = () => {
  const [select, setSelected] = useState<string | null>('1')
  const [search, setSearch] = useState<string>('')
  return (
    <>
      <TextField
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <Cascader<string>
        nodes={mockNodes}
        select={select}
        onSelect={setSelected}
        search={search}
      />
    </>
  )
}

export const ExpandDepth = () => {
  const [select, setSelected] = useState<string | null>('0-0')
  return (
    <Cascader<string>
      nodes={mockNodes}
      select={select}
      onSelect={setSelected}
      expandDepth={1}
    />
  )
}
export const ExpandNodes = () => {
  const [select, setSelected] = useState<string | null>('0-0')
  return (
    <Cascader<string>
      nodes={mockNodes}
      select={select}
      onSelect={setSelected}
      expandNodesKey={['1']}
    />
  )
}
type Shape = {
  id: number
  name: string
  age?: number
}
export const Render = () => {
  const [select, setSelected] = useState<Shape | null>({
    id: 2,
    name: '0-1',
    age: 12,
  })
  return (
    <Cascader<Shape>
      nodes={[
        {
          key: '0',
          label: '0',
          value: { id: 0, name: '0' },
          children: [
            {
              key: '0-0',
              label: '0-0',
              value: { id: 1, name: '0-0' },
            },
            {
              key: '0-1',
              label: '0-1',
              value: {
                age: 12,
                id: 2,
                name: '0-1',
              },
            },
          ],
        },
      ]}
      select={select}
      onSelect={setSelected}
      isEqual={(a, b) => a.id === b.id}
      render={(Label, { value }) => (
        <Box>
          {Label}
          {value.age && (
            <Chip
              label={value.age}
              color="primary"
            />
          )}
        </Box>
      )}
    />
  )
}
