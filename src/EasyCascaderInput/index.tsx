import { Box, TextField } from '@mui/material'
import { RefObject, useRef, useState } from 'react'
import { EasyCascader } from 'src/EasyCascader'
import { EasyPopper } from 'src/EasyPopper'
import { useDebounce } from 'use-debounce'
import { CascaderInputProps, EasyCascaderBaseNode, EasyId } from '../types'

export function EasyCascaderInput<T extends EasyCascaderBaseNode>(
  props: CascaderInputProps<T>,
) {
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const [debouncedSearch] = useDebounce(search, 500)
  const [focused, setFocused] = useState<boolean>(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const {
    value,
    onChange,
    getNodeLabel,
    data,
    endAdornment,
    startAdornment,
    label,
    error,
    disabled,
    required,
    helperText,
  } = props

  const [selectedId, onSelectedId] = useState<EasyId | null>(value?.id ?? null)

  return (
    <>
      <TextField
        focused={focused}
        autoComplete="off"
        label={label}
        error={error}
        disabled={disabled}
        required={required}
        helperText={helperText}
        onFocus={() => {
          setFocused(true)
          setIsSearch(true)
          onSelectedId(value?.id ?? null)
        }}
        ref={anchorRef}
        placeholder={isSearch && value ? getNodeLabel(value) : ''}
        value={isSearch ? search : value === null ? '' : getNodeLabel(value)}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <EasyPopper
        anchorRef={anchorRef as unknown as RefObject<HTMLButtonElement>}
        open={focused}
        onClose={() => {
          setFocused(false)
          setIsSearch(false)
          setSearch('')
        }}
      >
        <Box>
          <EasyCascader<T>
            getNodeLabel={getNodeLabel}
            startAdornment={startAdornment}
            endAdornment={endAdornment}
            selectedId={selectedId}
            data={data}
            setSelectedId={(id) => {
              const node = data.find((node) => node.id === id)
              if (!node) return
              const isLeaf = node?.childrenId?.length === 0 || !node?.childrenId
              onSelectedId(id)
              if (isLeaf) {
                setFocused(false)
                onChange(node)
                setIsSearch(false)
                setSearch('')
              } else {
                onSelectedId(id)
              }
            }}
            search={debouncedSearch}
          />
        </Box>
      </EasyPopper>
    </>
  )
}
