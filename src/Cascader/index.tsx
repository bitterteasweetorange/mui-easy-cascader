import { KeyboardArrowRight } from '@mui/icons-material'
import { Box, ListItemText, MenuItem, MenuList, Paper } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { Highlight } from 'src/Highlight'
import { CascaderNode, CascaderProps } from '../types'

type X<T> = T & { pathLabel: string[] }
function flatNodes<T extends { children?: T[]; label: string }>(
  nodes: T[],
  pathLabel: string[],
): X<T>[] {
  return nodes.reduce((acc, node) => {
    const nextPathLabel = [...pathLabel, node.label]
    if (node.children) {
      return [
        ...acc,
        { ...node, pathLabel: nextPathLabel },
        ...flatNodes(node.children, nextPathLabel),
      ]
    }
    return [...acc, { ...node, pathLabel: nextPathLabel }]
  }, [] as X<T>[])
}

export function Cascader<T>({
  onSelect: onChange,
  isEqual,
  nodes,
  selected: value,
  render,
  search,
}: CascaderProps<T>) {
  const path = useMemo(() => {
    return getPath({ nodes, selected: value, isEqual })
  }, [nodes, value, isEqual])

  const [searchText, setSearchText] = useState(search)

  useEffect(() => {
    setSearchText(search)
  }, [search])

  if (searchText) {
    const flattenNodes = flatNodes<CascaderNode<T>>(nodes, [])

    return (
      <Paper>
        <MenuList>
          {flattenNodes
            // filter leaf node
            .filter((node) => !node.children)
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
      </Paper>
    )
  }
  return (
    <Box display="flex">
      {new Array(path.length + 1).fill(null).map((_, depth) => (
        <Column<T>
          key={depth}
          depth={depth}
          currentDepthNodes={
            depth === 0 ? nodes : path[depth - 1].children || []
          }
          path={path}
          onSelect={onChange}
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
  onSelect: onChange,
  render,
}: {
  currentDepthNodes: CascaderNode<T>[]
  depth: number
  path: CascaderNode<T>[]
} & Pick<CascaderProps<T>, 'render' | 'onSelect'>) {
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
  selected,
  isEqual,
}: Pick<
  CascaderProps<T>,
  'nodes' | 'selected' | 'isEqual'
>): CascaderNode<T>[] {
  if (selected === null) return []
  const res: CascaderNode<T>[] = []
  nodes.forEach((node) => {
    if (isEqual ? isEqual(node.value, selected) : node.value === selected) {
      res.push(node)
    } else if (node.children) {
      const childPath = getPath({
        nodes: node.children,
        selected: selected,
        isEqual,
      })
      if (childPath.length > 0) {
        res.push(node, ...childPath)
      }
    }
  })
  return res
}
