import { Button, Paper } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { EasyPopper, EasyPopperProps } from '.'

const meta = {
  title: 'Component/EasyPopper',
  component: EasyPopper,
} satisfies Meta<typeof EasyPopper>

export default meta

type Story = StoryObj<EasyPopperProps>

export const Defalut: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(e.currentTarget)
    }
    const handleClose = () => {
      setAnchorEl(null)
    }

    return (
      <>
        <Button onClick={handleClick}>open</Button>
        <EasyPopper
          anchorEl={anchorEl}
          onClose={handleClose}
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
