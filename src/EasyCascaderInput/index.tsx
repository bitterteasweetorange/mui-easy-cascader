import { TextField } from '@mui/material'
import { RefObject, useRef, useState } from 'react'
import { EasyCascader } from 'src/EasyCascader'
import { EasyList } from 'src/EasyList'
import { EasyPopper } from 'src/EasyPopper'
import { useDebounce } from 'use-debounce'
import { EasyCascaderInputProps, EasyCascaderBaseNode, EasyId } from '../types'

export function EasyCascaderInput<T extends EasyCascaderBaseNode>(
  props: EasyCascaderInputProps<T>,
) {
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const [debouncedSearch] = useDebounce(search, 500)
  const [focused, setFocused] = useState<boolean>(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const {
    value,
    onChange,
    label,
    error,
    disabled,
    required,
    helperText,
    ...duplication
  } = props

  const { getNodeLabel, data } = duplication

  const [selectedId, onSelectedId] = useState<EasyId | null>(value?.id ?? null)

  const setSelectedId = (id: EasyId | null) => {
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
  }

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
        {debouncedSearch ? (
          <EasyList
            {...duplication}
            search={debouncedSearch}
            setSearch={setSearch}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        ) : (
          <EasyCascader<T>
            {...duplication}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        )}
      </EasyPopper>
    </>
  )
}
