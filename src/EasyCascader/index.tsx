import { Box } from '@mui/material'
import { ForwardedRef, forwardRef, useImperativeHandle, useMemo } from 'react'
import { EasyCascaderColumn } from 'src/EasyCascaderColumn'
import { EasyKeyboardRefObject } from '../EasyList'
import { EasyCascaderBaseNode, EasyCascaderProps, EasyId } from '../types'

export const EasyCascader = forwardRef(EasyCascaderRaw) as <
  T extends EasyCascaderBaseNode,
>(
  props: EasyCascaderProps<T> & {
    ref?: ForwardedRef<EasyKeyboardRefObject<T>>
  },
) => JSX.Element

function EasyCascaderRaw<T extends EasyCascaderBaseNode>(
  props: EasyCascaderProps<T>,
  ref?: ForwardedRef<EasyKeyboardRefObject<T>>,
) {
  const {
    selectedId,
    data,
    endAdornment,
    setSelectedId,
    startAdornment,
    getNodeLabel,
    hoverId,
  } = props
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

  const filterData = useMemo(() => {
    if (selectedId === null) {
      return data.filter((x) => rootId.includes(x.id))
    }

    const node = data.find((x) => x.id === selectedId)
    if (!node) return []
    // not leaf
    if (node?.childrenId && node.childrenId.length !== 0) {
      return data.filter((x) => node?.childrenId?.includes(x.id))
    } else {
      // leaf
      const parent = data.find((x) => x.childrenId?.includes(node?.id))
      return data.filter((x) => parent?.childrenId?.includes(x.id))
    }
  }, [data, rootId, selectedId])

  useImperativeHandle(
    ref,
    () => {
      return {
        filterData,
      }
    },
    [filterData],
  )

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
              hoverId={hoverId}
            />
          )
        })}
    </Box>
  )
}
