import { KeyboardArrowRight } from '@mui/icons-material'
import { Box, ListItemText, MenuItem, MenuList, Paper } from '@mui/material'
import { useMemo } from 'react'
import { CascaderNode, CascaderProps } from '../types'

export function Cascader<T>({
  onSelect,
  isEqual,
  nodes,
  select,
}: CascaderProps<T>) {
  const path = useMemo(() => {
    return getPath({ nodes, select, isEqual })
  }, [nodes, select, isEqual])
  return (
    <Box display="flex">
      {new Array(path.length + 1).fill(null).map((_, depth) => (
        <Column
          key={depth}
          depth={depth}
          currentDepthNodes={
            depth === 0 ? nodes : path[depth - 1].children || []
          }
          path={path}
          onSelect={onSelect}
        />
      ))}
    </Box>
  )
}

function Column<T>({
  currentDepthNodes,
  depth,
  path,
  onSelect,
}: {
  currentDepthNodes: CascaderNode<T>[]
  depth: number
  path: CascaderNode<T>[]
  onSelect: (value: T | null) => void
}) {
  return (
    <Paper>
      {currentDepthNodes.map((node) => (
        <MenuList key={node.key}>
          <MenuItem
            selected={path[depth] === node}
            onClick={() => {
              onSelect(node.value)
            }}
          >
            <ListItemText>{node.label}</ListItemText>
            {node.children && (
              <KeyboardArrowRight
                color={path[depth] === node ? 'primary' : 'disabled'}
              />
            )}
          </MenuItem>
        </MenuList>
      ))}
    </Paper>
  )
}

function getPath<T>({
  nodes,
  select,
  isEqual,
}: Pick<CascaderProps<T>, 'nodes' | 'select' | 'isEqual'>): CascaderNode<T>[] {
  if (select === null) return []
  const res: CascaderNode<T>[] = []
  nodes.forEach((node) => {
    if (isEqual ? isEqual(node.value, select) : node.value === select) {
      res.push(node)
    } else if (node.children) {
      const childPath = getPath({ nodes: node.children, select, isEqual })
      if (childPath.length > 0) {
        res.push(node, ...childPath)
      }
    }
  })
  return res
}
