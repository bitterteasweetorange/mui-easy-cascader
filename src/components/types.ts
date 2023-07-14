import { ReactElement, ReactNode } from 'react'

export interface CascaderProps<T> {
  nodes: CascaderNode<T>[]
  select: T | null
  onSelect: (value: T | null) => void
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
    Label: ReactElement,
    props: { value: T; depth: number; children: CascaderNode<T>[] },
  ) => ReactNode
  /**
   * @default 0
   * expand depth of the nodes,
   * if expandNodes is set, expandDepth will be ignored
   */
  expandDepth?: number
  /**
   * expand nodes, overwrites expandDepth
   * pass key of the nodes to expand
   */
  expandNodesKey?: string[]
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
