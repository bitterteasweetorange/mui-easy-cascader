import { Box, Chip, TextField } from '@mui/material'
import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { createCascaderNodes } from 'src/utils/createCascaderNodes'
import { Cascader } from '.'
import { objectNodes } from '../mock'

const meta = {
  title: 'Cascader',
  component: Cascader,
} satisfies Meta<typeof Cascader>

export default meta

export const Defalut = () => {
  const [select, setSelected] = useState<string | null>('0-1-2-0')
  const mockNodes = createCascaderNodes(6)
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

type Shape = {
  id: number
  name: string
  age?: number
}

export const RenderNode = () => {
  const [select, setSelected] = useState<Shape | null>({
    id: 2,
    name: '0-1',
    age: 12,
  })
  return (
    <Cascader<Shape>
      nodes={objectNodes}
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
