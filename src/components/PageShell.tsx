import type { ReactNode } from 'react'

import BackToTop from './BackToTop'
import Footer from './Footer'
import Header from './Header'

type PageShellProps = {
  children: ReactNode
  onAccessibilityToggle: () => void
  onNavigate: (path: string) => void
  currentPath: string
}

function PageShell({ children, onAccessibilityToggle, onNavigate, currentPath }: PageShellProps) {
  return (
    <div className="container">
      <Header
        currentPath={currentPath}
        onAccessibilityToggle={onAccessibilityToggle}
        onNavigate={onNavigate}
      />
      {children}
      <Footer onNavigate={onNavigate} />
      <BackToTop />
    </div>
  )
}

export default PageShell
