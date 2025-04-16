import { MenuList } from '@mui/material'
import { useMemo, type ReactNode } from 'react'
import { useDebounce } from 'use-debounce'
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
  onSelect?: (node: T | null) => void
  /**
   * @default: noSelect
   */
  selectMode?: 'leafOnly' | 'noSelect' | 'all'
  /**
   * hover to show the action buttons
   */
  actionButtons?: (node: T) => ReactNode
  /**
   * filter and highlight the keyword
   */
  search?: string
}

export function EasyTree<T extends EasyNode>(props: EasyTreeProps<T>) {
  const { setExpandedId, data, search, getNodeLabel } = props
  const [debouncedSearch] = useDebounce(search, 500)

  const visiableData: T[] = useMemo(() => {
    if (debouncedSearch === undefined || debouncedSearch === '') return data

    const visiableNodes = filterKeywordNodes(
      data,
      getNodeLabel,
      debouncedSearch,
    )
    setExpandedId(visiableNodes.map((node) => node.id))
    return visiableNodes
  }, [data, debouncedSearch])

  const rootIds = useMemo(() => {
    return getRootIds(visiableData)
  }, [visiableData])

  return (
    <MenuList>
      {rootIds.map((id) => (
        <EasyTreeItem
          key={id}
          {...props}
          id={id}
          depth={0}
          data={visiableData}
        />
      ))}
    </MenuList>
  )
}

function filterKeywordNodes<T extends EasyNode>(
  data: T[],
  getNodeLabel: (node: T) => string,
  search: string,
): T[] {
  const includeKeywordNodeIds = data
    .filter((node) => {
      const label = getNodeLabel(node)
      return label.includes(search)
    })
    .map((node) => node.id)

  const res: EasyId[] = includeKeywordNodeIds

  function addParentNodes2Result(id: EasyId) {
    const parent = data.find((item) => item.childrenId?.includes(id))
    if (parent && !res.includes(parent.id)) {
      res.push(parent.id)
      addParentNodes2Result(parent.id)
    }
  }

  includeKeywordNodeIds.forEach((id) => {
    addParentNodes2Result(id)
  })
  return res.map((id) => data.find((x) => x.id === id)!)
}
