import { ReactNode } from 'react'

export type CascaderInputProps<T> = Pick<
  CascaderProps<T>,
  'nodes' | 'renderNode' | 'isEqual' | 'getNodeLabel'
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
  renderNode?: (
    Label: ReactNode,
    props: { value: T; depth: number; children?: CascaderNode<T>[] },
  ) => ReactNode
  /**
   * get the label of the node for hightlight and filter
   */
  getNodeLabel?: (value: T) => string
}

export interface CascaderNode<T> {
  /**
   * value of the node,
   * if value is primitive type, it will be used as label
   * if value is object, label will be used as label, or use getNodeLabel to get the label
   */
  value: T
  /**
   * nest children nodes
   */
  children?: CascaderNode<T>[]
}
