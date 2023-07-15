import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { CascaderInput } from '.'
import { createTreeNodes } from '../mock'

const meta = {
  title: 'Input/CascaderInput',
  component: CascaderInput,
} satisfies Meta<typeof CascaderInput>

export default meta

export const Defalut = () => {
  const [select, setSelected] = useState<string | null>('0-1')
  const mockNodes = createTreeNodes(4)
  return (
    <CascaderInput<string>
      nodes={mockNodes}
      value={select}
      onChange={setSelected}
    />
  )
}
