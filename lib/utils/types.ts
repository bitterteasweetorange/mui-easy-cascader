import type { ReactNode } from 'react'

/**
 * unique id type
 */
export type EasyId = number | string

export type EasyCascaderBaseNode = {
  id: EasyId
  childrenId?: EasyId[]
  pathId?: EasyId[]
}

export type EasyCascaderCommonProps<T> = {
  /**
   * all nodes data
   */
  data: T[]
  /**
   * text to be displayed in the list
   */
  getNodeLabel: (node: T) => string
  /**
   * start input adornment for the list
   * @param:
   * depth starts from 0
   * isLeaf is true if the node is a leaf node
   */
  startAdornment?: (node: T, depth: number, isLeaf: boolean) => ReactNode
  /**
   * end input adornment for the list
   * @param:
   * depth starts from 0
   * isLeaf is true if the node is a leaf node
   */
  endAdornment?: (node: T, depth: number, isLeaf: boolean) => ReactNode
}
