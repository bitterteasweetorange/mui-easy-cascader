import { PropsWithChildren } from 'react'

export type ButtonProps = PropsWithChildren<{
  /**
   * The color of the button
   * @default 'primary'
   * */
  variant?: 'primary' | 'secondary'
}>

export function Button({ children, variant = 'primary' }: ButtonProps) {
  return (
    <button>
      {children}-{variant}
    </button>
  )
}
