import { Box, ListItemText, MenuItem, MenuList, Paper } from '@mui/material'
import { Dispatch, useState } from 'react'
import { CascaderNode, CascaderProps } from '../types'

function initPath<T>({
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
      const childPath = initPath({ nodes: node.children, select, isEqual })
      if (childPath.length > 0) {
        res.push(node, ...childPath)
      }
    }
  })
  return res
}

export function Cascader<T>({ isEqual, nodes, select }: CascaderProps<T>) {
  const [path, setPath] = useState<CascaderNode<T>[]>(
    initPath({ nodes, select, isEqual }),
  )
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
          setPath={setPath}
        />
      ))}
    </Box>
  )
}

function Column<T>({
  currentDepthNodes,
  depth,
  path,
  setPath,
}: {
  currentDepthNodes: CascaderNode<T>[]
  depth: number
  path: CascaderNode<T>[]
  setPath: Dispatch<React.SetStateAction<CascaderNode<T>[]>>
}) {
  return (
    <Paper>
      {currentDepthNodes.map((node) => (
        <MenuList key={node.key}>
          <MenuItem
            selected={path[depth] === node}
            onClick={() => {
              const pre = path.slice(0, depth)
              setPath([...pre, node])
            }}
          >
            <ListItemText>{node.label}</ListItemText>
          </MenuItem>
        </MenuList>
      ))}
    </Paper>
  )
}
