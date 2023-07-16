import { KeyboardArrowRight } from '@mui/icons-material'
import {
  Checkbox,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
} from '@mui/material'
import { CascaderNode, CascaderProps } from 'src/types'
import { getLabel } from 'src/utils/getNodeLabel'

export function Column<T>({
  currentDepthNodes,
  depth,
  path,
  onSelect,
  renderNode,
  getNodeLabel,
  isEqual,
  multiple,
}: {
  currentDepthNodes: CascaderNode<T>[]
  depth: number
  path: CascaderNode<T>[]
  multiple?: boolean
} & Pick<
  CascaderProps<T>,
  'isEqual' | 'renderNode' | 'onSelect' | 'getNodeLabel'
>) {
  return (
    <Paper>
      {currentDepthNodes.map((node, index) => {
        const selected =
          isEqual?.(path[depth]?.value, node?.value) ||
          path[depth]?.value === node?.value
        return (
          <MenuList key={index}>
            <MenuItem
              selected={selected}
              onClick={() => {
                onSelect(node.value, !node.children)
              }}
            >
              {multiple && <Checkbox checked={selected} />}
              {renderNode ? (
                renderNode?.(getLabel(node.value, getNodeLabel), {
                  depth,
                  children: node.children,
                  value: node.value,
                })
              ) : (
                <ListItemText>
                  {getLabel(node.value, getNodeLabel)}
                </ListItemText>
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
