import { CascaderNode } from './types'

export const objectNodes: CascaderNode<{
  id: number
  name: string
  age?: number
}>[] = [
    {
      key: '0',
      label: '0',
      value: {
        age: 33,
        id: 0,
        name: '0',
      },
      children: [
        {
          key: '0-0',
          label: '0-0',
          value: { id: 1, name: '0-0' },
        },
        {
          key: '0-1',
          label: '0-1',
          value: {
            age: 12,
            id: 2,
            name: '0-1',
          },
        },
      ],
    },
    {
      key: '1',
      label: '1',
      value: {
        id: 3,
        name: '1',
      },
    },
  ]
