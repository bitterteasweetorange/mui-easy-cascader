import { CascaderProps } from '../types'

export function Cascader<T>({ nodes }: CascaderProps<T>) {
  return <div>cascader{nodes.length}</div>
}
