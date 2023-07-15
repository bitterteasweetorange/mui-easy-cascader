import { CascaderNode } from 'src/types'
import { getLabel } from './getNodeLabel'

type Result<T> = {
  pathLabel: string[]
  value: T
  isLeaf: boolean
}

export function flatNodes<T>(
  nodes: CascaderNode<T>[],
  pathLabel: string[],
  getNodeLabel?: (value: T) => string,
): Result<T>[] {
  return nodes.reduce((acc, node) => {
    const currentNodeLabel = getLabel(node.value, getNodeLabel)
    const nextPathLabel = [...pathLabel, currentNodeLabel]
    const { value } = node

    if (node.children) {
      return [
        ...acc,
        {
          value,
          pathLabel: nextPathLabel,
          isLeaf: false,
        },
        ...flatNodes(node.children, nextPathLabel, getNodeLabel),
      ]
    }
    return [
      ...acc,
      {
        value,
        pathLabel: nextPathLabel,
        isLeaf: true,
      },
    ]
  }, [] as Result<T>[])
}
