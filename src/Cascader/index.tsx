import { Box, MenuItem, MenuList, Paper } from '@mui/material'
import { Dispatch, useState } from 'react'
import { CascaderNode, CascaderProps } from '../types'

export function Cascader<T>({ nodes }: CascaderProps<T>) {
  const [path, setPath] = useState<CascaderNode<T>[]>([])
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
            {node.label}
          </MenuItem>
        </MenuList>
      ))}
    </Paper>
  )
}
