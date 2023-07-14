import { CascaderNode } from './types'

function createTreeNodes(depth: number, prefix = ''): CascaderNode<string>[] {
  return new Array(3).fill(null).map((_, index) => ({
    key: `${prefix}${index}`,
    label: `${prefix}${index}`,
    value: `${prefix}${index}`,
    children:
      depth > 1 ? createTreeNodes(depth - 1, `${prefix}${index}-`) : undefined,
  }))
}

export const mockNodes = createTreeNodes(6)
