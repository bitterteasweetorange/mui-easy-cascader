import { KeyboardArrowRight } from '@mui/icons-material'
import {
  Box,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  type MenuListOwnProps,
} from '@mui/material'
import { useMemo } from 'react'
import { getRootIds } from '../utils'
import { isLeafNode } from '../utils/isLeafNode'
import type { EasyCommonProps, EasyId, EasyNode } from '../utils/types'

export type EasyCascaderProps<T extends EasyNode> = EasyCommonProps<T> & {
  /**
   * all nodes can be selected
   */
  selectedId?: EasyId | null
  /**
   * callback when select a node
   */
  onSelect?: (node: T | null) => void
  /**
   * if true, will focus the selected item to enable keyboard navigation
   */
  autoFocusItem?: boolean
}

export function EasyCascader<T extends EasyNode>(props: EasyCascaderProps<T>) {
  const {
    // common props
    data,
    getNodeLabel,
    startAdornment,
    endAdornment,
    // other
    selectedId,
    onSelect,
    autoFocusItem,
  } = props

  const selectedPathId = useMemo(() => {
    if (selectedId === null || selectedId === undefined) return []

    const selectedNode = data.find((node) => node.id === selectedId)
    if (!selectedNode) return []

    const pathId = selectedNode.pathId
    if (!pathId || pathId.length === 0) return [selectedId]

    return [...pathId, selectedId]
  }, [selectedId, data])

  const rootIds = getRootIds(data)

  return (
    <Box display="flex">
      {new Array((selectedPathId?.length || 0) + 1)
        .fill(null)
        .map((_, depth) => {
          const activedId = selectedPathId?.[depth]

          const parent = data.find(
            (node) => node.id === selectedPathId?.[depth - 1],
          )

          const ids: EasyId[] = depth === 0 ? rootIds : parent?.childrenId || []

          const columnNodes = data.filter((node) => ids.includes(node.id))

          const variant = currentColumnAutoFocusItem(
            activedId,
            autoFocusItem,
            data,
          )

          return (
            <Paper key={depth}>
              <MenuList
                autoFocusItem={autoFocusItem}
                variant={variant}
              >
                {columnNodes.map((node) => {
                  const nodeSelected = activedId === node.id
                  return (
                    <MenuItem
                      key={node.id}
                      selected={nodeSelected}
                      onClick={() => {
                        onSelect?.(node)
                      }}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        flexGrow: 1,
                      }}
                    >
                      {startAdornment?.(node, depth)}
                      <ListItemText>{getNodeLabel(node)}</ListItemText>
                      {endAdornment?.(node, depth)}
                      {node.childrenId && node.childrenId.length !== 0 && (
                        <KeyboardArrowRight
                          color={nodeSelected ? 'primary' : 'disabled'}
                        />
                      )}
                    </MenuItem>
                  )
                })}
              </MenuList>
            </Paper>
          )
        })}
    </Box>
  )
}

function currentColumnAutoFocusItem(
  selectedId: EasyId | undefined | null,
  autoFocusItem: boolean | undefined,
  data: EasyNode[],
): MenuListOwnProps['variant'] {
  if (!autoFocusItem) return 'selectedMenu'

  const selectedNode = data.find((node) => node.id === selectedId)
  if (!selectedNode) return 'menu'

  const isLeaf = isLeafNode(selectedNode)
  return isLeaf ? 'selectedMenu' : 'menu'
}
