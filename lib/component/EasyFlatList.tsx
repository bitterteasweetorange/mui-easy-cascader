import { Box, MenuItem, MenuList, Paper, Typography } from '@mui/material'
import { useMemo } from 'react'
import { isLeafNode } from '../utils/isLeafNode'
import type { EasyCommonProps, EasyId, EasyNode } from '../utils/types'
import { EasyHighlight } from './EasyHighlight'

export type EasyFlatListProps<T extends EasyNode> = {
  /**
   * filter data and highlight the keyword
   */
  search?: string | null
  /**
   * leaf node only
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
} & EasyCommonProps<T>

export function EasyFlatList<T extends EasyNode>(props: EasyFlatListProps<T>) {
  const {
    // common props
    data,
    getNodeLabel,
    startAdornment,
    endAdornment,
    // other
    selectedId,
    onSelect,
    search,
    autoFocusItem,
  } = props

  const lineNodes = useMemo(() => {
    const leafNodes = data.filter((node) => isLeafNode(node))
    if (search === null || search === undefined || search === '')
      return leafNodes
    return filterKeywordLeafNodes(data, getNodeLabel, search)
  }, [data, getNodeLabel, search])

  return (
    <Paper>
      <MenuList autoFocusItem={autoFocusItem}>
        {lineNodes.map((leafNode) => (
          <MenuItem
            selected={leafNode.id === selectedId}
            key={leafNode.id}
            onClick={() => {
              onSelect?.(leafNode)
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
              }}
            >
              {[...(leafNode.pathId || []), leafNode.id]?.map((id, depth) => {
                const currentNode = data.find((x) => x.id === id)
                const isLeaf = depth === (leafNode.pathId?.length || 0)
                if (!currentNode) return null
                const text = getNodeLabel(currentNode)
                return (
                  <Box
                    key={id}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      flexGrow: 1,
                    }}
                  >
                    {startAdornment?.(currentNode, depth)}
                    <EasyHighlight
                      text={text}
                      search={search}
                      focused={leafNode.id === selectedId}
                    ></EasyHighlight>
                    {endAdornment?.(currentNode, depth)}
                    {!isLeaf && (
                      <Typography
                        component="div"
                        color="text.disabled"
                      >
                        {'/'}
                      </Typography>
                    )}
                  </Box>
                )
              })}
            </Box>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  )
}

function filterKeywordLeafNodes<T extends EasyNode>(
  nodes: T[],
  getNodeLabel: (node: T) => string,
  search: string,
): T[] {
  let resIds: EasyId[] = []
  let verifiedIds: EasyId[] = []

  nodes.forEach((node) => {
    const label = getNodeLabel(node)
    const includeKeyword = label.includes(search)
    const verified = verifiedIds.includes(node.id)

    if (includeKeyword && !verified) {
      const isLeaf = isLeafNode(node)

      if (isLeaf) {
        resIds.push(node.id)
      } else {
        const { leafNodeIds, allChildrenNodeIds } = findLeafNodesFromRoot(
          nodes,
          node.id,
        )

        resIds = resIds.concat([...leafNodeIds])
        verifiedIds = verifiedIds.concat([...allChildrenNodeIds])
      }
    }
  })

  const res = [...new Set(resIds)].map((id) => {
    const node = nodes.find((x) => x.id === id)!
    return node
  })

  return res
}

export function findLeafNodesFromRoot<T extends EasyNode>(
  nodes: T[],
  rootId: EasyId,
): {
  leafNodeIds: EasyId[]
  allChildrenNodeIds: EasyId[]
} {
  const leafNodeIds: EasyId[] = []
  const allChildrenNodeIds: EasyId[] = []

  function findChildren(nodeId: EasyId) {
    const node = nodes.find((x) => x.id === nodeId)
    if (!node) return
    allChildrenNodeIds.push(node.id)

    if (isLeafNode(node)) {
      leafNodeIds.push(node.id)
      return
    }

    node.childrenId?.forEach((childId) => {
      findChildren(childId)
    })
  }

  findChildren(rootId)

  return { leafNodeIds, allChildrenNodeIds }
}
