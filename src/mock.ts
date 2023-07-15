import { CascaderNode } from './types'

export type MockObject = {
  id: number
  label: string
  age?: number
}
export const mockObjectNodes: CascaderNode<MockObject>[] = [
  {
    value: {
      id: 0,
      label: 'parent-0',
      age: 100,
    },
    children: [
      {
        value: { id: 1, label: 'children-0' },
      },
      {
        value: {
          id: 2,
          label: 'children-1',
          age: 10,
        },
      },
    ],
  },
  {
    value: {
      id: 3,
      label: 'parent-1',
    },
  },
]
