import { KeyboardArrowRight } from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
  Box,
  Collapse,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '@mui/material'
import type { EasyTreeProps } from '.'
import { EasyHighlight } from '../component/EasyHighlight'
import { isLeafNode, type EasyId, type EasyNode } from '../utils'

export type EasyTreeItemProps<T extends EasyNode> = {
  id: EasyId
  depth: number
} & EasyTreeProps<T>

export function EasyTreeItem<T extends EasyNode>({
  id,
  depth,
  ...treeProps
}: EasyTreeItemProps<T>) {
  const {
    // common props
    data,
    getNodeLabel,
    endAdornment,
    startAdornment,
    // rest
    expandedId,
    setExpandedId,
    selectMode = 'noSelect',
    selectedId,
    onSelect,
    actionButtons: actions,
    search,
  } = treeProps

  const node = data.find((item) => item.id === id)
  if (!node) return null

  const expanded = expandedId.includes(node.id)

  const selected = selectedId === node.id

  function onExpand(id: EasyId) {
    if (expandedId.includes(id)) {
      setExpandedId(expandedId.filter((x) => x !== id))
    } else {
      setExpandedId([...expandedId, id])
    }
  }
  return (
    <>
      <MenuItem
        sx={{
          paddingLeft: String(depth * 32) + 'px',
          '& button': {
            visibility: 'hidden',
          },
          ':hover': {
            '& button': {
              visibility: 'visible',
            },
          },
        }}
        selected={selected}
        onClick={() => {
          if (selected) {
            onSelect?.(null)
            return
          }
          const isLeaf = isLeafNode(node)

          switch (selectMode) {
            case 'noSelect':
              if (!isLeaf) {
                onExpand(id)
              }
              return

            case 'leafOnly':
              if (isLeaf) {
                onSelect?.(node)
              } else {
                onExpand(id)
              }
              return

            case 'all':
              onSelect?.(node)
              return

            default:
              return
          }
        }}
      >
        <ListItemIcon
          onClick={(e) => {
            e.stopPropagation()
            onExpand(id)
          }}
        >
          {isLeafNode(node) ? null : expanded ? (
            <KeyboardArrowDownIcon color="disabled" />
          ) : (
            <KeyboardArrowRight color="disabled" />
          )}
        </ListItemIcon>
        <ListItemText
          primary={
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center',
              }}
            >
              {startAdornment?.(node, depth)}
              <EasyHighlight
                focused={selected}
                text={getNodeLabel(node)}
                search={search}
              />
              {endAdornment?.(node, depth)}
            </Box>
          }
        ></ListItemText>
        {actions?.(node)}
      </MenuItem>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
      >
        {node.childrenId?.map((childId) => (
          <EasyTreeItem
            key={childId}
            id={childId}
            depth={depth + 1}
            {...treeProps}
          />
        ))}
      </Collapse>
    </>
  )
}
