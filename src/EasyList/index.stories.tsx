import { Chip, TextField } from '@mui/material'
import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { EasyList } from '.'
import { MockObject, mockObjectNodes } from '../mock'
import { EasyId } from 'src/types'

const meta = {
  title: 'component/EasyList',
  component: EasyList,
} satisfies Meta<typeof EasyList>

export default meta

export const Defalut = () => {
  const [search, setSearch] = useState('1')
  const [selectedId, setSelectedId] = useState<EasyId | null>(0)

  return (
    <>
      <TextField
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <EasyList<MockObject>
        data={mockObjectNodes}
        getNodeLabel={(node) => node.name}
        endAdornment={(node) => node.age && <Chip label={node.age} />}
        search={search}
        setSearch={setSearch}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </>
  )
}
