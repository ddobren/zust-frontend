import type { PropsWithChildren } from 'react'

import '../styles/App.css'

function MainLayout({ children }: PropsWithChildren) {
  return <main className="app">{children}</main>
}

export default MainLayout
