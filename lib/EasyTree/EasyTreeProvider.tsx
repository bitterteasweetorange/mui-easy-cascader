import { createContext, useContext, type PropsWithChildren } from 'react'
import type { EasyNode } from '../utils'
import type { UseEasyTreeReturn } from './useEasyTree'

const EasyTreeContext = createContext<UseEasyTreeReturn | null>(null)

export const EasyTreeProvider = <T extends EasyNode>(
  props: PropsWithChildren<UseEasyTreeReturn<T>>,
) => {
  const { children, ...restProps } = props
  return (
    <EasyTreeContext.Provider
      value={restProps as unknown as UseEasyTreeReturn<EasyNode>}
    >
      {children}
    </EasyTreeContext.Provider>
  )
}

export const useEasyTreeContext = <
  T extends EasyNode,
>(): UseEasyTreeReturn<T> =>
  useContext(EasyTreeContext) as unknown as UseEasyTreeReturn<T>
