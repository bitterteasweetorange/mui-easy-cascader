import {
  Box,
  MenuItem,
  MenuList,
  Paper,
  Typography,
  useTheme,
} from '@mui/material'
import {
  ForwardedRef,
  Fragment,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from 'react'
import { EasyHighlight } from 'src/EasyHighlight'
import {
  EasyCascaderBaseNode,
  EasyCascaderDuplicatedProps,
  EasyId,
} from 'src/types'

export type EasyListProps<T extends EasyCascaderBaseNode> = {
  search: string
  selectedId: EasyId | null
  onSelect: (id: EasyId | null) => void
  hoverId?: EasyId | null
} & EasyCascaderDuplicatedProps<T>

export type EasyKeyboardRefObject<T> = { filterData: T[] }

export const EasyList = forwardRef(EasyListRaw) as <
  T extends EasyCascaderBaseNode,
>(
  props: EasyListProps<T> & { ref?: ForwardedRef<EasyKeyboardRefObject<T>> },
) => JSX.Element

function EasyListRaw<T extends EasyCascaderBaseNode>(
  props: EasyListProps<T>,
  ref: ForwardedRef<EasyKeyboardRefObject<T>>,
) {
  const {
    data,
    endAdornment,
    startAdornment,
    search,
    getNodeLabel,
    selectedId,
    onSelect,
    hoverId,
  } = props

  const { palette } = useTheme()
  const filterData = useMemo(
    () => filterKeywordLastNodes(data, getNodeLabel, search),
    [data, getNodeLabel, search],
  )
  useImperativeHandle(
    ref,
    () => {
      return {
        filterData,
      }
    },
    [filterData],
  )

  return (
    <Paper>
      <MenuList>
        {filterData.map((node) => (
          <MenuItem
            selected={node.id === selectedId}
            key={node.id}
            onClick={() => {
              onSelect(node.id)
            }}
            sx={{
              background:
                hoverId === node.id ? palette.action.hover : undefined,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 1,
              }}
            >
              {[...(node.pathId || []), node.id]?.map((id, index) => {
                const pathNode = data.find((x) => x.id === id)
                const text = pathNode ? getNodeLabel(pathNode) : ''
                return (
                  <Fragment key={id}>
                    {startAdornment?.(node)}
                    <EasyHighlight
                      text={text}
                      search={search}
                    ></EasyHighlight>
                    {endAdornment?.(node)}
                    {index !== (node.pathId?.length || 0) && (
                      <Typography
                        component="div"
                        color="text.disabled"
                      >
                        {'/'}
                      </Typography>
                    )}
                  </Fragment>
                )
              })}
            </Box>
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  )
}

function filterKeywordLastNodes<T extends EasyCascaderBaseNode>(
  fullData: T[],
  getNodeLabel: (node: T) => string,
  debouncedSearch: string,
): T[] {
  const res: T[] = []
  fullData.forEach((node) => {
    const label = getNodeLabel(node)
    const exist = label.includes(debouncedSearch)
    if (exist) {
      res.push(node)

      node.pathId?.forEach((parentId) => {
        const index = res.findIndex((x) => x.id === parentId)
        if (index > -1) {
          res.splice(index, 1)
        }
      })
    }
  })

  return res
}
