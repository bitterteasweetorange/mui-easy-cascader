import { ReactNode } from 'react'

export type CascaderInputProps<T extends EasyCascaderBaseNode> =
  CascaderProps<T> & {
    value: T | null
    onChange: (value: T | null) => void
    label?: ReactNode
    error?: boolean
    helperText?: ReactNode
    required?: boolean
    disabled?: boolean
  }

export type Id = number | string
export type EasyCascaderBaseNode = {
  id: Id
  childrenId?: Id[]
  pathId?: Id[]
}

export type EasyCascaderDuplicatedProps<T> = {
  data: T[]
  getNodeLabel: (node: T) => string
  startAdornment?: (node: T) => ReactNode
  endAdornment?: (node: T) => ReactNode
  // hover to show
  selectedId: Id | null
  setSelectedId: (id: Id | null) => void
  search?: string
}

export type CascaderProps<T extends EasyCascaderBaseNode> =
  EasyCascaderDuplicatedProps<T>
