import { styled } from '@mui/material'
import { debounceTime, map, skipWhile } from 'rxjs'
import { useObservable } from 'rxjs-hooks'

const StyledMark = styled('mark')<{ focused?: boolean }>(({ focused }) => ({
  backgroundColor: '#fde79b',
  ...(focused && {
    color: '#FAAD14',
  }),
}))

export interface HighlightProps {
  search: string | undefined
  focused?: boolean
  children: string
}

export function Highlight(props: HighlightProps) {
  const { search: searchProp, focused, children } = props
  const search = useObservable(
    (_, inputs$) =>
      inputs$.pipe(
        map(([search]) => search || undefined),
        skipWhile((search) => search === undefined),
        debounceTime(300),
      ),
    undefined as string | undefined,
    [searchProp],
  )
  const stringArray = children.split(new RegExp(`(${search})`, 'g'))

  return (
    <>
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
    </>
  )
}
