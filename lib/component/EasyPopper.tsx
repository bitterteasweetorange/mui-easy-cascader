import {
  Box,
  ClickAwayListener,
  Grow,
  Popper,
  type SxProps,
} from '@mui/material'
import { type ReactElement } from 'react'

export type EasyPopperProps = {
  /**
   * popper reference element
   * */
  children: ReactElement
  /**
   * this determines which anchor prop to refer to when setting the position of the popper
   * */
  anchorEl: HTMLElement | null
  /**
   * callback fired when the component requests to be closed
   * */
  onClose: () => void
  sx?: SxProps
}
export function EasyPopper({
  children,
  anchorEl,
  sx,
  onClose,
}: EasyPopperProps) {
  const handleClose = () => {
    onClose()
  }

  const open = Boolean(anchorEl)

  return (
    <Popper
      sx={{
        ...sx,
        zIndex: 2000,
      }}
      open={open}
      anchorEl={anchorEl}
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
