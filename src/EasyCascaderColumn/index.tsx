import { KeyboardArrowRight } from '@mui/icons-material'
import { ListItemText, MenuItem, MenuList, Paper } from '@mui/material'
import { EasyCascaderProps, EasyCascaderBaseNode, EasyId } from 'src/types'

export function EasyCascaderColumn<T extends EasyCascaderBaseNode>({
  ids,
  data,
  onNodeClick,
  activedId,
  endAdornment,
  startAdornment,
  getNodeLabel,
}: {
  ids: EasyId[]
  activedId?: EasyId | null
  onNodeClick: (node: T, selected: boolean) => void
} & Pick<
  EasyCascaderProps<T>,
  'getNodeLabel' | 'startAdornment' | 'endAdornment' | 'data'
>) {
  const currentNodes = data.filter((node) => ids.includes(node.id))

  return (
    <Paper>
      <MenuList>
        {currentNodes.map((node) => {
          const selected = activedId === node.id
          return (
            <MenuItem
              key={node.id}
              selected={selected}
              onClick={() => {
                onNodeClick(node, selected)
              }}
            >
              <ListItemText
                sx={{
                  '& span': {
                    fontWeight: selected ? 'bold' : 'normal',
                  },
                }}
              >
                {startAdornment?.(node)}
                {getNodeLabel(node)}
                {endAdornment?.(node)}
              </ListItemText>
              {node.childrenId && (
                <KeyboardArrowRight color={selected ? 'primary' : 'disabled'} />
              )}
            </MenuItem>
          )
        })}
      </MenuList>
    </Paper>
  )
}
