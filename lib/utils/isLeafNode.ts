import type { EasyNode } from './types'

export function isLeafNode<T extends EasyNode>(node: T) {
  return !node.childrenId || node.childrenId.length === 0
}
