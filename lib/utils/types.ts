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

export type EasyCascaderDuplicatedProps<T> = {
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
   */
  startAdornment?: (node: T) => ReactNode
  /**
   * end input adornment for the list
   */
  endAdornment?: (node: T) => ReactNode
}

export type EasyCascaderProps<T extends EasyCascaderBaseNode> =
  EasyCascaderDuplicatedProps<T> & {
    selectedId: EasyId | null
    setSelectedId: (id: EasyId | null) => void
    hoverId?: EasyId | null
  }
