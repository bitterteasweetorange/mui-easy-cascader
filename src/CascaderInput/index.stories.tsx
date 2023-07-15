import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { createCascaderNodes } from 'src/utils/createCascaderNodes'
import { CascaderInput } from '.'

const meta = {
  title: 'Input/CascaderInput',
  component: CascaderInput,
} satisfies Meta<typeof CascaderInput>

export default meta

export const Defalut = () => {
  const [value, onChange] = useState<string | null>('0-0-0')
  const mockNodes = createCascaderNodes(3)
  return (
    <CascaderInput<string>
      nodes={mockNodes}
      value={value}
      onChange={onChange}
    />
  )
}
