import { Chip, TextField } from '@mui/material'
import type { Meta } from '@storybook/react'
import { useRef, useState } from 'react'
import { EasyList, EasyListRefObject } from '.'
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
        endAdornment={(node) =>
          node.age && (
            <Chip
              size="small"
              label={node.age}
            />
          )
        }
        search={search}
        selectedId={selectedId}
        onSelect={(id) => {
          setSelectedId(id)
        }}
      />
    </>
  )
}

export const Hover = () => {
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState<EasyId | null>(0)
  const [hoverId, setHoverId] = useState<EasyId | null>(null)
  const ref = useRef<EasyListRefObject<MockObject> | null>(null)

  return (
    <>
      <TextField
        autoComplete="off"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        onKeyDown={(e) => {
          const filterData = ref.current?.filterData || []
          const index = filterData.findIndex((node) => node.id === hoverId)
          switch (e.key) {
            case 'Enter':
              setSelectedId(hoverId)
              return
            case 'ArrowDown':
              setHoverId(filterData[index + 1]?.id ?? filterData[0]?.id)
              return
            case 'ArrowUp':
              setHoverId(
                filterData[index - 1]?.id ??
                  filterData[filterData.length - 1]?.id,
              )
              return
            default:
              return
          }
        }}
      />
      <EasyList<MockObject>
        ref={ref}
        hoverId={hoverId}
        data={mockObjectNodes}
        getNodeLabel={(node) => node.name}
        search={search}
        selectedId={selectedId}
        onSelect={(id) => {
          setSelectedId(id)
          setHoverId(null)
        }}
      />
    </>
  )
}
