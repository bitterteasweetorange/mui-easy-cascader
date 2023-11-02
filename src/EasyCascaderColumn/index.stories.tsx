import { Meta } from '@storybook/react'
import React from 'react'
import { MockObject, mockObjectNodes } from 'src/mock'
import { EasyCascaderColumn } from '.'

const meta = {
  title: 'component/EasyCascaderColumn',
  component: EasyCascaderColumn,
} satisfies Meta<typeof EasyCascaderColumn>

export default meta

export const Defalut = () => {
  const [activedId, setActivedId] = React.useState<MockObject['id']>(
    mockObjectNodes?.[0]?.id,
  )
  return (
    <EasyCascaderColumn<MockObject>
      ids={[0, 1]}
      activedId={activedId}
      onNodeClick={(node) => {
        setActivedId(node.id)
      }}
      getNodeLabel={(node) => node.name}
      data={mockObjectNodes}
    />
  )
}
