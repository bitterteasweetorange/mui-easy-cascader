import { ReactNode } from 'react'

export type CascaderInputProps<T> = Pick<
  CascaderProps<T>,
  'nodes' | 'render' | 'isEqual'
> & {
  value: T | null
  onChange: (value: T | null) => void
}

export interface CascaderProps<T> {
  nodes: CascaderNode<T>[]
  selected: T | null
  onSelect: (value: T | null, isLeaf: boolean) => void
  /**
   * filter / hightlight the nodes by search text
   */
  search?: string
  /**
   * compare function to check if two values are equal
   */
  isEqual?: (a: T, b: T) => boolean
  /**
   * render function to customize the node
   * Label is Higlight component
   */
  render?: (
    Label: ReactNode,
    props: { value: T; depth: number; children?: CascaderNode<T>[] },
  ) => ReactNode
}

export interface CascaderNode<T> {
  /**
   * unique key of the node
   */
  key: string
  /**
   * value of the node
   */
  value: T
  /**
   * label of the node, highlight will be applied to matched characters
   */
  label: string
  /**
   * nest children nodes
   */
  children?: CascaderNode<T>[]
}
