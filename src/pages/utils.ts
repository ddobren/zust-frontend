import type { MouseEventHandler } from 'react'

export const createNavigateHandler = (
  onNavigate: (path: string) => void,
  path: string,
): MouseEventHandler<HTMLAnchorElement> => {
  return (event) => {
    event.preventDefault()
    onNavigate(path)
  }
}
