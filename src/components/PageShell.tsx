import type { ReactNode } from 'react'

import BackToTop from './BackToTop'
import Footer from './Footer'
import Header from './Header'

type PageShellProps = {
  children: ReactNode
  onAccessibilityToggle: () => void
  onNavigate: (path: string) => void
  currentPath: string
  isAccessibilityOpen: boolean
}

function PageShell({ children, onAccessibilityToggle, onNavigate, currentPath, isAccessibilityOpen }: PageShellProps) {
  return (
    <div className="container">
      <Header
        currentPath={currentPath}
        onAccessibilityToggle={onAccessibilityToggle}
        onNavigate={onNavigate}
        isAccessibilityActive={isAccessibilityOpen}
      />
      {children}
      <Footer onNavigate={onNavigate} />
      <BackToTop />
    </div>
  )
}

export default PageShell
