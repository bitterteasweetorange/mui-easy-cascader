import { KeyboardArrowRight } from '@mui/icons-material'
import {
  Box,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from '@mui/material'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { Highlight } from 'src/Highlight'
import { flatNodes } from 'src/utils/flatNodes'
import { CascaderNode, CascaderProps } from '../types'

export function Cascader<T>({
  onSelect: onChange,
  isEqual,
  nodes,
  selected: value,
  renderNode: render,
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
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                  }}
                >
                  {node.pathLabel.map((label, index) => (
                    <Fragment key={index}>
                      <Highlight search={search}>{label}</Highlight>
                      {index !== node.pathLabel.length - 1 && (
                        <Typography
                          component="div"
                          color="text.disabled"
                        >
                          {'/'}
                        </Typography>
                      )}
                    </Fragment>
                  ))}
                </Box>
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
          renderNode={render}
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
  renderNode: render,
}: {
  currentDepthNodes: CascaderNode<T>[]
  depth: number
  path: CascaderNode<T>[]
} & Pick<CascaderProps<T>, 'renderNode' | 'onSelect'>) {
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
