import { Chip } from '@mui/material'
import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { EasyId } from 'src/types'
import { EasyCascader } from '.'
import { MockObject, mockObjectNodes } from '../mock'

const meta = {
  title: 'EasyCascader',
  component: EasyCascader,
} satisfies Meta<typeof EasyCascader>

export default meta

export const Defalut = () => {
  const [selectedId, setSelectedId] = useState<EasyId | null>(0)

  return (
    <EasyCascader<MockObject>
      data={mockObjectNodes}
      selectedId={selectedId}
      setSelectedId={setSelectedId}
      getNodeLabel={(node) => node.name}
      endAdornment={(node) => node.age && <Chip label={node.age} />}
    />
  )
}
