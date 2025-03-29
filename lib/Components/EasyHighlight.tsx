import { Box, styled } from '@mui/material'

const StyledMark = styled('mark')<{ focused?: boolean }>(({ focused }) => ({
  backgroundColor: '#fde79b',
  ...(focused && {
    color: '#FAAD14',
  }),
}))

export interface EasyHighlightProps {
  search?: string
  focused?: boolean
  text: string
}

export function EasyHighlight(props: EasyHighlightProps) {
  const { search, focused, text } = props

  const stringArray = search
    ? text.split(new RegExp(`(${search})`, 'g'))
    : [text]

  return (
    <Box>
      {stringArray.map((string, index) =>
        string === search ? (
          <StyledMark
            key={index}
            focused={focused}
          >
            {string}
          </StyledMark>
        ) : (
          string
        ),
      )}
    </Box>
  )
}
