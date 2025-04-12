import ClearIcon from '@mui/icons-material/Clear'
import {
  Box,
  IconButton,
  TextField,
  useFormControl,
  type SxProps,
} from '@mui/material'
import { useMemo, useState, type ReactNode } from 'react'
import { useDebounce } from 'use-debounce'
import { EasyCascader } from '../component/EasyCascader'
import { EasyFlatList, isLeafNode } from '../component/EasyFlatList'
import { EasyPopper } from '../component/EasyPopper'
import type {
  EasyCascaderBaseNode,
  EasyCascaderCommonProps,
  EasyId,
} from '../utils/types'

export type EasyCascaderInputProps<T extends EasyCascaderBaseNode> =
  EasyCascaderCommonProps<T> & {
    /**
     * a text or an element to be used in an enclosing label element
     */
    label?: ReactNode
    /**
     * if true, the helper text will be displayed in an error state
     */
    error?: boolean
    /**
     * text or an element to be used as a helper text
     */
    helperText?: ReactNode
    /**
     * if true, the helper text should use required classes key.
     */
    required?: boolean
    /**
     * if true, the helper text should be displayed in a disabled state.
     */
    disabled?: boolean
    /**
     * If `true`, the `input` element is focused during the first mount.
     */
    autoFocus?: boolean
    /**
     * selected node, "id" is used to find the node in the data
     */
    value: T | null
    /**
     * callback fired when the value changes
     */
    onChange: (value: T | null) => void
    sx?: SxProps
  }

export function EasyCascaderInput<T extends EasyCascaderBaseNode>(
  props: EasyCascaderInputProps<T>,
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
        <Box>
          {debouncedSearch ? (
            <EasyFlatList
              {...commonProps}
              selectedId={selectedId}
              onSelect={onSelect}
              search={debouncedSearch}
              autoFocusItem
            />
          ) : (
            <EasyCascader<T>
              {...commonProps}
              selectedId={selectedId}
              onSelect={onSelect}
            />
          )}
        </Box>
      </EasyPopper>
    </>
  )
}
