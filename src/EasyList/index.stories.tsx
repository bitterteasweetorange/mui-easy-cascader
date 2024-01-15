import { Chip, TextField } from '@mui/material'
import type { Meta } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'
import { EasyId } from 'src/types'
import { EasyKeyboardRefObject, EasyList } from '.'
import { MockObject, mockObjectNodes } from '../mock'
import { keyboardEvent } from './keyboardEvent'

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

export const Keyboard = () => {
  const [selectedId, setSelectedId] = useState<EasyId | null>(0)
  const [hoverId, setHoverId] = useState<EasyId | null>(null)
  const ref = useRef<EasyKeyboardRefObject<MockObject> | null>(null)

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      keyboardEvent(e, ref.current?.filterData || [], hoverId, setHoverId)
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [hoverId])

  return (
    <>
      press keyboard "Up" / "Down" / "Enter"
      <EasyList<MockObject>
        search=""
        ref={ref}
        hoverId={hoverId}
        data={mockObjectNodes}
        getNodeLabel={(node) => node.name}
        selectedId={selectedId}
        onSelect={(id) => {
          setSelectedId(id)
          setHoverId(null)
        }}
      />
    </>
  )
}
