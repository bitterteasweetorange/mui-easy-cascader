import { Box, TextField } from '@mui/material'
import React, { RefObject, useState } from 'react'
import { Cascader } from 'src/Cascader'
import { EasyPopper } from 'src/EasyPopper'
import { CascaderInputProps } from '../types'

export function CascaderInput<T>(props: CascaderInputProps<T>) {
  const [search, setSearch] = useState<string>('')

  const [open, setOpen] = useState<boolean>(false)
  const anchorRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const { value, nodes, render, isEqual, onChange } = props

  return (
    <>
      <TextField
        autoComplete="off"
        label="search"
        onFocus={() => {
          setOpen(true)
        }}
        inputRef={inputRef}
        ref={anchorRef}
        placeholder="Please enter text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <EasyPopper
        anchorRef={anchorRef as unknown as RefObject<HTMLButtonElement>}
        open={open}
        setOpen={setOpen}
      >
        <Box>
          <Cascader<T>
            render={render}
            nodes={nodes}
            isEqual={isEqual}
            value={value}
            onChange={(nextSelect) => {
              onChange(nextSelect)
              inputRef.current?.focus()
            }}
            search={search}
          />
        </Box>
      </EasyPopper>
    </>
  )
}
