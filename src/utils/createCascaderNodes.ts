import { CascaderNode } from 'src/types'

export function createCascaderNodes(
  depth: number,
  prefix = '',
): CascaderNode<string>[] {
  return new Array(3).fill(null).map((_, index) => ({
    value: `${prefix}${index}`,
    children:
      depth > 1
        ? createCascaderNodes(depth - 1, `${prefix}${index}-`)
        : undefined,
  }))
}
