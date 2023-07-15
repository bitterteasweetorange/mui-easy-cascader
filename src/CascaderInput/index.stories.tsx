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
  const [value, onChange] = useState<string | null>('0-0-0')
  const mockNodes = createTreeNodes(3)
  return (
    <CascaderInput<string>
      nodes={mockNodes}
      value={value}
      onChange={onChange}
    />
  )
}
