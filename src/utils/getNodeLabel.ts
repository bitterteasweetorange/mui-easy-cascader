export function getLabel<T>(
  value: T,
  getNodeLabel?: (value: T) => string,
): string {
  if (getNodeLabel) return getNodeLabel(value)
  // if value is primitive type, it will be used as key / label
  if (typeof value !== 'object' && typeof value !== 'function')
    return String(value)
  // if value is object, key / label will be used as key / label
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (value as any)?.label || ''
}
