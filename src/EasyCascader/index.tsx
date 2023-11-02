import { Box, MenuItem, MenuList, Paper, Typography } from '@mui/material'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { EasyCascaderColumn } from 'src/EasyCascaderColumn'
import { Highlight } from 'src/Highlight'
import { CascaderProps, EasyCascaderBaseNode, Id } from '../types'

export function EasyCascader<T extends EasyCascaderBaseNode>({
  selectedId,
  data,
  search,
  endAdornment,
  setSelectedId,
  startAdornment,
  getNodeLabel,
}: CascaderProps<T>) {
  const selectedPathId = useMemo(() => {
    if (selectedId === null || selectedId === undefined) return []
    const selected = data.find((node) => node.id === selectedId)
    if (!selected) return []
    const pathId = selected.pathId
    if (!pathId || pathId.length === 0) return [selectedId]
    return [...pathId, selectedId]
  }, [selectedId, data])

  const rootId = data
    .filter((node) => !node.pathId || node.pathId.length === 0)
    .map((node) => node.id)

  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    setSearchText(search || '')
  }, [search])

  const flattenNodes: T[] = useMemo(() => {
    if (!searchText) return []
    return filterKeywordLastNodes(data, getNodeLabel, searchText)
  }, [data, searchText])

  if (searchText) {
    return (
      <Paper>
        <MenuList>
          {flattenNodes.map((node) => (
            <MenuItem
              key={node.id}
              onClick={() => {
                setSelectedId(node.id)
                setSearchText('')
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
                      <Highlight
                        text={text}
                        search={searchText}
                      ></Highlight>
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

  return (
    <Box display="flex">
      {new Array((selectedPathId?.length || 0) + 1)
        .fill(null)
        .map((_, depth) => {
          const activedId = selectedPathId?.[depth]

          const parent = data.find(
            (node) => node.id === selectedPathId?.[depth - 1],
          )

          const ids: Id[] = depth === 0 ? rootId : parent?.childrenId || []

          return (
            <EasyCascaderColumn<T>
              key={depth}
              ids={ids}
              data={data}
              activedId={activedId}
              onNodeClick={(node, selected) => {
                if (selected) return
                setSelectedId(node.id)
              }}
              getNodeLabel={getNodeLabel}
              startAdornment={startAdornment}
              endAdornment={endAdornment}
            />
          )
        })}
    </Box>
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
