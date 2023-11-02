// copied from cascader
import { Box, styled } from '@mui/material'

const StyledMark = styled('mark')<{ focused?: boolean }>(({ focused }) => ({
  backgroundColor: '#fde79b',
  ...(focused && {
    color: '#FAAD14',
  }),
}))

export interface HighlightProps {
  search: string | undefined
  focused?: boolean
  text: string
}

export function Highlight(props: HighlightProps) {
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
