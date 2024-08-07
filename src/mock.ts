export type MockObject = {
  id: number
  name: string
  age?: number
  childrenId?: number[]
  pathId?: number[]
}
export const mockObjectNodes: MockObject[] = [
  {
    id: 0,
    name: 'parent-0',
    age: 100,
    childrenId: [1, 2, 4],
  },
  {
    id: 1,
    name: 'children-0',
    pathId: [0],
  },
  {
    id: 2,
    name: 'children-1',
    pathId: [0],
    age: 10,
  },
  {
    id: 4,
    name: 'children-2',
    pathId: [0],
  },
  {
    id: 3,
    name: 'parent-1',
  },
]
