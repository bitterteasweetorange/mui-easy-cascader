import { Box, TextField } from '@mui/material'
import { RefObject, useRef, useState } from 'react'
import { Cascader } from 'src/Cascader'
import { EasyPopper } from 'src/EasyPopper'
import { getLabel } from 'src/utils/getNodeLabel'
import { CascaderInputProps } from '../types'

export function CascaderInput<T>(props: CascaderInputProps<T>) {
  const [isSearch, setIsSearch] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const [focused, setFocused] = useState<boolean>(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const {
    value,
    onChange,
    getNodeLabel,
    nodes,
    renderNode: render,
    isEqual,
    label,
    error,
    disabled,
    required,
    helperText,
  } = props

  const [selected, onSelect] = useState<T | null>(value)

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
          onSelect(value)
        }}
        ref={anchorRef}
        placeholder={
          isSearch ? (value === null ? '' : getLabel(value, getNodeLabel)) : ''
        }
        value={
          isSearch
            ? search
            : value === null
              ? ''
              : getLabel(value, getNodeLabel)
        }
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
          <Cascader<T>
            getNodeLabel={getNodeLabel}
            renderNode={render}
            nodes={nodes}
            isEqual={isEqual}
            selected={selected}
            onSelect={(nextSelect, isLeaf) => {
              onSelect(nextSelect)
              if (isLeaf) {
                setFocused(false)
                onChange(nextSelect)
                setIsSearch(false)
                setSearch('')
              } else {
                onSelect(nextSelect)
              }
            }}
            search={search}
          />
        </Box>
      </EasyPopper>
    </>
  )
}
