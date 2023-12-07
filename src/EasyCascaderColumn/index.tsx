import { KeyboardArrowRight } from '@mui/icons-material'
import {
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  useTheme,
} from '@mui/material'
import { EasyCascaderBaseNode, EasyCascaderProps, EasyId } from 'src/types'

export function EasyCascaderColumn<T extends EasyCascaderBaseNode>({
  ids,
  data,
  onNodeClick,
  activedId,
  endAdornment,
  startAdornment,
  getNodeLabel,
  hoverId,
}: {
  ids: EasyId[]
  activedId?: EasyId | null
  onNodeClick: (node: T, selected: boolean) => void
  hoverId?: EasyId | null
} & Pick<
  EasyCascaderProps<T>,
  'getNodeLabel' | 'startAdornment' | 'endAdornment' | 'data'
>) {
  const currentNodes = data.filter((node) => ids.includes(node.id))

  const { palette } = useTheme()
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
              sx={{
                background:
                  hoverId === node.id && !selected
                    ? palette.action.hover
                    : undefined,
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
              {node.childrenId && node.childrenId.length !== 0 && (
                <KeyboardArrowRight color={selected ? 'primary' : 'disabled'} />
              )}
            </MenuItem>
          )
        })}
      </MenuList>
    </Paper>
  )
}
