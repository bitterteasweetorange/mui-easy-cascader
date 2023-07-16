import { Meta } from '@storybook/react'
import { Column } from '.'

const meta = {
  title: 'component/Column',
  component: Column,
} satisfies Meta<typeof Column>

export default meta

export const Defalut = () => {
  return (
    <Column<string>
      path={[
        {
          value: '1',
        },
      ]}
      depth={0}
      onSelect={() => {
        // TODO
      }}
      renderNode={(Label) => <>prefix-{Label}</>}
      currentDepthNodes={[
        {
          value: '0',
          children: [
            {
              value: '0-0',
            },
            {
              value: '0-1',
            },
          ],
        },
        {
          value: '1',
        },
      ]}
    />
  )
}
