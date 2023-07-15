import { KeyboardArrowRight } from '@mui/icons-material'
import { Box, ListItemText, MenuItem, MenuList, Paper } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { Highlight } from 'src/Highlight'
import { CascaderNode, CascaderProps } from '../types'

type X<T> = T & { pathLabel: string[] }
function flatChildren<T extends { children?: T[]; label: string }>(
  nodes: T[],
  pathLabel: string[],
): X<T>[] {
  return nodes.reduce((acc, node) => {
    const nextPathLabel = [...pathLabel, node.label]
    if (node.children) {
      return [
        ...acc,
        { ...node, pathLabel: nextPathLabel },
        ...flatChildren(node.children, nextPathLabel),
      ]
    }
    return [...acc, { ...node, pathLabel: nextPathLabel }]
  }, [] as X<T>[])
}

export function Cascader<T>({
  onChange,
  isEqual,
  nodes,
  value,
  render,
  search,
}: CascaderProps<T>) {
  const path = useMemo(() => {
    return getPath({ nodes, value: value, isEqual })
  }, [nodes, value, isEqual])

  const [searchText, setSearchText] = useState(search)

  useEffect(() => {
    setSearchText(search)
  }, [search])

  if (searchText) {
    const flattenNodes = flatChildren<CascaderNode<T>>(nodes, [])

    return (
      <MenuList>
        {flattenNodes
          .filter(
            (node) =>
              !!node.pathLabel.find((label) => label.includes(searchText)),
          )
          .map((node) => (
            <MenuItem
              key={node.key}
              onClick={() => {
                onChange(node.value, !node.children)
                setSearchText('')
              }}
            >
              <Highlight search={search}>
                {node.pathLabel.join(' / ')}
              </Highlight>
            </MenuItem>
          ))}
      </MenuList>
    )
  }
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
          onChange={onChange}
          render={render}
        />
      ))}
    </Box>
  )
}

function Column<T>({
  currentDepthNodes,
  depth,
  path,
  onChange: onChange,
  render,
}: {
  currentDepthNodes: CascaderNode<T>[]
  depth: number
  path: CascaderNode<T>[]
} & Pick<CascaderProps<T>, 'render' | 'onChange'>) {
  return (
    <Paper>
      {currentDepthNodes.map((node) => {
        const selected = path[depth] === node
        return (
          <MenuList key={node.key}>
            <MenuItem
              selected={selected}
              onClick={() => {
                onChange(node.value, !node.children)
              }}
            >
              {render ? (
                render?.(node.label, {
                  depth,
                  children: node.children,
                  value: node.value,
                })
              ) : (
                <ListItemText>{node.label}</ListItemText>
              )}
              {node.children && (
                <KeyboardArrowRight color={selected ? 'primary' : 'disabled'} />
              )}
            </MenuItem>
          </MenuList>
        )
      })}
    </Paper>
  )
}

function getPath<T>({
  nodes,
  value: select,
  isEqual,
}: Pick<CascaderProps<T>, 'nodes' | 'value' | 'isEqual'>): CascaderNode<T>[] {
  if (select === null) return []
  const res: CascaderNode<T>[] = []
  nodes.forEach((node) => {
    if (isEqual ? isEqual(node.value, select) : node.value === select) {
      res.push(node)
    } else if (node.children) {
      const childPath = getPath({
        nodes: node.children,
        value: select,
        isEqual,
      })
      if (childPath.length > 0) {
        res.push(node, ...childPath)
      }
    }
  })
  return res
}
