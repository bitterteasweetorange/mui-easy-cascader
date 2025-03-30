import { Box, MenuItem, MenuList, Paper, Typography } from '@mui/material'
import { Fragment, useMemo } from 'react'
import type {
  EasyCascaderBaseNode,
  EasyCascaderDuplicatedProps,
  EasyId,
} from '../utils/types'
import { EasyHighlight } from './EasyHighlight'

export type EasyFlatListProps<T extends EasyCascaderBaseNode> = {
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
  onSelect?: (id: EasyId | null) => void
} & EasyCascaderDuplicatedProps<T>

export function EasyFlatList<T extends EasyCascaderBaseNode>(
  props: EasyFlatListProps<T>,
) {
  const {
    data,
    endAdornment,
    startAdornment,
    search,
    getNodeLabel,
    selectedId,
    onSelect,
  } = props

  const displayNodes = useMemo(() => {
    const leafNodes = data.filter((node) => isLeafNode(node))
    if (search === null || search === undefined || search === '')
      return leafNodes
    return filterKeywordLeafNodes(data, getNodeLabel, search)
  }, [data, getNodeLabel, search])

  return (
    <Paper>
      <MenuList>
        {displayNodes.map((leafNode) => (
          <MenuItem
            selected={leafNode.id === selectedId}
            key={leafNode.id}
            onClick={() => {
              onSelect?.(leafNode.id)
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                '& div': {
                  fontWeight: selectedId === leafNode.id ? 'bold' : 'normal',
                },
              }}
            >
              {[...(leafNode.pathId || []), leafNode.id]?.map((id, depth) => {
                const currentNode = data.find((x) => x.id === id)
                const isLeaf = depth === (leafNode.pathId?.length || 0)
                if (!currentNode) return null
                const text = getNodeLabel(currentNode)
                return (
                  <Fragment key={id}>
                    {startAdornment?.(currentNode, depth, isLeaf)}
                    <EasyHighlight
                      text={text}
                      search={search}
                    ></EasyHighlight>
                    {endAdornment?.(currentNode, depth, isLeaf)}
                    {!isLeaf && (
                      <Typography
                        component="div"
                        color="text.disabled"
                      >
                        {'/'}
                      </Typography>
                    )}
                  </Fragment>
                )
              })}
            </Box>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  )
}

function filterKeywordLeafNodes<T extends EasyCascaderBaseNode>(
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
        console.log(leafNodeIds, allChildrenNodeIds)

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

export function isLeafNode<T extends EasyCascaderBaseNode>(
  node: T,
): node is T & { childrenId: undefined } {
  return !node.childrenId || node.childrenId.length === 0
}

export function findLeafNodesFromRoot<T extends EasyCascaderBaseNode>(
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
