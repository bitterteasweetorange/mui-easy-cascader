import { Box, TextField } from '@mui/material'
import { ReactNode, RefObject, useMemo, useRef, useState } from 'react'
import { EasyCascader } from 'src/EasyCascader'
import { EasyList, EasyListRefObject } from 'src/EasyList'
import { EasyPopper } from 'src/EasyPopper'
import { useDebounce } from 'use-debounce'
import {
  EasyCascaderBaseNode,
  EasyCascaderDuplicatedProps,
  EasyId,
} from '../types'

type Base<OptionT extends EasyCascaderBaseNode> =
  EasyCascaderDuplicatedProps<OptionT> & {
    label?: ReactNode
    error?: boolean
    helperText?: ReactNode
    required?: boolean
    disabled?: boolean
    displayPath?: boolean
  }

type ValueIsId<OptionT extends EasyCascaderBaseNode> = Base<OptionT> & {
  idAsValue: true
  value: EasyId | null
  onChange: (value: EasyId | null) => void
}
type ValueIsOptionT<OptionT extends EasyCascaderBaseNode> = Base<OptionT> & {
  idAsValue?: false
  value: OptionT | null
  onChange: (value: OptionT | null) => void
}
export type EasyCascaderInputProps<
  OptionT extends EasyCascaderBaseNode,
  IdAsValue extends boolean = false,
> = IdAsValue extends true ? ValueIsId<OptionT> : ValueIsOptionT<OptionT>

export function EasyCascaderInput<
  OptionT extends EasyCascaderBaseNode,
  IdAsValue extends boolean = false,
>(props: EasyCascaderInputProps<OptionT, IdAsValue>) {
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
    displayPath,
    idAsValue,
    ...duplication
  } = props

  const { getNodeLabel, data } = duplication

  const [selectedId, setSelectedId] = useState<EasyId | null>(
    idAsValue ? value : value?.id ?? null,
  )

  const onSelect = (id: EasyId | null) => {
    const node = data.find((node) => node.id === id)
    if (!node) return
    const isLeaf = node?.childrenId?.length === 0 || !node?.childrenId

    setSelectedId(id)
    setHoverId(null)
    if (isLeaf) {
      setFocused(false)
      if (idAsValue) {
        onChange(node.id)
      } else {
        onChange(node)
      }
      setIsSearch(false)
      setSearch('')
    } else {
      setSelectedId(id)
    }
  }
  const [hoverId, setHoverId] = useState<EasyId | null>(null)

  const textValue = useMemo(() => {
    if (value === null) return ''

    const x = data.find((node) => node.id === selectedId)
    if (!x) return ''

    if (!displayPath) return getNodeLabel(x)
    const text = [...(x.pathId || []), x.id]
      ?.map((id) => {
        const node = data.find((node) => node.id === id)
        return node ? getNodeLabel(node) : ''
      })
      .join(' / ')
    return text
  }, [data, selectedId, getNodeLabel, value, displayPath])

  const ref = useRef<EasyListRefObject<OptionT> | null>(null)

  return (
    <>
      <TextField
        onKeyDown={(e) => {
          if (!focused) return
          // for EasyList
          const filterData = ref.current?.filterData || []
          const index = filterData.findIndex((node) => node.id === hoverId)
          switch (e.key) {
            case 'Enter':
              onSelect(hoverId)
              return
            case 'ArrowDown':
              setHoverId(filterData[index + 1]?.id ?? filterData[0]?.id)
              return
            case 'ArrowUp':
              setHoverId(
                filterData[index - 1]?.id ??
                  filterData[filterData.length - 1]?.id,
              )
              return
            default:
              return
          }
        }}
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
          setSelectedId(idAsValue ? value : value?.id ?? null)
        }}
        ref={anchorRef}
        placeholder={isSearch && value ? textValue : ''}
        value={isSearch ? search : textValue}
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
          {debouncedSearch ? (
            <EasyList
              {...duplication}
              search={debouncedSearch}
              selectedId={selectedId}
              hoverId={hoverId}
              onSelect={onSelect}
            />
          ) : (
            <EasyCascader<OptionT>
              {...duplication}
              selectedId={selectedId}
              setSelectedId={onSelect}
            />
          )}
        </Box>
      </EasyPopper>
    </>
  )
}
