import type { ReactNode } from 'react'

export type EasyId = number | string
export type EasyCascaderBaseNode = {
  id: EasyId
  childrenId?: EasyId[]
  pathId?: EasyId[]
}

export type EasyCascaderDuplicatedProps<T> = {
  data: T[]
  getNodeLabel: (node: T) => string
  startAdornment?: (node: T) => ReactNode
  endAdornment?: (node: T) => ReactNode
}

export type EasyCascaderProps<T extends EasyCascaderBaseNode> =
  EasyCascaderDuplicatedProps<T> & {
    selectedId: EasyId | null
    setSelectedId: (id: EasyId | null) => void
    hoverId?: EasyId | null
  }
