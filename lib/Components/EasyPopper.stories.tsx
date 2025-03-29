import { Button, Paper } from '@mui/material'
import { Meta } from '@storybook/react'
import React, { useState } from 'react'
import { EasyPopper } from '.'

const meta = {
  title: 'Components/EasyPopper',
  component: EasyPopper,
} satisfies Meta<typeof EasyPopper>

export default meta

export const Defalut = () => {
  const [open, setOpen] = useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button
        ref={anchorRef}
        onClick={() => {
          setOpen(true)
        }}
      >
        open
      </Button>
      <EasyPopper
        anchorRef={anchorRef}
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      >
        <Paper
          sx={{
            p: 2,
          }}
        >
          content
        </Paper>
      </EasyPopper>
    </>
  )
}
