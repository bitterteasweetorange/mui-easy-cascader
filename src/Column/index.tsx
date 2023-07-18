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
  renderNode,
  getNodeLabel,
  isEqual,
  multiple,
  onNodeClick,
  checked,
  indeterminate,
}: {
  currentDepthNodes: CascaderNode<T>[]
  depth: number
  multiple?: boolean
  onNodeClick: (node: CascaderNode<T>, nextChecked: boolean) => void
  checked: T[]
  indeterminate?: T[]
} & Pick<CascaderProps<T>, 'isEqual' | 'renderNode' | 'getNodeLabel'>) {
  return (
    <Paper>
      <MenuList>
        {currentDepthNodes.map((node, index) => {
          const isSelected = !!checked.find(
            (checkedItem) =>
              isEqual?.(checkedItem, node?.value) ||
              checkedItem === node?.value,
          )
          const indeterminateItem = !!indeterminate?.find(
            (checkedItem) =>
              isEqual?.(checkedItem, node?.value) ||
              checkedItem === node?.value,
          )
          return (
            <MenuItem
              key={index}
              selected={isSelected}
              onClick={() => {
                onNodeClick(node, !isSelected)
              }}
            >
              {multiple && (
                <Checkbox
                  size="small"
                  indeterminate={indeterminateItem}
                  checked={isSelected}
                />
              )}
              {renderNode ? (
                renderNode?.(getLabel(node.value, getNodeLabel), {
                  depth,
                  children: node.children,
                  value: node.value,
                })
              ) : (
                <ListItemText
                  sx={{
                    '& span': {
                      fontWeight: isSelected ? 'bold' : 'normal',
                    },
                  }}
                >
                  {getLabel(node.value, getNodeLabel)}
                </ListItemText>
              )}
              {node.children && (
                <KeyboardArrowRight
                  color={isSelected ? 'primary' : 'disabled'}
                />
              )}
            </MenuItem>
          )
        })}
      </MenuList>
    </Paper>
  )
}
