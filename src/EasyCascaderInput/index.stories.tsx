import { Chip } from '@mui/material'
import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { EasyCascaderInput } from '.'
import { MockObject, mockObjectNodes } from '../mock'

const meta = {
  title: 'EasyCascaderInput',
  component: EasyCascaderInput,
} satisfies Meta<typeof EasyCascaderInput>

export default meta

export const Defalut = () => {
  const [value, onChange] = useState<MockObject | null>(mockObjectNodes[2])

  return (
    <EasyCascaderInput<MockObject>
      data={mockObjectNodes}
      getNodeLabel={(node) => node.name}
      endAdornment={(node) => node.age && <Chip label={node.age} />}
      label={'label'}
      value={value}
      onChange={onChange}
    />
  )
}

export const DisplayPath = () => {
  const [value, onChange] = useState<MockObject | null>(mockObjectNodes[1])

  return (
    <EasyCascaderInput<MockObject>
      data={mockObjectNodes}
      getNodeLabel={(node) => node.name}
      value={value}
      onChange={onChange}
      displayPath
    />
  )
}
