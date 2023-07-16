import { Box, MenuItem, MenuList, Paper, Typography } from '@mui/material'
import { Fragment, useEffect, useMemo, useState } from 'react'
import { Column } from 'src/Column'
import { Highlight } from 'src/Highlight'
import { flatNodes } from 'src/utils/flatNodes'
import { CascaderNode, CascaderProps } from '../types'

export function Cascader<T>({
  onSelect,
  isEqual,
  nodes,
  selected,
  renderNode,
  search,
  getNodeLabel,
}: CascaderProps<T>) {
  const selectedPath = useMemo(() => {
    return getSelectedPath({ nodes, selected, isEqual })
  }, [nodes, selected, isEqual])

  const [searchText, setSearchText] = useState(search)

  useEffect(() => {
    setSearchText(search)
  }, [search])

  if (searchText) {
    const listData = flatNodes<T>(nodes, [], getNodeLabel)

    return (
      <Paper>
        <MenuList>
          {listData
            .filter((item) => item.isLeaf)
            .filter(
              (item) =>
                !!item.pathLabel.find((label) => label.includes(searchText)),
            )
            .map((item, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  onSelect(item.value, item.isLeaf)
                  setSearchText('')
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                  }}
                >
                  {item.pathLabel.map((label, index) => (
                    <Fragment key={index}>
                      <Highlight search={search}>{label}</Highlight>
                      {index !== item.pathLabel.length - 1 && (
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
      {new Array(selectedPath.length + 1).fill(null).map((_, depth) => (
        <Column<T>
          isEqual={isEqual}
          key={depth}
          depth={depth}
          currentDepthNodes={
            depth === 0 ? nodes : selectedPath[depth - 1].children || []
          }
          path={selectedPath}
          onSelect={onSelect}
          renderNode={renderNode}
          getNodeLabel={getNodeLabel}
        />
      ))}
    </Box>
  )
}

export function getSelectedPath<T>({
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
      const childPath = getSelectedPath({
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
