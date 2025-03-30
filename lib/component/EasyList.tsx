import { Box, MenuItem, MenuList, Paper, Typography } from '@mui/material'
import { Fragment, useMemo } from 'react'
import type {
  EasyCascaderBaseNode,
  EasyCascaderDuplicatedProps,
  EasyId,
} from '../utils/types'
import { EasyHighlight } from './EasyHighlight'

export type EasyListProps<T extends EasyCascaderBaseNode> = {
  /**
   * filter data and highlight the keyword
   */
  search?: string | null
  /**
   * selected node id
   */
  selectedId?: EasyId | null
  /**
   * callback when select a node
   */
  onSelect?: (id: EasyId | null) => void
} & EasyCascaderDuplicatedProps<T>

export function EasyList<T extends EasyCascaderBaseNode>(
  props: EasyListProps<T>,
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

  const filterData = useMemo(
    () => filterKeywordLastNodes(data, getNodeLabel, search || ''),
    [data, getNodeLabel, search],
  )

  return (
    <Paper>
      <MenuList>
        {filterData.map((node) => (
          <MenuItem
            selected={node.id === selectedId}
            key={node.id}
            onClick={() => {
              onSelect?.(node.id)
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
              }}
            >
              {[...(node.pathId || []), node.id]?.map((id, index) => {
                const pathNode = data.find((x) => x.id === id)
                const text = pathNode ? getNodeLabel(pathNode) : ''
                return (
                  <Fragment key={id}>
                    {startAdornment?.(node)}
                    <EasyHighlight
                      text={text}
                      search={search}
                    ></EasyHighlight>
                    {endAdornment?.(node)}
                    {index !== (node.pathId?.length || 0) && (
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

function filterKeywordLastNodes<T extends EasyCascaderBaseNode>(
  fullData: T[],
  getNodeLabel: (node: T) => string,
  debouncedSearch: string,
): T[] {
  const res: T[] = []
  fullData.forEach((node) => {
    const label = getNodeLabel(node)
    const exist = label.includes(debouncedSearch)
    if (exist) {
      res.push(node)

      node.pathId?.forEach((parentId) => {
        const index = res.findIndex((x) => x.id === parentId)
        if (index > -1) {
          res.splice(index, 1)
        }
      })
    }
  })

  return res
}
