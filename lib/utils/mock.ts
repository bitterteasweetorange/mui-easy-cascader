export type MockShape = {
  id: number
  name: string
  age?: number
  childrenId?: number[]
  pathId?: number[]
}

export const mockNodes: MockShape[] = [
  {
    id: 0,
    name: 'parent-0',
    age: 100,
    childrenId: [1, 2, 3],
  },
  {
    id: 1,
    name: 'children-0',
    pathId: [0],
    childrenId: [4],
  },
  {
    id: 2,
    name: 'children-1',
    pathId: [0],
    age: 10,
  },
  {
    id: 3,
    name: 'children-2',
    pathId: [0],
  },
  {
    id: 4,
    name: 'depth2',
    pathId: [0, 1],
  },
  {
    id: 5,
    name: 'parent-1',
  },
]
