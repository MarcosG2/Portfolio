import type { ReactNode } from 'react'

type Props = {
  id?: string
  children: ReactNode
  className?: string
}

export function SectionHeading({ id, children, className = '' }: Props) {
  return (
    <h2 id={id} className={`section-title ${className}`}>
      {children}
    </h2>
  )
}
