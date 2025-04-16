import ClearIcon from '@mui/icons-material/Clear'
import { IconButton, Paper, TextField, useFormControl } from '@mui/material'
import { useMemo, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { EasyFlatList } from '../component/EasyFlatList'
import { EasyPopper } from '../component/EasyPopper'
import type { EasyCascaderInputProps } from '../EasyCascader'
import { isLeafNode } from '../utils/isLeafNode'
import type { EasyId, EasyNode } from '../utils/types'
import { EasyTree } from './EasyTree'

export type EasyTreeInputProps<T extends EasyNode> = EasyCascaderInputProps<T>

export function EasyTreeInput<T extends EasyNode>(
  props: EasyTreeInputProps<T>,
) {
  const [inputValue, setInputValue] = useState<string>('')

  const [debouncedSearch] = useDebounce(inputValue, 500)

  const {
    value,
    onChange,
    // for input
    label,
    error,
    disabled,
    required,
    helperText,
    autoFocus,
    sx,
    // common
    ...commonProps
  } = props

  const { getNodeLabel, data } = commonProps

  const [selectedId, setSelectedId] = useState<EasyId | null>(value?.id ?? null)

  const onSelect = (node: T | null) => {
    if (!node) return

    setSelectedId(node.id)

    const isLeaf = isLeafNode(node)
    if (isLeaf) {
      onChange(node)
      handleClose(true)
    }
    setInputValue('')
  }

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  const displayValue = useMemo(() => {
    if (open) return inputValue
    if (value === null) return ''

    const text = [...(value.pathId || []), value.id]
      ?.map((id) => {
        const node = data.find((node) => node.id === id)
        return node ? getNodeLabel(node) : ''
      })
      .join(' / ')
    return text
  }, [data, getNodeLabel, value, open, inputValue])

  const displayPlaceholder = useMemo(() => {
    if (value === null) return ''

    const text = [...(value.pathId || []), value.id]
      ?.map((id) => {
        const node = data.find((node) => node.id === id)
        return node ? getNodeLabel(node) : ''
      })
      .join(' / ')
    return text
  }, [data, value, getNodeLabel])

  const handleClose = (closeOnSuccess: boolean) => {
    setAnchorEl(null)
    setInputValue('')
    if (!closeOnSuccess) {
      // reset selectedId to the original value if the user didn't select a node
      setSelectedId(value?.id ?? null)
    }
  }

  const { focused } = useFormControl() || {}
  const [expandedId, setExpandedId] = useState<EasyId[]>([0])

  return (
    <>
      <TextField
        variant="standard"
        autoComplete="off"
        label={label}
        error={error}
        disabled={disabled}
        required={required}
        helperText={helperText}
        focused={open}
        placeholder={displayPlaceholder}
        value={displayValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        autoFocus={autoFocus}
        sx={{
          ...sx,
          ':hover .MuiButtonBase-root': {
            visibility: value && !disabled ? 'visible' : 'hidden',
          },
        }}
        slotProps={{
          input: {
            onClick: (e) => {
              if (disabled) return
              setAnchorEl(e.currentTarget)
            },
            endAdornment: (
              <IconButton
                size="small"
                sx={{
                  // visible when Input focused or hovered
                  visibility: focused && value ? 'visible' : 'hidden',
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  onChange(null)
                  setSelectedId(null)
                  setAnchorEl(null)
                }}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            ),
          },
        }}
      />
      <EasyPopper
        anchorEl={anchorEl}
        onClose={() => {
          handleClose(false)
        }}
      >
        <Paper>
          {debouncedSearch ? (
            <EasyFlatList
              {...commonProps}
              selectedId={selectedId}
              onSelect={onSelect}
              search={debouncedSearch}
              autoFocusItem
            />
          ) : (
            <EasyTree<T>
              {...commonProps}
              selectedId={selectedId}
              onSelect={onSelect}
              expandedId={expandedId}
              setExpandedId={setExpandedId}
              selectMode="leafOnly"
            />
          )}
        </Paper>
      </EasyPopper>
    </>
  )
}
