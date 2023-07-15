import { Box, ClickAwayListener, Grow, Popper } from '@mui/material'
import React, { Dispatch, SetStateAction, type ReactElement } from 'react'

export type EasyPopperProps = {
  children: ReactElement
  anchorRef: React.RefObject<HTMLButtonElement>
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}
export function EasyPopper({
  children,
  anchorRef,
  setOpen,
  open,
}: EasyPopperProps) {
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  return (
    <Popper
      sx={{
        zIndex: 1000,
      }}
      open={open}
      anchorEl={anchorRef.current}
      transition
      disablePortal
      placement="bottom-start"
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom-start' ? 'left top' : 'left bottom',
          }}
        >
          <Box>
            <ClickAwayListener onClickAway={handleClose}>
              {children}
            </ClickAwayListener>
          </Box>
        </Grow>
      )}
    </Popper>
  )
}
