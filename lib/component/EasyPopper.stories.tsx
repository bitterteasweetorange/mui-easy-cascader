import { Button, Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { EasyPopper, EasyPopperProps } from '.'

const meta = {
  title: 'Component/EasyPopper',
  component: EasyPopper,
  args: {
    open: false,
  },
  argTypes: {
    open: {
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof EasyPopper>

export default meta

type Story = StoryObj<EasyPopperProps>

export const X: Story = {
  render: (args: Partial<EasyPopperProps>) => {
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
          open={args.open || open}
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
  },
}
