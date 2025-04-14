import { List } from '@mui/material'
import type { ReactNode } from 'react'
import {
  getRootIds,
  type EasyCommonProps,
  type EasyId,
  type EasyNode,
} from '../utils'
import { EasyTreeItem } from './EasyTreeItem'

export type EasyTreeProps<T extends EasyNode> = EasyCommonProps<T> & {
  expandedId: EasyId[]
  setExpandedId: (id: EasyId[]) => void
  /**
   * related to 'selectMode'
   */
  selectedId?: EasyId | null
  /**
   * callback when select a node
   */
  setSelectedId?: (id: EasyId | null) => void
  /**
   * @default: noSelect
   */
  selectMode?: 'leafOnly' | 'noSelect' | 'all'
  /**
   * hover to show the action buttons
   */
  actionButtons?: (node: T) => ReactNode
  /**
   * highlight the keyword
   */
  search?: string
}

export function EasyTree<T extends EasyNode>(props: EasyTreeProps<T>) {
  const { data } = props
  const rootIds = getRootIds(data)

  return (
    <List>
      {rootIds.map((id) => (
        <EasyTreeItem
          key={id}
          id={id}
          depth={0}
          {...props}
        />
      ))}
    </List>
  )
}

function filterKeywordNodes<T extends EasyNode>(
  fullData: T[],
  getNodeLabel: (node: T) => string,
  debouncedSearch: string,
): T[] {
  const includeKeywordNodes = fullData.filter((node) => {
    const label = getNodeLabel(node)
    return label.includes(debouncedSearch)
  })

  const res: T[] = includeKeywordNodes

  function addParentNode2Result(node: T) {
    const parent = fullData.find((item) => item.childrenId?.includes(node.id))
    if (parent && !res.includes(parent)) {
      res.push(parent)
      addParentNode2Result(parent)
    }
  }
  includeKeywordNodes.forEach((node) => {
    addParentNode2Result(node)
  })
  return res
}
