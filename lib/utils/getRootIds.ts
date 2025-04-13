import type { EasyNode } from './types'

export function getRootIds<T extends EasyNode>(data: T[]) {
  return data
    .filter((node) => !node.pathId || node.pathId.length === 0)
    .map((node) => node.id)
}
