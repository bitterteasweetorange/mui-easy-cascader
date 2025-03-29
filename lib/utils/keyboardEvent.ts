import type { EasyCascaderBaseNode, EasyId } from './types'

export function keyboardEvent<T extends EasyCascaderBaseNode>(
  e: WindowEventMap['keydown'],
  filterData: T[],
  hoverId: EasyId | null,
  setHoverId: (node: EasyId | null) => void,
) {
  const index = filterData.findIndex((node) => node.id === hoverId)
  switch (e.key) {
    case 'Enter':
      return hoverId
    case 'ArrowDown':
      setHoverId(filterData[index + 1]?.id ?? filterData[0]?.id ?? null)
      return null
    case 'ArrowUp':
      setHoverId(
        filterData[index - 1]?.id ??
          filterData[filterData.length - 1]?.id ??
          null,
      )
      return null
    default:
      return null
  }
}
