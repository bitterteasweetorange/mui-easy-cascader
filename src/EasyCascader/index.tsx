import { Box } from '@mui/material'
import { useMemo } from 'react'
import { EasyCascaderColumn } from 'src/EasyCascaderColumn'
import { EasyCascaderBaseNode, EasyCascaderProps, EasyId } from '../types'

export function EasyCascader<T extends EasyCascaderBaseNode>({
  selectedId,
  data,
  endAdornment,
  setSelectedId,
  startAdornment,
  getNodeLabel,
}: EasyCascaderProps<T>) {
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

  return (
    <Box display="flex">
      {new Array((selectedPathId?.length || 0) + 1)
        .fill(null)
        .map((_, depth) => {
          const activedId = selectedPathId?.[depth]

          const parent = data.find(
            (node) => node.id === selectedPathId?.[depth - 1],
          )

          const ids: EasyId[] = depth === 0 ? rootId : parent?.childrenId || []

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
